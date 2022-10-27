import React, { useState, useEffect } from "react";
import "../../static/buttonstyle.css";
// import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

const ProjectServicesView = (props) => {
  // const [folder, setFolderResponse] = useState({});
  // const [filepath, setFilePath] = useState('');
  // const [path, setPath] = useState('');
  const [service, setService] = useState({});
  // const [strBucket, setStrBucket] = useState();
  // const [strPrefix, setStrPrefix] = useState('');
  // const [loading, setLoading] = useState(false);
  // const { projectId, projectName } = props;

  const linkColor = useColorModeValue("blue.200", "blue.300");
  const heading = ["Key", "Value"];
  // const heading = ['Filename', 'File Owner', 'Last Modified', 'Size'];

  useEffect(() => {
    axios
      // .get(`https://exl.workbench.couture.ai/workbench-expt/sparkconfigurationview/config_group_1`)
      .get(`${process.env.API_URL}/api/experimental/project_services`)
      .then((res) => {
        setService(res.data);
        // setStrBucket(res.data.data.str_bucket);
        // setStrPrefix('Datastores/');
        // setFilePath(res.data.data.str_bucket);
        // setPath(res.data.data.str_prefix)
        console.log("set service", res.data);
      });
  }, []);

  useEffect(() => {
    // fetchFiles();
    console.log("data", service);
    // eslint-disable-next-line
  }, [service]);

  return (
    <Box w="100%" h={500} mt="20px">
      <TableContainer h={450} style={{ overflow: "auto" }}>
        <Table variant="simple">
          <Thead
            bgColor="blue"
            sx={{ position: "sticky", top: 0, zIndex: 900 }}
          >
            <Tr sx={{ position: "sticky", top: 0 }}>
              {heading &&
                heading.map((item) => (
                  <Th key={item} sx={{ position: "sticky", top: 0 }}>
                    {item}
                  </Th>
                ))}
              <Th sx={{ position: "sticky", top: 0 }} />
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(service).map((value, key) => (
              <Tr>
                <Td>{value[0]}</Td>
                <Td>{value[1]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withRouter(ProjectServicesView);
