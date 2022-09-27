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
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
// import { useNavigate } from 'react-router-dom';

const ProjectTable = (props) => {
  // const navigate = useNavigate();
  const linkColor = useColorModeValue('blue.200', 'blue.300');

  //   props.data.map((item, i) => (
  //      console.log(i, item.name, item.project_type);
  //   );
  return (
    <TableContainer h={300} style={{ overflow: 'auto' }}>
      <Table variant="simple">
        <Thead bgColor="blue" sx={{ position: 'sticky', top: 0, zIndex: 900 }}>
          <Tr sx={{ position: 'sticky', top: 0 }}>
            {props.heading.map((item, i) => (
              <Th key={i} sx={{ position: 'sticky', top: 0 }}>
                {item}
              </Th>
            ))}
            <Th sx={{ position: 'sticky', top: 0 }} />
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((item, i) => (
            <Tr key={i}>
              {/* Change url to project name variable */}
              <Td>
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <Link to="/ml-example/overview" color="currentColor">{item.name}</Link>
                </Box>
              </Td>
              <Td>{item.project_description}</Td>
              <Td>{item.created_by}</Td>
              <Td>{item.created_on}</Td>
              <Td>{item.admin}</Td>
              <Td>{item.net_usage}</Td>
              <Td>{item.last_modified}</Td>
              <Td>
                <Menu>
                  <MenuButton as={IconButton} variant="menu" icon={<MoreHorizRoundedIcon />} />
                  <MenuList>
                    <MenuItem color="black.1000" onClick={() => props.handleManageUsers(item)}>
                      Manage User Access
                    </MenuItem>
                    <MenuItem
                      color="black.1000"
                    >
                      Project Configuration
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      color="error.dark"
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
