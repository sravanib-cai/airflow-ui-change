import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from '@chakra-ui/react';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useNavigate } from 'react-router-dom';

const ProjectTable = (props) => {
  const navigate = useNavigate();

  return (
    <TableContainer h={300} style={{ overflow: 'auto' }}>
      <Table variant="simple">
        <Thead bgColor="gray.200" sx={{ position: 'sticky', top: 0, zIndex: 900 }}>
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
              <Td>{item.name}</Td>
              <Td>{item.project_type}</Td>
              <Td>{item.created_by}</Td>
              <Td>{item.created_on}</Td>
              <Td>
                <Menu>
                  <MenuButton as={IconButton} variant="menu" icon={<MoreHorizRoundedIcon />} />
                  <MenuList>
                    <MenuItem color="black.1000" onClick={() => props.handleManageUsers(item)}>
                      Manage User Access
                    </MenuItem>
                    <MenuItem
                      color="black.1000"
                      onClick={() => navigate(`/project-configuration/${item.project_id}`)}
                    >
                      Project Configuration
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem color="error.dark" onClick={() => props.handleDelete(item)}>
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
