import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Skeleton,
  Text,
  CircularProgress,
  HStack
} from "@chakra-ui/react";
import 'font-awesome/css/font-awesome.min.css';
import CancelIcon from '@mui/icons-material/Cancel';
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import axios from 'axios';

const SparkConfigView = (props) => {
  const [loading, setLoading] = useState(false);
  const [argData, setArgData] = useState([]);
  const [configData, setConfigData] = useState([]);
  const [newArgData, setNewArgData] = useState([]);
  const [newConfigData, setNewConfigData] = useState([]);
  const [deleteFile, setDeleteFile] = useState({ open: false, data: null });

  const fetchFiles = async () => {
    try {
      console.log("IN FETCH FILES")

      const config = {
        method: 'GET',
        url: 'https://exl.workbench.couture.ai/someuri/codeartifactview/',
      };

      const response = await axios(config);
      console.log("SHOW RESPONSE")
      console.log(response.data.data.files)
    } catch (e) {
      console.log(e)

    }
  };

  useEffect(() => {
    fetchData();
    fetchFiles();
  },[]);
  
  const fetchData = () => {
    try {
      setLoading(true);
      const config = {
        method: "GET",
        url: `https://exl.workbench.couture.ai/someuri/sparkconfigurationview/${props.groupName}`
      };
      axios(config)
        .then((response) => {
          setArgData(Object.entries(response.data.data.arguments));
          setConfigData(Object.entries(response.data.data.configurations));
          console.log(response);
          setLoading(false);
        })
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    try {
      setLoading(true);
      const formData = new FormData();

      argData.forEach((item, index) => formData.append(item[0], item[1]));
      configData.forEach((item, index) => formData.append(item[0], item[1]));
      let validIdx = 0;
      newArgData.forEach((item, index) => {
        if(item[0]) {
          formData.append(`new-arg-key-${validIdx}`,item[0]);
          item[1] ? formData.append(`new-arg-value-${validIdx}`,item[1]) : formData.append(`new-arg-value-${validIdx}`,"");
          validIdx++;
        }
      });
      validIdx = 0;
      newConfigData.forEach((item, index) => {
        if(item[0]) {
          formData.append(`new-config-key-${validIdx}`,item[0]);
          item[1] ? formData.append(`new-config-value-${validIdx}`,item[1]) : formData.append(`new-config-value-${validIdx}`,"");
          validIdx++;
        }
      });

      const config = {
        method: "POST",
        url: `https://exl.workbench.couture.ai/someuri/sparkconfigurationview/${props.groupName}`,
        data: formData
      };
      axios(config)
        .then((response) => {
          fetchData();
          setLoading(false);
        })
        .catch((e) => setLoading(false));
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleDeleteConfirm = () => {
    if (deleteFile.data.type === "old") {
      if (deleteFile.data.arr === "arguments") {
        const newArr = argData.filter((item, idx) => idx !== deleteFile.data.k );
        setArgData(newArr);
      } else {
        const newArr = configData.filter((item, idx) => idx !== deleteFile.data.k );
        setConfigData(newArr);
      }
    } else {
      if (deleteFile.data.arr === "arguments") {
        const newArr = newArgData.filter((item, idx) => idx !== deleteFile.data.k );
        setNewArgData(newArr);
      } else {
        const newArr = newConfigData.filter((item, idx) => idx !== deleteFile.data.k );
        setNewConfigData(newArr);
      }
    }
    setDeleteFile({ open: false, data: null });

  };

  const handleAddkey = (keyAdd) => {
    if(keyAdd === "arguments") {
      let tempArrData = [...newArgData];
      tempArrData.push(["",""]);
      setNewArgData(tempArrData);
    } else {
      let tempArrData = [...newConfigData];
      tempArrData.push(["",""]);
      setNewConfigData(tempArrData);
    }
  };

  return (
    <>
      <Box mb="5">
        <Heading>{`Spark Configuration - ${props.groupName}`}</Heading>
      </Box>
      <Box mt="10">
        <Heading mb="5">Arguments</Heading>
        {loading ? <Skeleton /> : 
          <Grid gap={6} templateColumns="repeat(7, 1fr)">
          {argData.map((k,idx) => (
            <>
              <GridItem key={idx} colSpan={2}>
                <Text>{k[0]}</Text>
              </GridItem>
              <GridItem key={idx} colSpan={4}>
                <Input
                  onChange={(e)=> {
                      setArgData(argData.map((item,i) => idx === i ? Object.assign([...item],{[1]: e.target.value}) : item))
                    }}
                  value={k[1]}
                />
              </GridItem>
              <GridItem key={idx} colSpan={1}>
                <Button onClick={() => setDeleteFile({ open: true, data: {arr: "arguments", k:idx, type: "old"} })}>
                  <CancelIcon />
                </Button>
              </GridItem>
            </>
            ))}
            {newArgData.map((item,i) => (
              <>
                <GridItem key={i} colSpan={2}>
                  <Input
                    onChange={(e)=> {
                      setNewArgData(newArgData.map((item,idx) => idx === i ? Object.assign([...item],{[0]: e.target.value}) : item))
                    }}
                    value={item[0]}
                    placeholder="Enter key"
                    />
                </GridItem>
                <GridItem key={i} colSpan={4}>
                  <Input
                    onChange={(e)=> {
                      setNewArgData(newArgData.map((item,idx) => idx === i ? Object.assign([...item],{[1]: e.target.value}) : item))
                    }}
                    value={item[1]}
                    placeholder="Enter value"
                    />
                </GridItem>
                <GridItem key={i} colSpan={1}>
                  <Button onClick={() => setDeleteFile({ open: true, data: {arr: "arguments", k:i, type: "new"} })}>
                    <CancelIcon />
                  </Button>
              </GridItem>
              </>
            ))}
            <GridItem colSpan={7}>
              <Flex mt="20px">
                <Spacer />
                <Button
                  colorScheme="blue"
                  size="sm"
                  mr="2"
                  onClick={() => handleAddkey("arguments")}
                >
                  {`Add in Arguments`}
                </Button>
              </Flex>
            </GridItem>
                  
            {configData.map((k,idx) => (
            <>
              <GridItem key={idx} colSpan={2}>
                <Text>{k[0]}</Text>
              </GridItem>
              <GridItem key={idx} colSpan={4}>
                <Input
                  onChange={(e)=> {
                      setConfigData(configData.map((item,i) => idx === i ? Object.assign([...item],{[1]: e.target.value}) : item))
                    }}
                  value={k[1]}
                />
              </GridItem>
              <GridItem key={idx} colSpan={1}>
                <Button onClick={() => setDeleteFile({ open: true, data: {arr: "config", k:idx, type: "old"} })}>
                  <CancelIcon />
                </Button>
              </GridItem>
            </>
            ))}
            {newConfigData.map((item,i) => (
              <>
                <GridItem key={i} colSpan={2}>
                  <Input
                    onChange={(e)=> {
                      setNewConfigData(newConfigData.map((item,idx) => idx === i ? Object.assign([...item],{[0]: e.target.value}) : item))
                    }}
                    value={item[0]}
                    placeholder="Enter key"
                    />
                </GridItem>
                <GridItem key={i} colSpan={4}>
                  <Input
                    onChange={(e)=> {
                      setNewConfigData(newConfigData.map((item,idx) => idx === i ? Object.assign([...item],{[1]: e.target.value}) : item))
                    }}
                    value={item[1]}
                    placeholder="Enter value"
                    />
                </GridItem>
                <GridItem key={i} colSpan={1}>
                  <Button onClick={() => setDeleteFile({ open: true, data: {arr: "config", k:idx, type: "new"} })}>
                    <CancelIcon />
                  </Button>
              </GridItem>
              </>
            ))}

            <GridItem colSpan={7}>
              <Flex mt="20px">
                <Spacer />
                <Button
                  colorScheme="blue"
                  size="sm"
                  mr="2"
                  onClick={() => handleAddkey("confgigurations")}
                >
                  {`Add in Configurations`}
                </Button>
              </Flex>
            </GridItem>
            </Grid>
          }
        </Box>

      <Flex mt="20px" justifyContent="center">
        {/* <Spacer /> */}
        <Button
          colorScheme="blue"
          size="sm"
          mr="2"
          onClick={handleSubmit}
          disabled={loading}
          >
          Submit
          {loading && <CircularProgress size="20px" isIndeterminate ml={2} />}
        </Button>
      </Flex>
      <ConfirmationDialog
        open={deleteFile.open}
        handleClose={() => setDeleteFile({ open: false, data: null })}
        onConfirm={handleDeleteConfirm}
        loading={loading}
        title="Confirmation"
        body="Are you sure you want to delete this?"
        cancelText="Cancel"
        confirmText="Delete"
      />
    </>
  );
};

export default SparkConfigView;
