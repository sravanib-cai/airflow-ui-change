import React, { useMemo, useState } from 'react';
import '../../static/buttonstyle.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {
  Alert,
  AlertIcon,
  // Button,
  Progress,
  // Portal,
  // Box,
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
import 'reactjs-popup/dist/index.css';
import 'font-awesome/css/font-awesome.min.css';
import { defaultPlugins } from 'api/defaults';
import { usePlugins } from 'api/project_api';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  plugins: <Progress size="lg" isIndeterminate data-testid="plugins-loading" />,
}));

const PluginsTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: { plugins, totalEntries } = defaultPlugins,
    isLoading,
    error,
  } = usePlugins({ limit: LIMIT, offset });

  const data = useMemo(
    () => (isLoading && !plugins.length
      ? skeletonLoader
      : plugins.map((c) => ({
        ...c,
        plugins: c.name,
      }))),
    [plugins, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Plugin',
        accessor: 'name',
      },
    ],
    [],
  );
  // const {
  //   data: plugins = {
  //     ConnId: '', ConnType: '', Description: '', Host: '',
  //   },
  // } = usePlugins({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('plugins main', plugins);
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
        manualPagination={{
          offset,
          setOffset,
          totalEntries,
        }}
      />
    </>
  );
};

export default PluginsTable;
