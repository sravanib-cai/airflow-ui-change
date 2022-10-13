import React, { useMemo, useState } from 'react';
import '../../static/buttonstyle.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {
  Alert,
  AlertIcon,
  Button,
  Progress,
  // Portal,
  Box,
  Flex,
  Heading,
  Spacer,
  VStack,
  useToast,
  // useColorModeValue,
  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  // PopoverHeader,
  // PopoverBody,
  // PopoverFooter,
  // PopoverArrow,
  // PopoverCloseButton,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
} from '@chakra-ui/react';
import type { Column } from 'react-table';
import Table from 'components/Table';
import { defaultProjects } from 'api/defaults';
import { useProjects } from 'api';
import Card from '../components/Cards/Card';
import ProjectTable from '../components/Tables/ProjectTable';
import ConfirmationDialog from '../components/Dialog/ConfirmationDialog';
import AddProjectDialog from '../components/Dialog/AddProjectDialog';
import ManageUserAccessDialog from '../components/Dialog/ManageUserAccessDialog';
import { ProjectDeleteSchema } from '../modal/projectDelete';
import 'reactjs-popup/dist/index.css';
import 'font-awesome/css/font-awesome.min.css';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  projects: <Progress size="lg" isIndeterminate data-testid="projects-loading" />,
}));

const ProjectTableTest: React.FC = () => {
  const {
    data: { projects } = defaultProjects,
    isLoading,
    error,
  } = useProjects();

  const data = useMemo(
    () => (isLoading && !projects.length
      ? skeletonLoader
      : projects.map((p) => ({
        ...p,
        projectId: p.projectId,
      }))),
    [projects, isLoading],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Project Id',
        accessor: 'projectId',
      },
    ],
    [],
  );
  // const {
  //   data: projects = {
  //     ConnId: '', ConnType: '', Description: '', Host: '',
  //   },
  // } = useProjects({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('projects main', projects);
  return (
    <>
      {error && (
      <Alert status="error" my="4" key={error.message}>
        <AlertIcon />
        {error.message}
      </Alert>
      )}
      <Table
        data={data}
        columns={columns}
      />
    </>
  );
};

export default ProjectTableTest;
