import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Skeleton,
  IconButton,
  Box,
  useColorModeValue,
  Radio,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const ClusterGroupTable = (props) => {
  const linkColor = useColorModeValue("blue.200", "blue.300");
  const [data, setData] = useState([]);
  const heading = [
    "Group Name",
    "Change Default Group",
    "Configurations",
    "",
    "",
    "",
    "",
    "Delete",
  ];

  useEffect(() => {
    if (props.data) setData(props.data);
  }, [props.data]);

  return (
    <TableContainer h={450} style={{ overflow: "auto" }}>
      <Table variant="simple">
        <Thead bgColor="blue" sx={{ position: "sticky", top: 0, zIndex: 900 }}>
          <Tr sx={{ position: "sticky", top: 0 }}>
            {heading &&
              heading.map((item) => (
                <Th key={item} sx={{ position: "sticky", top: 0 }}>
                  {item}
                </Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {props.loading ? (
            <Skeleton w="100%" height="50px" />
          ) : (
            data.map((item, idx) => (
              <Tr key={idx}>
                <Td>
                  <Box as="span">{item[0]}</Box>
                </Td>
                <Td>
                  <Radio
                    onChange={(e) => {
                      if (e.target.checked) props.handleDefaultGroup(item[0]);
                    }}
                    isChecked={item[1]}
                  >
                    {item[1] ? "Default Group" : "Make this Group Default"}
                  </Radio>
                </Td>
                <Td>
                  <Box
                    as="span"
                    color={linkColor}
                    _hover={{ color: "blue.100" }}
                  >
                    <Link
                      to={`/${props.projectId}/${props.projectName}/config/clusterconfig/datalakeconfig/${item[0]}`}
                      color="currentColor"
                    >
                      {`Data Lake Config.`}
                    </Link>
                  </Box>
                </Td>
                <Td>
                  <Box
                    as="span"
                    color={linkColor}
                    _hover={{ color: "blue.100" }}
                  >
                    <Link
                      to={`/${props.projectId}/${props.projectName}/config/clusterconfig/sparkconfig/${item[0]}`}
                      color="currentColor"
                    >
                      {`Spark Config.`}
                    </Link>
                  </Box>
                </Td>
                <Td>
                  <Box
                    as="span"
                    color={linkColor}
                    _hover={{ color: "blue.100" }}
                  >
                    <Link
                      to={`/${props.projectId}/${props.projectName}/config/clusterconfig/sparkdependency/${item[0]}`}
                      color="currentColor"
                    >
                      {`Spark Dependency`}
                    </Link>
                  </Box>
                </Td>
                <Td>
                  <Box
                    as="span"
                    color={linkColor}
                    _hover={{ color: "blue.100" }}
                  >
                    <Link
                      to={`/${props.projectId}/${props.projectName}/config/clusterconfig/kerberosconfig`}
                      color="currentColor"
                    >
                      {`Kerberos Config.`}
                    </Link>
                  </Box>
                </Td>
                <Td>
                  <Box
                    as="span"
                    color={linkColor}
                    _hover={{ color: "blue.100" }}
                  >
                    <Link
                      to={`/${props.projectId}/${props.projectName}/config/clusterconfig/livyconfig`}
                      color="currentColor"
                    >
                      {`Livy Config.`}
                    </Link>
                  </Box>
                </Td>
                <Td>
                  <IconButton onClick={(e) => props.handleDelete(e, item)}>
                    <DeleteIcon />
                  </IconButton>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ClusterGroupTable;
