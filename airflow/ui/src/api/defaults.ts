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
  Dag,
  DagDetails,
} from 'interfaces';

export const defaultVersion = { version: '', gitVersion: '' };

export const defaultDags = { data: {dags: [], total_entries: 0} };
export const defaultAuditLogs = { data: {event_logs: [], total_entries: 0} };
export const defaultConnections = { data: {connections: [], total_entries: 0} };
export const defaultPlugins = { data: {plugins: [], total_entries: 0 } };
export const defaultPools = { data: {pools: [], total_entries: 0} };
export const defaultProjects = { projects: [], total_entries: 0 };
export const defaultProviders = { data: { providers: [], total_entries: 0 } };
export const defaultVariables = { data: {variables: [], total_entries: 0} };
export const defaultDag = <Dag>{};
export const defaultDagDetails = <DagDetails>{};
export const defaultDagRuns = { dagRuns: [], total_entries: 0 };

export const defaultTaskInstances = { taskInstances: [], total_entries: 0 };

export const defaultConfig = { sections: [] };
