/* eslint-disable no-console */
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

import axios, { AxiosResponse } from 'axios';
import {
  useMutation, useQuery, useQueryClient, setLogger,
} from 'react-query';
import humps from 'humps';
import { useToast } from '@chakra-ui/react';

import type {
  Config, Connection, Dag, DagRun, DagDetails, Version,
} from 'interfaces';
import type {
  // DagCode,
  // DagResponse,
  AuditLogsResponse,
  ConnectionsResponse,
  VariablesResponse,
  DagsResponse,
  DagRunsResponse,
  PluginsResponse,
  PoolsResponse,
  ProjectsResponse,
  ProvidersResponse,
  TaskInstancesResponse,
  TriggerRunRequest,
} from 'interfaces/api';

// axios.defaults.baseURL = `${process.env.WEBSERVER_URL}/api/v1`;
// axios.interceptors.response.use(
//   (res) => (res.data ? humps.camelizeKeys(res.data) as unknown as AxiosResponse : res),
// );

// turn off logging, retry and refetch on tests
const isTest = process.env.NODE_ENV === 'test';

setLogger({
  log: isTest ? () => {} : console.log,
  warn: isTest ? () => {} : console.warn,
  error: isTest ? () => {} : console.warn,
});

const toastDuration = 3000;
const refetchInterval = isTest ? false : 1000;

interface PageProps {
  offset?: number;
  limit?: number;
  // project_id: number
}

export function useDagCode(fileToken: Dag['fileToken']) {
  console.log('filelocSra', fileToken, `/dagSources/${fileToken}`);
  return useQuery<string, Error>(
    'dagCode',
    (): Promise<string> => axios.get(`/dagSources/${fileToken}`),
    { refetchInterval },
  );
}

export function useDagDetails(dagId: Dag['dagId']) {
  console.log('Sra, useDagDetails', dagId, `/dags/${dagId}/details`);
  return useQuery<DagDetails, Error>(
    'dagDetails',
    (): Promise<DagDetails> => axios.get(`/dags/${dagId}/details`),
  );
}

export function useDag(dagId: Dag['dagId']) {
  console.log('Sra, useDag', dagId, `/dags/${dagId}`);
  return useQuery<Dag, Error>(
    'dag',
    (): Promise<Dag> => axios.get(`/dags/${dagId}`),
  );
}

