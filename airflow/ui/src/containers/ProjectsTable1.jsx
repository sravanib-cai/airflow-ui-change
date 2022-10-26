/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  VStack,
  useToast,
} from '@chakra-ui/react';

import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
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

  const heading = ['Name', 'Created On', 'Created By', 'Last Modified'];
  const defaultProjects = { };
  /* Change to project name variable */
  defaultProjects.name = 'ML Example';
  // defaultProjects.project_description = '-';
  defaultProjects.created_by = 'Lucky';
  defaultProjects.created_on = '12/03/2022';
  defaultProjects.admin = 'Lucky';
  // defaultProjects.net_usage = '3242.22 hrs';
  defaultProjects.last_modified = '23/08/2022';

  const projects1 = [defaultProjects];
  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      // const token = 'read';
      const config = {
        method: 'GET',
        url: `${process.env.API_URL}/api/experimental/project`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      // setProjects(response.data.response);
      setProjects(response.data.data);
      console.log(response.data.data);
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

  useEffect(() => {
    // fetchProjects();
    console.log('projects', projects);
    // eslint-disable-next-line
      }, [projects]);

  const handleDeleteConfirm = async () => {
    setLoading(true);
    // const { error } = ProjectDeleteSchema.validate(deleteProject.data.name);

    // if (error) {
    //   toast({
    //     title: 'Error',
    //     description: 'Invalid Project Name',
    //     status: 'error',
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // } else {
    try {
      // const token = userStore.user.access;
      // const token = 'write';
      const token = localStorage.getItem('token');
      // const formData = new FormData();
      // formData.append('name', deleteProject.data.name);
      const config = {
        method: 'DELETE',
        url: `${process.env.API_URL}/api/experimental/project?project_id=${deleteProject.data.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // data: formData,
      };
      console.log('config',config);
      await axios(config);

      setLoading(false);
      setDeleteProject({ open: false, data: null });
      fetchProjects();
    } catch (e) {
      // TODO: handle error here
      console.log(e);
    }
  };

  return (
    <Card>
      <Box w="100%">
        <VStack>
          <Flex w="100%" pb={0}>
            <Heading fontSize={20}>Projects</Heading>
            <Spacer />
            {/* <IconButton variant="icon" onClick={() =>
            setAddProject({ open: true, data: null })}>
              <AddRoundedIcon style={{ width: 24, height: 24 }} />
            </IconButton> */}
            <Button
              onClick={() => setAddProject({ open: true, data: null })}
              colorScheme="blue"
              size="sm"
              mr="2"
            >
              {/* <i class="fa fa-plus fa-fw" aria-hidden="true" /> */}
              + New Project
            </Button>
          </Flex>
          <Box w="100%" h={500}>
            <ProjectTable
              heading={heading}
              data={projects}
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
