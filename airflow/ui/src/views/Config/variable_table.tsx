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
import { defaultVariables } from 'api/defaults';
import { useVariables } from 'api/project_api';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  variables: <Progress size="lg" isIndeterminate data-testid="variables-loading" />,
}));

const VariablesTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: { data: {variables, totalEntries} } = defaultVariables,
    isLoading,
    error,
  } = useVariables({ limit: LIMIT, offset });

  const data = useMemo(
    () => {
      // const { variables } = defaultAuditLogs;
      if (variables) {
        return (isLoading && variables && !variables.length
          ? skeletonLoader
          : variables.map((v) => ({
            ...v,
            key: v.key,
            val: v.val,
          })));
      }
      return [];
    },
    [variables, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Key',
        accessor: 'key',
      },
      {
        Header: 'Value',
        accessor: 'val',
      },
    ],
    [],
  );
  // const {
  //   data: variables = {
  //     ConnId: '', ConnType: '', Description: '', Host: '',
  //   },
  // } = useVariables({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('variables main', variables);
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

export default VariablesTable;
