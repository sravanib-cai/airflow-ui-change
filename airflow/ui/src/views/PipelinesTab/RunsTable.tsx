/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useMemo, useState } from 'react';
import {
  Alert,
  AlertIcon,
  Progress,
  Switch,
  IconButton,
  Tag,
} from '@chakra-ui/react';
import type { Column } from 'react-table';
import {
  MdPlayArrow,
} from 'react-icons/md';

import Table from 'components/Table';
import { defaultDags, defaultDagRuns } from 'api/defaults';
import { useDags, useDagRuns } from 'api/project_api';

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  dagId: <Progress size="lg" isIndeterminate data-testid="pipelines-loading" />,
  state: '',
  dagRunId: '',
  executionDate: '',
  startDate: '',
  endDate: '',
  externalTrigger: '',
  conf: '',
}));

const LIMIT = 25;

const RunsTable: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: { dags } = defaultDags,
  } = useDags({ limit: LIMIT, offset });

  const {
    data: { dagRuns, total_entries } = defaultDagRuns,
    isLoading,
    error,
  } = useDagRuns(dagId);

  // Show placeholders rows when data is loading for the first time
  const data = useMemo(
    () => (isLoading && !dagRuns.length
      ? skeletonLoader
      : dagRuns.map((d) => ({
        ...d,
        dagId: d.dagId,
        state:
        <Tag
          size="sm"
          mt="1"
          ml="1"
          mb="1"
        >
          {d.state}
        </Tag>,
        dagRunId: d.dagRunId,
        executionDate: d.executionDate,
        startDate: d.startDate,
        endDate: d.endDate,
        externalTrigger: d.externalTrigger,
        conf: d.conf,
      }))),
    [dagRuns, isLoading],
  );

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Dag Id',
        accessor: 'dagId',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Dag Run Id',
        accessor: 'dagRunId',
      },
      {
        Header: 'Execution Date',
        accessor: 'executionDate',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'End Date',
        accessor: 'endDate',
      },
      {
        Header: 'External Trigger',
        accessor: 'externalTrigger',
      },
      {
        Header: 'conf',
        accessor: 'conf',
      },
    ],
    [],
  );

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
        // manualPagination={{
        //   offset,
        //   setOffset,
        //   total_entries,
        // }}
      />
    </>
  );
};

export default RunsTable;
