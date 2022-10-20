import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Box,
  Checkbox,
} from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const EDATable = (props) => {
  // const navigate = useNavigate();
  const { heading, data } = props;

  // const handleClick = (params) => {
  //   navigate(`/${params.id}/overview`, {
  //     state: { projectId: params.id, projectName: params.name },
  //   });
  // };
  // props.data.map((item, i) => (
  //    console.log(i, item.name, item.project_type);
  // );
  return (
    <TableContainer h={400} style={{ overflow: 'auto' }}>
      <Table variant="simple">
        <Thead 
        // bgColor="blue" 
        sx={{ position: 'sticky', top: 0, zIndex: 900 }}>
          <Tr sx={{ position: 'sticky', top: 0 }}>
            {heading && heading.map((item) => (
              <Th key={item} sx={{ position: 'sticky', top: 0 }}>
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Array.isArray(data) && data.map((item) => (
            <Tr key={item.id}>
              {/* Change url to project name variable */}
              <Td>
                <Checkbox>{item.connectionUri}</Checkbox>
              </Td>
              {/* <Td>{item.project_description}</Td> */}
              {/* <Td>{item.createdAt}</Td>
              <Td>{item.creatorUser}</Td>
              <Td>{item.lastModified}</Td> */}
              {/* <Td>{item.net_usage}</Td> */}
              <Td>
                <IconButton
                  icon={<MdDelete />}
                  size="sm"
                  aria-label="Delete Dataset"
                  onClick={() => props.handleDelete(item)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EDATable;
