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
import { defaultProviders } from 'api/defaults';
import { useProviders } from 'api/project_api';

const LIMIT = 25;
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  name: <Progress size="lg" isIndeterminate data-testid="providers-loading" />,
  version: '',
  description: '',
}));

const ProvidersTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: { providers, totalEntries } = defaultProviders,
    isLoading,
    error,
  } = useProviders({ limit: LIMIT, offset });

  const data = useMemo(
    () => (isLoading && !providers.length
      ? skeletonLoader
      : providers.map((p) => ({
        ...p,
        name: p.name,
        version: p.version,
        description: p.description,
      }))),
    [providers, isLoading, offset],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Package Name',
        accessor: 'name',
      },
      {
        Header: 'Version',
        accessor: 'version',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ],
    [],
  );
  // const {
  //   data: providers = {
  //     pool: '', slots: '', runningSlots: '', queuedSlots: '',
  //   },
  // } = useProviders({ limit: LIMIT, offset });

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  console.log('providers main', providers);
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

export default ProvidersTable;
