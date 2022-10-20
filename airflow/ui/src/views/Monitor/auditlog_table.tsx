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
  dag_id: <Progress size="lg" isIndeterminate data-testid="event_logs-loading" />,
  task_id: '',
  event: '',
  when: '',
  owner: '',
  extra: '',
}));

const AuditLogsTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  // const [event_logs, setAuditLogs] = useState([]);
  // let event_logs = [];
  const {
    data: { data: { event_logs, totalEntries } } = defaultAuditLogs,
    isLoading,
    error,
  } = useAuditLogs({ limit: LIMIT, offset });
  console.log('useAuditLogs', useAuditLogs({ limit: LIMIT, offset }));
  const data = useMemo(
    () => {
      // const { event_logs } = defaultAuditLogs;
      // console.log(event_logs);
      console.log('default', defaultAuditLogs);
      if (event_logs) {
        return (isLoading && event_logs && !event_logs.length
          ? skeletonLoader
          : event_logs.map((a) => ({
            ...a,
            dag_id: a.dag_id,
            task_id: a.task_id,
            event: a.event,
            when: a.when,
            owner: a.owner,
            extra: a.extra,
          })));
      }
      return [];
    },
    [event_logs, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Dag Id',
        accessor: 'dag_id',
      },
      {
        Header: 'Task Id',
        accessor: 'task_id',
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
  //   data: event_logs = {
  //     dagId: '', taskId: '', event: '', when: '',
  //   },
  // } = useAuditLogs({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('event_logs main', event_logs);
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
