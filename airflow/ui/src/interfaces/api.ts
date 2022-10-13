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

import type {
  AuditLog, Connection, Variable, Plugin, Pool, Project, Provider, Dag, DagRun, TaskInstance,
} from './index';

interface Entries {
  totalEntries: number;
}

export interface ProjectsResponse extends Entries {
  projects: Project[];
}

export interface DagsResponse extends Entries {
  dags: Dag[];
}

export interface ConnectionsResponse extends Entries {
  connections: Connection[];
}

export interface AuditLogsResponse extends Entries {
  eventLogs: AuditLog[];
}

export interface PluginsResponse extends Entries {
  plugins: Plugin[];
}

export interface VariablesResponse extends Entries {
  variables: Variable[];
}

export interface DagResponse{
  dag: Dag;
}

export interface DagCode{
  content: string;
}

export interface DagRunsResponse extends Entries {
  dagRuns: DagRun[];
}

export interface PoolsResponse extends Entries {
  pools: Pool[];
}

export interface ProvidersResponse extends Entries {
  pools: Provider[];
}

export interface TaskInstancesResponse extends Entries {
  taskInstances: TaskInstance[];
}

export interface TriggerRunRequest {
  conf: Record<string, any>;
  dagRunId?: string;
  executionDate: Date;
  // projectId: number;
  state?: 'success' | 'running' | 'failed';
}
