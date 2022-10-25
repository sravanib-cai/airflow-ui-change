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
  Heading,
  CircularProgress,
  useToast
} from '@chakra-ui/react';
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import SparkDependencyTable from 'components/Tables/SparkDependencyTable';
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

const SparkDependencyView = (props) => {
  const [loading, setLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const [deleteFile, setDeleteFile] = useState({ open: false, data: null });
  const [tableData, setTableData] = useState([]);
  const hiddenFileInput = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      setLoading(true);
      const config = {
        method: "GET",
        url: `https://exl.workbench.couture.ai/someuri/sparkdependenciesview/${props.groupName}`,
      };
      axios(config)
      .then((response) => {
        const data = Object.entries(response.data.data.files).map((item) => ({filename: item[0],size:item[1].size, time: item[1].time}));
        setTableData(data);        
        setLoading(false);
      })
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleDeleteConfirm = () => {
    try {
      setDelLoading(true);
      const config = {
        method: "GET",
        url: `https://exl.workbench.couture.ai/someuri/sparkdependenciesview/destroy/${props.groupName}/jars/${deleteFile.data.filename}`,
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

  const handleDownload = (data) => {
    try {
      const config = {
        method: 'GET',
        url: `https://exl.workbench.couture.ai/someuri/sparkdependenciesview/download/${props.groupName}/jars/${data.filename}`,
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

  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFileUploadChange = (event) => {
    const fileUploadData = event.target.files[0];
    if (fileUploadData) {
      setIsUploading(true);
      const data = new FormData();
      data.append("file", event.target.files[0]);
      const config = {
          method: 'POST',
          url: `https://exl.workbench.couture.ai/someuri/sparkdependenciesview/${props.groupName}/jars`,
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

  return (
    <>
    <Input
        ref={hiddenFileInput}
        type="file"
        hidden
        accept=".jar, .egg, .py, .zip"
        onChange={handleFileUploadChange}
      />
    <Box>
        <Heading>Spark Dependencies - {props.groupName}</Heading>
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
      <SparkDependencyTable
        loading={loading}
        data={tableData}
        handleDelete={(e, data) => {
          setDeleteFile({ open: true, data: data });
        }}
        handleDownload={(e, data) => {handleDownload(data)}}
      />
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
    </Box>
    </>
  );
};

export default SparkDependencyView;
