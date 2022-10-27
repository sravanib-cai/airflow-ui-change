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
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const SparkDependencyTable = (props) => {
  const linkColor = useColorModeValue("blue.200", "blue.300");
  const [data, setData] = useState([]);
  console.log(data);
  const heading = ["FileName", "Last Modified", "Size", "Links", ""];

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
                  <Box as="span">{item.filename}</Box>
                </Td>
                <Td>
                  <Box as="span">{item.size}</Box>
                </Td>
                <Td>
                  <Box as="span">{item.time}</Box>
                </Td>
                <Td>
                  <IconButton
                    variant="icon"
                    size="xs"
                    onClick={(e) => props.handleDownload(e, item)}
                  >
                    <CloudDownloadIcon />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton
                    variant="icon"
                    size="xs"
                    onClick={(e) => props.handleDelete(e, item)}
                  >
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

export default SparkDependencyTable;
