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
import { defaultAuditLogs } from 'api/defaults';
import { useAuditLogs } from 'api/project_api';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  dagId: <Progress size="lg" isIndeterminate data-testid="eventLogs-loading" />,
  taskId: '',
  event: '',
  when: '',
  owner: '',
  extra: '',
}));

const AuditLogsTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  // const [eventLogs, setAuditLogs] = useState([]);
  // let eventLogs = [];
  const {
    data: { eventLogs, totalEntries } = defaultAuditLogs,
    isLoading,
    error,
  } = useAuditLogs({ limit: LIMIT, offset });
  const data = useMemo(
    () => {
      // const { eventLogs } = defaultAuditLogs;
      console.log(eventLogs);
      console.log('default', defaultAuditLogs);
      if (eventLogs) {
        return (isLoading && eventLogs && !eventLogs.length
          ? skeletonLoader
          : eventLogs.map((a) => ({
            ...a,
            dagId: a.dagId,
            taskId: a.taskId,
            event: a.event,
            when: a.when,
            owner: a.owner,
            extra: a.extra,
          })));
      }
      return [];
    },
    [eventLogs, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Dag Id',
        accessor: 'dagId',
      },
      {
        Header: 'Task Id',
        accessor: 'taskId',
      },
      {
        Header: 'Event',
        accessor: 'event',
      },
      {
        Header: 'Logical Date',
        accessor: 'when',
      },
      {
        Header: 'Owner',
        accessor: 'owner',
      },
      {
        Header: 'Extra',
        accessor: 'extra',
      },
    ],
    [],
  );
  // const {
  //   data: eventLogs = {
  //     dagId: '', taskId: '', event: '', when: '',
  //   },
  // } = useAuditLogs({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('eventLogs main', eventLogs);
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

export default AuditLogsTable;
