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
import { defaultPools } from 'api/defaults';
import { usePools } from 'api/project_api';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  name: <Progress size="lg" isIndeterminate data-testid="pools-loading" />,
  description: '',
  occupied_slots: '',
  open_slots: '',
  queued_slots: '',
  running_slots: '',
  slots: '',
}));

const PoolsTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: { data: {pools, totalEntries} } = defaultPools,
    isLoading,
    error,
  } = usePools({ limit: LIMIT, offset });
  const data = useMemo(
    () => {
      // const { pools } = defaultAuditLogs;
      if (pools) {
        return (isLoading && pools && !pools.length
          ? skeletonLoader
          : pools.map((p) => ({
            ...p,
          name: p.name,
          // description: p.description,
          occupied_slots: p.occupied_slots,
          open_slots: p.open_slots,
          queued_slots: p.queued_slots,
          running_slots: p.running_slots,
          slots: p.slots,
          })));
      }
      return [];
    },
    [pools, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Pool',
        accessor: 'name',
      },
      // {
      //   Header: 'Description',
      //   accessor: 'description',
      // },
      {
        Header: 'Occupied Slots',
        accessor: 'occupied_slots',
      },
      {
        Header: 'Open Slots',
        accessor: 'open_slots',
      },
      {
        Header: 'Queued Slots',
        accessor: 'queued_slots',
      },
      {
        Header: 'Running Slots',
        accessor: 'running_slots',
      },
      {
        Header: 'Slots',
        accessor: 'slots',
      },
    ],
    [],
  );
  // const {
  //   data: pools = {
  //     pool: '', slots: '', running_slots: '', queued_slots: '',
  //   },
  // } = usePools({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('pools main', pools);
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

export default PoolsTable;
