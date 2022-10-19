import React, {
  useRef,
  useState,
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
  VStack,
  Textarea,
  CircularProgress,
  Input,
  useToast
} from '@chakra-ui/react';
import CreatePipelineDialog from 'components/Dialog/CreatePipelineDialog';
import Editor from 'components/Editor'
import SaveIcon from '@mui/icons-material/Save';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

const CreateUpdate = () => {
  const [createPipeline, setCreatePipeline] = useState({ open: false, data: null });
  const [step, setStep] = useState(0);
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const hiddenFileInput = useRef(null);
  const toast = useToast();

  const handleCreatePipeline = (isStarter) => {
    setStep(1);
  };

  const handleReviewAndSave = () => {
    setReviewLoading(true);
    setTimeout(() => {
      setStep(2);
      setReviewLoading(false);
    }, 2000);
  };

  const handleSave = () => {
    setTimeout(() => {
      setStep(2);
    }, 2000);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleUploadClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFileUploadChange = (event) => {
    const fileUploadData = event.target.files[0];
    if (fileUploadData) {
      const fileUploadname = event.target.files[0].name;
      setIsUploading(true);
      setTimeout(()=>{
        setIsUploading(false);
        toast({
          title: 'Success',
          description: 'File Uploaded!',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        setFileName(fileUploadname.split('.').slice(0, -1).join('.'));
        fileUploadData.text().then((res) => {
          setFileData(res);
          setStep(1);
        })
        setIsUploading(false);
      },1500);
    }
    // const data = new FormData();
    // data.append('file', event.target.files[0]);
    // const config = {
    //   method: 'POST',
    //   url: `data/multiple/`,
    //   data: data  
    // };

    // axios(config)
    //   .then((response) => {
    //     setIsUploading(false);
    //     setStep(1);
    //     toast({
    //       title: 'Success',
    //       description: 'File Uploaded!',
    //       status: 'success',
    //       duration: 9000,
    //       isClosable: true
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast({
    //       title: 'Error',
    //       description: 'Some Error Occured!',
    //       status: 'error',
    //       duration: 9000,
    //       isClosable: true
    //     })
    //   })
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
      <Box pb="20px"/>
      <Box className="input-group">
        <span className="input-group-addon">Search file: </span>
        <Box className="search-form-width">
          <input type="text" className="form-control" placeholder="filename" id="fileSearch" />
        </Box>
      </Box>
      <br />
      <Box className="table-responsive">
        <table className="table" id="filesTable">
          <thead>
            <tr className="table-head">
              <th colSpan="15">Filename</th>
              <th colSpan="2">Last modified</th>
              <th colSpan="2">Size</th>
              <th colSpan="2">Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="15" className="col-sm-15">
                pi.py
              </td>
              <td colSpan="2" className="col-sm-2">Fri Aug 19 2022</td>
              <td colSpan="2" className="col-sm-2">1.52 KB</td>
              <td colSpan="1" className="col-sm-1">
                <Box>
                  <i className="fa fa-cloud-download fa-lg" data-toggle="tooltip" title="Download" />
                </Box>
              </td>
              <td colSpan="1" className="col-sm-1">
                <i className="fa fa-trash fa-lg" style={{ color: '#90cdf4' }} aria-hidden="true" data-toggle="tooltip" title="Delete File" />
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
      <CreatePipelineDialog
      open={createPipeline.open}
      handleClose={() => setCreatePipeline({ open: false, data: null })}
      handleCreate={handleCreatePipeline}
      fileName={fileName}
      setFileName={setFileName}
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
        <GridItem>
          <VStack>
            <Text>TBD....</Text>
          </VStack>
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
          <Button 
          onClick={handleSave}>
          Save Code
          <SaveIcon ml={2} />
          </Button>
        </HStack>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem mr="5" colSpan={1}>
          <Textarea h="100%"/>
        </GridItem>
        <GridItem>
          <Editor
            fileName={fileName}
            setFileName={setFileName}
            setFileData={setFileData}
            fileData={fileData}
          />
        </GridItem>
      </Grid>
    </Box>
      }
    </>
  );
};

export default CreateUpdate;
