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

const ProjectTable = (props) => {
  // const navigate = useNavigate();
  const linkColor = useColorModeValue('blue.200', 'blue.300');
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
          {Array.isArray(data) && data.map((item) => (
            <Tr key={item.id}>
              {/* Change url to project name variable */}
              <Td>
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  {/* {item.name} */}
                  {/* <Link to="/ml-example/overview/" color="currentColor">{item.name}</Link> */}
                  <Link to={`/${item.id}/${item.name}/overview/`} color="currentColor">{item.name}</Link>
                </Box>
              </Td>
              {/* <Td>{item.project_description}</Td> */}
              <Td>{item.created_at}</Td>
              <Td>{item.creator_user}</Td>
              <Td>{item.last_modified}</Td>
              {/* <Td>{item.net_usage}</Td> */}
              <Td>
                <Menu>
                  <MenuButton as={IconButton} variant="menu" icon={<MoreHorizRoundedIcon />} />
                  <MenuList>
                    <MenuItem color="black.1000" onClick={() => props.handleManageUsers(item)}>
                      Manage User Access
                    </MenuItem>
                    <MenuItem
                      color="black.1000"
                      // onClick={() => navigate(`/project-configuration/${item.project_id}`)}
                    >
                      Project Configuration
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      color="error.dark"
                      onClick={() => props.handleDelete(item)}
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
