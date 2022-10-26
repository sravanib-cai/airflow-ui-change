import React, {
  useRef,
  useState,
  useEffect
} from 'react';
import {
  Button,
  Box,
  Spacer,
  Flex,
  Text,
  Grid,
  GridItem,
  Heading,
  HStack,
  InputGroup,
  Input,
  InputLeftAddon,
  VStack,
  Textarea,
  CircularProgress,
  useToast
} from '@chakra-ui/react';
import CreatePipelineDialog from 'components/Dialog/CreatePipelineDialog';
import CreateUpdateTable from 'components/Tables/CreateUpdateTable';
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import ReactDiffViewer from "react-diff-viewer";
import Editor from 'components/Editor'
import SaveIcon from '@mui/icons-material/Save';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

const CreateUpdate = (props) => {
  const [createPipeline, setCreatePipeline] = useState({ open: false, data: null });
  const [step, setStep] = useState(0);
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState("");
  const [newFileData, setNewFileData] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const hiddenFileInput = useRef(null);
  const toast = useToast();
  const [createLoading, setCreateLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const [deleteFile, setDeleteFile] = useState({ open: false, data: null });
  const [tableData, setTableData] = useState([]);
  const [fileUploadData, setFileUploadData] = useState({});
  
  const fetchTableData = () => {
    try {
      setLoading(true);
      const config = {
        method: "GET",
        url: `https://exl.workbench.couture.ai/someuri/managedagsview/add_dag`,
      };
      axios(config).then((response) => {
        const data = Object.entries(response.data.file_data).map((item, idx) => ({...item[1], filename: item[0]}));
        console.log(data);
        setTableData(data);
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
    }
  };

  const handleCreatePipeline = (isStarter) => {
    try {
      setCreateLoading(true);
      const pathName = `${fileName}.py`;
      const insert_starter_content = isStarter ? "on" : "off";
      const config = {
        method: "GET",
        url: `https://exl.workbench.couture.ai/someuri/managedagsview/editdag/${pathName}?new=1&insert_starter_content=${insert_starter_content}`,
      };
      axios(config).then((response) => {
        console.log(response);
        setFileData(response.data.code);
        setNewFileData(response.data.code);
        setCreateLoading(false);
        setCreatePipeline({ open: false, data: null })
        setStep(1);
      });
    } catch (e) {
        setCreateLoading(false);
    };
  };

  const handleReviewAndSave = () => {
    setReviewLoading(true);
    setTimeout(() => {
      setStep(2);
      setReviewLoading(false);
    }, 1000);
  };

  const handleSave = () => {
    try {
      if(Object.entries(fileUploadData).length > 0) {
        setLoading(true);
        console.log(fileUploadData);
        const fileUploadname = fileUploadData.name;
        const data = new FormData();
        data.append("file", fileUploadData);
        data.append("filename", `${props.projectName}_${fileUploadname}`);
        const config = {
          method: 'POST',
          url: `https://exl.workbench.couture.ai/someuri/managedagsview/add_dag`,
          data: data  
        };

        axios(config)
          .then((response) => {
            toast({
              title: 'Success',
              description: 'File Uploaded!',
              status: 'success',
              duration: 9000,
              isClosable: true
            });
            setLoading(false);
            setStep(0);
            fetchTableData();
            setFileName(`${props.projectName}_${fileUploadname}`);
            setFileUploadData({});
          })
          .catch((error) => {
            console.log(error);
            setFileUploadData({});
            setLoading(false);
            toast({
              title: 'Error',
              description: 'Some Error Occured!',
              status: 'error',
              duration: 9000,
              isClosable: true
            })
          })
      } else {
        setLoading(true);
        const pathName = `${fileName}.py`
        const data = new FormData();
        data.append("code",fileData);
        const config = {
          method: "POST",
          url: `https://exl.workbench.couture.ai/someuri/managedagsview/editdag/${pathName}?new=1`,
          data: data
        };
        axios(config)
          .then((response) => {
            toast({
              title: 'Success',
              description: 'File Saved!',
              status: 'success',
              duration: 9000,
              isClosable: true
            })
            console.log(response);
            setLoading(false);
            setStep(0);
            fetchTableData();
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
      }
    } catch (e) {
        console.log(e);
        setLoading(false);
    };
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const handleDownload = (data) => {
    try {
      const pathName = `${data.filename}`
      const config = {
        method: 'GET',
        url: `https://exl.workbench.couture.ai/someuri/managedagsview/dag_download/${pathName}`,
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
      const pathName = `${deleteFile.data.filename}`
      const config = {
        method: "DELETE",
        url: `https://exl.workbench.couture.ai/someuri/managedagsview/add_dag?filename=${pathName}`,
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
        fetchTableData();
        setDelLoading(false);
      });
    } catch (e) {
      console.log(e);
      setDeleteFile({ open: false, data: null });
      setDelLoading(false);
      // TODO: handle error here
    }
  };
  
  useEffect(() => {
    fetchTableData();
  }, []);

  // useEffect(() => {
  //   if(step===0)
  //     fetchTableData();
  // }, [step]);

  const handleFileUploadChange = (event) => {
    const data = event.target.files[0];
    setIsUploading(true);
    setFileUploadData(data);
    setFileName(`${props.projectName}_${data.name.split('.').slice(0, -1).join('.')}`);
    data.text().then((res) => {
        setFileData(res);
        setNewFileData(res);
        setStep(1);
        setIsUploading(false);
      });

    // if (fileUploadData) {
    //   const fileUploadname = event.target.files[0].name;
    //   const data = new FormData();
    //   data.append("file", fileUploadData);
    //   data.append("filename", fileUploadname);
    //   const config = {
    //     method: 'POST',
    //     url: `https://exl.workbench.couture.ai/someuri/managedagsview/add_dag`,
    //     data: data  
    //   };

    //   axios(config)
    //     .then((response) => {
    //       toast({
    //         title: 'Success',
    //         description: 'File Uploaded!',
    //         status: 'success',
    //         duration: 9000,
    //         isClosable: true
    //       })
    //       setFileName(`${props.projectName}_${fileUploadname.split('.').slice(0, -1).join('.')}`);
          
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       toast({
    //         title: 'Error',
    //         description: 'Some Error Occured!',
    //         status: 'error',
    //         duration: 9000,
    //         isClosable: true
    //       })
    //     })
    //   }
  };

  return (
    <>
    {step === 0 ? 
    <Box>
      <Input
        ref={hiddenFileInput}
        type="file"
        hidden
        accept=".py"
        onChange={handleFileUploadChange}
      />
      <Flex pb="20px">
        <Spacer />
        <Button
          colorScheme="blue"
          size="sm"
          mr="2"
          onClick={handleUploadClick}
          disabled={isUploading}
        >
        {!isUploading ? `Upload pipeline file(s)` : `Uploading...`}
        {isUploading && <CircularProgress size="20px" isIndeterminate ml={2} />}
        </Button>

        <Button
          size="sm"
          mr="2"
          onClick={() => setCreatePipeline({ open: true, data: null })}
        >
          Create new Pipeline
        </Button>
      </Flex>
      
      <Box mt="5" mb="5">
        <InputGroup>
          <InputLeftAddon bg="#2D3748" children="Search File: " />
          <Input type="tel" placeholder="filename" />
        </InputGroup>
      </Box>
      <Box>
        <CreateUpdateTable
          loading={loading}
          data={tableData}
          handleDelete={(e, data) => {
            setDeleteFile({ open: true, data: data });
          }}
          handleDownload={(e, data) => {handleDownload(data)}}
      />
      </Box>
      <CreatePipelineDialog
        loading={createLoading}
        open={createPipeline.open}
        handleClose={() => setCreatePipeline({ open: false, data: null })}
        handleCreate={(isStarter) => handleCreatePipeline(isStarter)}
        fileName={fileName}
        setFileName={setFileName}
        projectName={props.projectName}
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
    </Box> : step === 1 ? 
    <Box>
      <Box pb="20px">
        <Heading>{`${fileName}.py`}</Heading>
      </Box>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={4}>
          <HStack pb="10px">
          <Text>Edit Code</Text>
          <Spacer />
          <Button 
            onClick={handleReviewAndSave}
            disabled={reviewLoading}
          >
          Review & Save
          {reviewLoading && <CircularProgress size="20px" isIndeterminate ml={2} />}
          </Button>
          </HStack>
          <Editor
            fileName={fileName}
            setFileName={setFileName}
            setFileData={setFileData}
            fileData={fileData}
          />
        </GridItem>
      </Grid>
    </Box>
      :
      <Box>
      <Box pb="20px">
        <Heading>{`${fileName}.py`}</Heading>
      </Box>
      <Box>
        <HStack pb="10px">
          <Text>Review Changes</Text>
          <Spacer />
          <Button
            mr="5"
            onClick={handleBack}
          >
          <KeyboardBackspaceRoundedIcon mr="5" />
          Back to Edit Mode
          </Button>
          <Button onClick={handleSave}>
            {loading && <CircularProgress size="20px" isIndeterminate ml={2} />}
            Save Code
            <SaveIcon ml={2} />
          </Button>
        </HStack>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {/* <GridItem mr="5" colSpan={1}>
          <Textarea h="100%"/>
        </GridItem> */}
        <GridItem colSpan={2}>
        <ReactDiffViewer oldValue={newFileData} newValue={fileData} showDiffOnly={false} splitView={true} />
          {/* <Editor
            fileName={fileName}
            setFileName={setFileName}
            setFileData={setFileData}
            fileData={fileData}
          /> */}
        </GridItem>
      </Grid>
    </Box>
      }
    </>
  );
};

export default CreateUpdate;
