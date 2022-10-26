import React, { useEffect, useState, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {
  Button,
  Box,
  Spacer,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  Text,
  Heading,
  HStack,
  VStack,
  CircularProgress,
  useToast
} from '@chakra-ui/react';
import axios from "axios";
import DataLakeConfigTable from 'components/Tables/DataLakeConfigTable';
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import "font-awesome/css/font-awesome.min.css";


const DataLakeView = (props) => {
  const [loading, setLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const [deleteFile, setDeleteFile] = useState({ open: false, data: null });
  const [s3Data, setS3Data] = useState([]);
  const [hadoopData, setHadoopData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [currentState, setCurrentState] = useState("S3");
  const hiddenFileInput = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();

  const fetchData = () => {
    try {
    setLoading(true);
    const config = {
      method: "GET",
      url: `${process.env.API_URL}/hadoopconfigurationview/list/${props.groupName}/`,
    };
    axios(config)
    .then((response) => {
      console.log(response);
      const s3 = response.data.data.files.s3;
      const s3Data = Object.entries(s3).map((item) => ({filename: item[0],size:item[1].size, time: item[1].time}));
      const hadoop = response.data.data.files.hadoop;
      const hadoopData = Object.entries(hadoop).map((item) => ({filename: item[0],size:item[1].size, time: item[1].time}));
      
      currentState === "S3" ? setTableData(s3Data):setTableData(hadoopData);
      setS3Data(s3Data);
      setHadoopData(hadoopData);
      setLoading(false);
      })
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleFileUploadChange = (event) => {
    const fileUploadData = event.target.files[0];
    if (fileUploadData) {
      setIsUploading(true);
      const data = new FormData();
      data.append(`${currentState.toLowerCase()}-file`, event.target.files[0]);
      const config = {
          method: 'POST',
          url: `${process.env.API_URL}/hadoopconfigurationview/upload/${props.groupName}?datalake_source=${currentState.toLowerCase()}`,
          data: data  
        };
        
        axios(config)
        .then((response) => {
          setIsUploading(false);
          fetchData();
          toast({
              title: 'Success',
              description: 'File Uploaded!',
              status: 'success',
              duration: 9000,
              isClosable: true
            })
          })
        .catch((error) => {
          console.log(error);
          toast({
              title: 'Error',
              description: 'Some Error Occured!',
              status: 'error',
              duration: 9000,
              isClosable: true
            })
          })
    }
  };

    const handleDownload = (data) => {
    try {
      const config = {
        method: 'GET',
        url: `${process.env.API_URL}/hadoopconfigurationview/download/${props.groupName}/${data.filename}?datalake_source=${currentState.toLowerCase()}`,
        responseType: 'blob'
      };
      axios(config)
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${data.filename}`);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteConfirm = () => {
    try {
      setDelLoading(true);
      const config = {
        method: "GET",
        url: `${process.env.API_URL}/hadoopconfigurationview/destroy/${props.groupName}/${deleteFile.data.filename}?datalake_source=${currentState.toLowerCase()}`,
      };
      axios(config).then((res) => {
        toast({
          title: "Success",
          description: "File Deleted!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setDeleteFile({ open: false, data: null });
        fetchData();
        setDelLoading(false);
      });
    } catch (e) {
      console.log(e);
      setDeleteFile({ open: false, data: null });
      setDelLoading(false);
      // TODO: handle error here
    }
  };

  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    currentState === "S3" ? setTableData(s3Data) : setTableData(hadoopData);
  }, [currentState]);

  return (
    <>
    <Box>
      <Input
        ref={hiddenFileInput}
        type="file"
        hidden
        accept=".xml"
        onChange={handleFileUploadChange}
      />
      <VStack alignItems={"start"} pb="20px">
        <Heading>Data Lake Configuration</Heading>
        <Text>Choose DataLake type for this Config Group:</Text>
        <HStack spacing={0}>
          {["S3", "HADOOP"].map((item, idx) => (
            <Button key={idx} borderColor="inherit" onClick={()=>setCurrentState(item)} bg={currentState===item ? "#90cdf4" : "#2D3748"} color={currentState===item ? "black" : "white"} borderRadius={0}>{item[0].toUpperCase() + item.slice(1)}</Button>
          ))
         }
        </HStack>
      </VStack>
      <Box>
        <Heading>{`${currentState[0].toUpperCase() + currentState.slice(1).toLowerCase()} Configuration Groups - ${props.groupName}`}</Heading>
      </Box>
      <Flex pt="15px">
        <Spacer />
        <Button
         onClick={handleUploadClick}
         disabled={isUploading}
        >
        {!isUploading ? `Upload File(s)` : `Uploading...`}
        {isUploading && <CircularProgress size="20px" isIndeterminate ml={2} />}
        </Button>
      </Flex>
      <Box pt="5" pb="5">
        <InputGroup>
          <InputLeftAddon bg="#2D3748" children="Search File: " />
          <Input type="tel" placeholder="filename" />
        </InputGroup>
      </Box>
      <DataLakeConfigTable
        loading={loading}
        data={tableData}
        handleDelete={(e, data) => {
          setDeleteFile({ open: true, data: data });
        }}
        handleDownload={(e, data) => {handleDownload(data)}}
      />
    </Box>
    <ConfirmationDialog
      open={deleteFile.open}
      handleClose={() => setDeleteFile({ open: false, data: null })}
      onConfirm={handleDeleteConfirm}
      loading={delLoading}
      title="Confirmation"
      body="Are you sure you want to delete this?"
      cancelText="Cancel"
      confirmText="Delete"
      />
    </>
  );
};

export default DataLakeView;
