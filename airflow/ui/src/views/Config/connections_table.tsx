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
  IconButton,
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
import { MdDelete } from 'react-icons/md';
import type { Column } from 'react-table';
import Table from 'components/Table';
import 'reactjs-popup/dist/index.css';
import 'font-awesome/css/font-awesome.min.css';
import { defaultConnections } from 'api/defaults';
import { useConnections } from 'api/project_api';
import ConnectionDeleteButton from './Row';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  connectionId: <Progress size="lg" isIndeterminate data-testid="connections-loading" />,
  conn_type: '',
  description: '',
  host: '',
  login: '',
  port: null,
  schema: '',
  delete: <IconButton icon={<MdDelete />} size="sm" aria-label="Delete Connection" disabled />,
}));

const ConnectionsTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: { data: {connections, totalEntries} } = defaultConnections,
    isLoading,
    error,
  } = useConnections({ limit: LIMIT, offset });
  console.log('useconnection', useConnections({ limit: LIMIT, offset }))
  const data = useMemo(
    () => {
      // const { connections } = defaultAuditLogs;
      if (connections) {
        return (isLoading && connections && !connections.length
          ? skeletonLoader
          : connections.map((c) => ({
            ...c,
            connectionId: c.connection_id,
            conn_type: c.conn_type,
            description: c.description,
            host: c.host,
            login: c.login,
            port: c.port,
            schema: c.schema,
            delete: <ConnectionDeleteButton connectionId={c.connection_id} />,
          })));
      }
      return [];
    },
    [connections, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Connection Id',
        accessor: 'connection_id',
      },
      {
        Header: 'Connection Type',
        accessor: 'conn_type',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Host',
        accessor: 'host',
      },
      {
        Header: 'Login',
        accessor: 'login',
      },
      {
        Header: 'Port',
        accessor: 'port',
      },
      {
        Header: 'Schema',
        accessor: 'schema',
      },
      {
        disableSortBy: true,
        accessor: 'delete',
      },
    ],
    [],
  );
  // const {
  //   data: connections = {
  //     ConnId: '', Conn_type: '', Description: '', Host: '',
  //   },
  // } = useConnections({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('connections main', connections);
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

export default ConnectionsTable;
