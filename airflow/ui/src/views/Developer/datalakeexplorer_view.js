import React, { useState, useEffect } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Heading,
  Input,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

const DataLakeExplorerView = (props) => {
  const { promises: Fs } = require('fs');
  const [folder, setFolderResponse] = useState({});
  const [filepath, setFilePath] = useState('');
  const [path, setPath] = useState('');
  // const [datapath, setData] = useState({});
  const [strBucket, setStrBucket] = useState();
  const [strPrefix, setStrPrefix] = useState('');
  const [loading, setLoading] = useState(false);
  const { projectId, projectName } = props;

  const linkColor = useColorModeValue('blue.200', 'blue.300');
  const heading = ['Filename'];
  // const heading = ['Filename', 'File Owner', 'Last Modified', 'Size'];

  useEffect(() => {
    axios
      // .get(`https://exl.workbench.couture.ai/workbench-expt/sparkconfigurationview/config_group_1`)
      .get(`${process.env.API_URL}/s3bucketview/`)
      .then((res) => {
        setFolderResponse(res.data.data);
        setStrBucket(res.data.data.str_bucket);
        setStrPrefix('Datastores/');
        // setFilePath(res.data.data.str_bucket);
        setPath(res.data.data.str_prefix)
        console.log('set data', res.data.data);
      });
  },[]);

  // const checkIsFile = (props) => {
  //   const file = props;
  //   fs.lstatSync(file).isFile();
  //   return 
  // }
  // const isFile = (path) => {  
  //   const stats = Fs.stat(path);
  //   return stats.isFile();
  // }

  const fetchFiles = (fileName) => {
    const file=fileName;
    console.log('file', file);
    axios
      // .get(`https://exl.workbench.couture.ai/workbench-expt/sparkconfigurationview/config_group_1`)
      .get(`${process.env.API_URL}/s3bucketview/bucket?bucket=${strBucket}&path=${file}`)
      .then((res) => {
        setFolderResponse(res.data.data);
        // setStrBucket(res.data.data.str_bucket);
        setStrPrefix(res.data.data.str_prefix);
        // setFilePath(res.data.data.str_bucket);
        setPath(file)
        console.log('set data', res.data.data);
      });

  // const fetchFiles = async () => {
  //   try {
  //     // const token = localStorage.getItem('token');
  //     const token = 'read';
  //     const config = {
  //       method: 'GET',
  //       params: filepath,
  //       url: `${process.env.API_URL}/s3bucketview/bucket?bucket=${strBucket}&path=${strPrefix}`,
  //       // url: 'https://exl.workbench.couture.ai/someuri/s3bucketview/',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
    // console.log('config url', config.url);
    // const response = await axios(config);
    // setFolderResponse(response.data.data);
    // // setFilePath(`${strPrefix}`)
    // setPath(`${strPrefix}`)
    // console.log('full filepath', `${strBucket}/${path}`);
    // console.log(response.data.data);
    // // setStrBucket(response.data.data.str_bucket);
    // setStrPrefix(response.data.data.str_prefix);
    // } catch (e) {
    //   // TODO: handle error here
    // }
  };

  const AddtoEDA = async () => {
    const data = {
      path,
      bucket,
    };

    try {
      const token = 'write';
      // const token = userStore.user.access;
      const formData = new FormData();
      formData.append('path', path);
      formData.append('bucket', strBucket);

      const config = {
        method: 'POST',
        url: `${process.env.API_URL}/s3bucketview/add-to-EDA`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      };

      await axios(config);

    } catch (e) {
      setLoading(false);
      // handle error here
    }
  };

  // useEffect(() => {
  //   fetchFiles();
  //   // eslint-disable-next-line
  //     }, []);

  useEffect(() => {
    // fetchFiles();
    console.log('filepath', path);
    // eslint-disable-next-line
      }, [path]);

  return (
    <div>
      <div>
        <div>
          <span className="input-form-addon spark-form-sep">File path:</span>
        </div>
        <div className="input-form form-width">
          <Input
            mb={2}
            placeholder={`${strBucket}/${path}`}
            _placeholder={{ color: 'white' }}
              // autoFocus
            // color="white"
            // bgColor="gray.900"
            h="34px"
            padding="6px 12px"
            fontSize="14px"
            lineHeight="1.428571429"
            borderRadius="4px"
            ml="20"
          />
        </div>
      </div>
      <Box w="100%" h={500} mt="20px">
        <TableContainer h={450} style={{ overflow: 'auto' }}>
          <Table variant="simple">
            <Thead bgColor="blue" sx={{ position: 'sticky', top: 0, zIndex: 900 }}>
              <Tr sx={{ position: 'sticky', top: 0 }}>
                {heading && heading.map((item) => (
                  <Th key={item} sx={{ position: 'sticky', top: 0 }}>
                    {item}
                  </Th>
                ))}
                <Th sx={{ position: 'sticky', top: 0 }} />
              </Tr>
            </Thead>
            <Tbody>
              {/* <Tr>
                <Td>
                  <Box
                    as="span"
                    color={linkColor}
                    _hover={{ color: 'blue.100' }}
                  >
                    <Link to= "#" onClick={fetchFiles} color="currentColor">{datapath.files[0][0]}</Link>
                  </Box>
                </Td>
              </Tr> */}
              {Array.isArray(folder.files) && folder.files.map((item) => (
                <Tr key={item}>
                  <Td>
                    <Box
                      as="span"
                      color={linkColor}
                      _hover={{ color: 'blue.100' }}
                      onClick={() => fetchFiles(item[0])}
                    >
                      {/* <Link to= "#" 
                        // onClick={
                        //   fetchFiles(file=item[0])
                        // } 
                        onClick={fetchFiles}
                        color="currentColor"
                      > */}
                        {item[0]}
                      {/* </Link> */}
                    </Box>
                  </Td>
                  {/* <Td>{item.created_at}</Td>
                  <Td>{item.creator_user}</Td>
                  <Td>{item.last_modified}</Td> */}
                  {(item[0].indexOf('.')!==-1) && (
                    <Td>
                      <Link to={`/${props.projectId}/${props.projectName}/developer/auto-eda`}>
                        <Button
                          // onClick={AddtoEDA}
                          colorScheme="blue"
                          size="sm"
                          mr="2"
                          float="right"
                        >
                          Run Auto EDA
                        </Button>
                      </Link>
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
    
  );
};


export default withRouter(DataLakeExplorerView);
