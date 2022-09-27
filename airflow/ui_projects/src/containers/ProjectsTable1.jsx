/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useSelector } from 'react-redux';
import Card from '../components/Cards/Card';
import ProjectTable from '../components/Tables/ProjectTable';
import ConfirmationDialog from '../components/Dialog/ConfirmationDialog';
import AddProjectDialog from '../components/Dialog/AddProjectDialog';
import ManageUserAccessDialog from '../components/Dialog/ManageUserAccessDialog';
import { ProjectDeleteSchema } from '../modal/projectDelete';

const ProjectsTable = () => {
// const ProjectsTable: React.FC = () => {
  const userStore = useSelector((store) => store.user);

  const [projects, setProjects] = useState([]);
  const [deleteProject, setDeleteProject] = useState({ open: false, data: null });
  const [addProject, setAddProject] = useState({ open: false, data: null });
  const [manageUser, setManageUser] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const heading = ['Name', 'Project Type', 'Created By', 'Created On'];
  const defaultProjects = { };
  defaultProjects.name = 'proj1';
  defaultProjects.project_type = 'type1';
  defaultProjects.created_by = 'test1';
  defaultProjects.created_on = 'wed';

  const projects1 = [defaultProjects];
  const fetchProjects = async () => {
    try {
    //   const token = userStore.user.access;
      const token = 'read';
      const config = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_BASE_URL}/api/projects/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      setProjects(response.data.response);
    //   setProjects(defaultProjects);
    } catch (e) {
    //   setProjects(defaultProjects);

      // TODO: handle error here
    }
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
      }, []);

  const handleDeleteConfirm = async () => {
    setLoading(true);
    const { error } = ProjectDeleteSchema.validate(deleteProject.data.name);

    if (error) {
      toast({
        title: 'Error',
        description: 'Invalid Project Name',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } else {
      try {
        const token = userStore.user.access;
        const formData = new FormData();
        formData.append('name', deleteProject.data.name);

        const config = {
          method: 'DELETE',
          url: `${process.env.REACT_APP_API_BASE_URL}/api/projects/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: formData,
        };

        await axios(config);

        setLoading(false);
        setDeleteProject({ open: false, data: null });
        fetchProjects();
      } catch (e) {
        // TODO: handle error here
      }
    }
  };

  return (
    <Card>
      <Box w="100%">
        <VStack>
          <Flex w="100%" p={8} pb={0}>
            <Heading fontSize={24}>Projects</Heading>
            <Spacer />
            <IconButton variant="icon" onClick={() => setAddProject({ open: true, data: null })}>
              <AddRoundedIcon style={{ width: 24, height: 24 }} />
            </IconButton>
          </Flex>
          <Box w="100%" h={300}>
            <ProjectTable
              heading={heading}
              data={projects1}
              handleManageUsers={(data) => setManageUser({ open: true, data })}
              handleDelete={(data) => setDeleteProject({ open: true, data })}
            />
          </Box>
        </VStack>
      </Box>
      <ManageUserAccessDialog
        open={manageUser.open}
        data={manageUser.data}
        handleClose={() => setManageUser({ open: false, data: null })}
      />
      <AddProjectDialog
        open={addProject.open}
        handleClose={() => setAddProject({ open: false, data: null })}
        fetchProjects={fetchProjects}
      />
      <ConfirmationDialog
        open={deleteProject.open}
        handleClose={() => setDeleteProject({ open: false, data: null })}
        onConfirm={handleDeleteConfirm}
        loading={loading}
        title="Confirmation"
        body="Are you sure you want to delete this?"
        cancelText="Cancel"
        confirmText="Delete"
      />
    </Card>
  );
};

export default ProjectsTable;