export function useDags({ offset = 0, limit }: PageProps) {
  return useQuery<DagsResponse, Error>(
    ['dags', offset],
    (): Promise<DagsResponse> => axios.get('/dags', {
      params: { offset, limit },
    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function useConnections({ offset = 0, limit }: PageProps) {
  console.log('Sra, connections', '/connections');
  return useQuery<ConnectionsResponse, Error>(
    ['connections', offset],
    (): Promise<ConnectionsResponse> => axios.get('/connections', {
      params: { offset, limit },
    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function useVariables({ offset = 0, limit }: PageProps) {
  console.log('Sra, variables', '/variables');
  return useQuery<VariablesResponse, Error>(
    ['variables', offset],
    (): Promise<VariablesResponse> => axios.get('/variables', {
      params: { offset, limit },
    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function usePlugins({ offset = 0, limit }: PageProps) {
  console.log('Sra, plugins', '/plugins');
  return useQuery<PluginsResponse, Error>(
    ['plugins', offset],
    (): Promise<PluginsResponse> => axios.get('/plugins', {
      params: { offset, limit },
    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function useProviders({ offset = 0, limit }: PageProps) {
  console.log('Sra, providers', '/providers');
  return useQuery<ProvidersResponse, Error>(
    ['providers', offset],
    (): Promise<ProvidersResponse> => axios.get(`${process.env.API_URL}/api/v1/providers`, {
      params: { offset, limit },

    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function usePools({ offset = 0, limit }: PageProps) {
  console.log('Sra, pools', '/pools');
  return useQuery<PoolsResponse, Error>(
    ['pools', offset],
    (): Promise<PoolsResponse> => axios.get('/pools', {
      params: { offset, limit },
    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function useAuditLogs({ offset = 0, limit }: PageProps) {
  console.log('Sra, eventLogs', '/eventLogs');
  return useQuery<AuditLogsResponse, Error>(
    ['eventLogs', offset],
    (): Promise<AuditLogsResponse> => axios.get('/eventLogs', {
      params: { offset, limit },
    }),
    {
      refetchInterval,
      retry: !isTest,
    },
  );
}

export function DeleteDag(dagId: Dag['dagId']) {
  return useQuery<Dag, Error>(
    'dags',
    (): Promise<Dag> => axios.delete(`/dags/${dagId}`),
  );
}

export function DeleteConnection(connectionId: Connection['connection_id']) {
  return useQuery<Connection, Error>(
    'connections',
    (): Promise<Connection> => axios.delete(`/connections/${connectionId}`),
  );
}

export function useAddConnection() {
  return useQuery<Connection, Error>(
    'connections',
    (): Promise<Connection> => axios.post('/connections'),
  );
}
// export async function useDags({ offset = 0, limit }: PageProps) {
//   try {
//     const config = {
//       method: 'GET',
//       url: `${process.env.WEBSERVER_URL}/api/v1/dags`,
//       headers: {},
//     };
//     const response = await axios(config);
//     console.log(response);
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// }

export function useDagRuns(dagId: Dag['dagId'], dateMin?: string) {
  return useQuery<DagRunsResponse, Error>(
    ['dagRun', dagId],
    (): Promise<DagRunsResponse> => axios.get(`dags/${dagId}/dagRuns${dateMin ? `?start_date_gte=${dateMin}` : ''}`),
    { refetchInterval },
  );
}

export function useTaskInstances(dagId: Dag['dagId'], dagRunId: DagRun['dagRunId'], dateMin?: string) {
  return useQuery<TaskInstancesResponse, Error>(
    ['taskInstance', dagRunId],
    (): Promise<TaskInstancesResponse> => (
      axios.get(`dags/${dagId}/dagRuns/${dagRunId}/taskInstances${dateMin ? `?start_date_gte=${dateMin}` : ''}`)
    ),
  );
}

export function useVersion() {
  return useQuery<Version, Error>(
    'version',
    (): Promise<Version> => axios.get('/version'),
  );
}

export function useConfig() {
  return useQuery<Config, Error>('config', (): Promise<Config> => axios.get('/config'));
}

export function useTriggerRun(dagId: Dag['dagId']) {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation(
    (trigger: TriggerRunRequest) => axios.post(`dags/${dagId}/dagRuns`, humps.decamelizeKeys(trigger)),
    {
      onSettled: (res, error) => {
        if (error) {
          toast({
            title: 'Error triggering DAG',
            description: (error as Error).message,
            status: 'error',
            duration: toastDuration,
            isClosable: true,
          });
        } else {
          toast({
            title: 'DAG Triggered',
            status: 'success',
            duration: toastDuration,
            isClosable: true,
          });
          const dagRunData = queryClient.getQueryData(['dagRun', dagId]) as unknown as DagRunsResponse;
          if (dagRunData) {
            queryClient.setQueryData(['dagRun', dagId], {
              dagRuns: [...dagRunData.dagRuns, res],
              totalEntries: dagRunData.totalEntries += 1,
            });
          } else {
            queryClient.setQueryData(['dagRun', dagId], {
              dagRuns: [res],
              totalEntries: 1,
            });
          }
        }
        queryClient.invalidateQueries(['dagRun', dagId]);
      },
    },
  );
}

export function useSaveDag(dagId: Dag['dagId'], offset: number) {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation(
    (updatedValues: Record<string, any>) => axios.patch(`dags/${dagId}`, humps.decamelizeKeys(updatedValues)),
    {
      onMutate: async (updatedValues: Record<string, any>) => {
        await queryClient.cancelQueries(['dag', dagId]);
        const previousDag = queryClient.getQueryData(['dag', dagId]) as Dag;
        const previousDags = queryClient.getQueryData(['dags', offset]) as DagsResponse;

        const newDags = previousDags.dags.map((dag) => (
          dag.dagId === dagId ? { ...dag, ...updatedValues } : dag
        ));
        const newDag = {
          ...previousDag,
          ...updatedValues,
        };

        // optimistically set the dag before the async request
        queryClient.setQueryData(['dag', dagId], () => newDag);
        queryClient.setQueryData(['dags', offset], (old) => ({
          ...(old as Dag[]),
          ...{
            dags: newDags,
            totalEntries: previousDags.totalEntries,
          },
        }));
        return { [dagId]: previousDag, dags: previousDags };
      },
      onSettled: (res, error, variables, context) => {
        const previousDag = (context as any)[dagId] as Dag;
        const previousDags = (context as any).dags as DagsResponse;
        // rollback to previous cache on error
        if (error) {
          queryClient.setQueryData(['dag', dagId], previousDag);
          queryClient.setQueryData(['dags', offset], previousDags);
          toast({
            title: 'Error updating pipeline',
            description: (error as Error).message,
            status: 'error',
            duration: toastDuration,
            isClosable: true,
          });
        } else {
          // check if server response is different from our optimistic update
          if (JSON.stringify(res) !== JSON.stringify(previousDag)) {
            queryClient.setQueryData(['dag', dagId], res);
            queryClient.setQueryData(['dags', offset], {
              dags: previousDags.dags.map((dag) => (
                dag.dagId === dagId ? res : dag
              )),
              totalEntries: previousDags.totalEntries,
            });
          }
          toast({
            title: 'Pipeline Updated',
            status: 'success',
            duration: toastDuration,
            isClosable: true,
          });
        }
        queryClient.invalidateQueries(['dag', dagId]);
      },
    },
  );
}
