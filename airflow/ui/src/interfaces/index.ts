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

export interface DagTag {
  name: string,
}

export interface Project {
  projectId: number,
}

export interface TimeDelta {
  days: number,
  microseconds: number,
  seconds: number,
  type: string,
}

export interface CronExpression {
  type: string,
  value: string,
}

export interface AuditLog {
  dagId: string,
  taskId: string,
  event: string,
  owner: string,
  extra: string,
  when: string,
}

export interface Connection {
  connection_id: string,
  conn_type: string,
  description: string,
  host: string,
  login: string,
  port: number,
  schema: string,
}

export interface Dag {
  dagId: string,
  rootDagId: string,
  isPaused: boolean,
  isSubdag: boolean,
  fileloc: string,
  fileToken: string,
  owners: Array<string>,
  description: string,
  scheduleInterval?: TimeDelta | CronExpression,
  tags: DagTag[],
  hasImportErrors:boolean,
  hasTaskConcurrencyLimits:boolean,
  pickleId:string,
  nextDagrun:Date,
  nextDagrunCreateAfter: Date,
  nextDagrunDataIntervalEnd: Date,
  nextDagrunDataIntervalStart: Date,
  lastExpired:Date,
  lastPickled:Date,
  schedulerLock:string,
  timetableDescription: string,
}

export interface Dag2 {
  dagId: string,
  rootDagId: string,
  isPaused: boolean,
  isSubdag: boolean,
  fileloc: string,
  file_token: string,
  owners: Array<string>,
  description: string,
  scheduleInterval?: TimeDelta | CronExpression,
  tags: DagTag[],
}

export interface DagDetails {
  dagId:string,
  defaultView:string,
  description:string,
  fileToken:string,
  fileloc:string,
  has_import_errors:boolean,
  has_task_concurrency_limits:boolean,
  isActive:boolean,
  isPaused:boolean,
  isSubdag:boolean,
  last_expired:Date,
  last_parsed_time:Date,
  last_pickled:Date,
  maxActiveRuns:number,
  maxActiveTasks:number,
  concurrency:number,
  nextDagrun:Date,
  nextDagrunCreateAfter: Date,
  nextDagrunDataIntervalEnd: Date,
  nextDagrunDataIntervalStart: Date,
  owners:Array<String>,
  pickleId: string,
  root_dag_id: string,
  scheduleInterval?: TimeDelta | CronExpression,
  scheduler_lock:boolean,
  tags:DagTag[],
  timetable_description:string,
  catchup:boolean,
  dagRunTimeout:TimeDelta[],
  doc_md:string,
  endDate:Date,
  isPausedUponCreation:boolean,
  last_parsed: Date,
  params:Array<String>
  render_template_as_native_obj:boolean,
  startDate:Date,
  template_search_path:Array<String>,
  timezone: string,
  lastParsed:Date,
}

export interface DagRun {
  dagRunId: string,
  dagId: Dag['dagId'],
  executionDate: Date,
  startDate: Date,
  endDate: Date,
  state: 'success' | 'running' | 'failed',
  externalTrigger: boolean,
  conf: JSON,
}

export interface Plugin {
  name: string,
}

export interface Provider {
  name: string,
  version: string,
  description: string,
}

export interface Pool {
  name: string,
  description: string,
  occupied_slots: number,
  open_slots: number,
  queued_slots: number,
  running_slots: number,
  slots: number,
}

export interface Task {
  taskId: string,
  owner: string,
  startDate: Date,
  endDate: Date,
}

export interface TaskInstance {
  taskId: Task['taskId'],
  dagId: Dag['dagId'],
  executionDate: Date,
  startDate: Date,
  endDate: Date,
  duration: number,
  state: string, // TODO: create enum
  tryNumber: number,
  maxTries: number,
  hostname: string,
  unixname: string,
  pool: string,
  poolSlots: number,
  queue: string,
  priorityWeight: number,
  operator: string,
  queuedWhen: string,
  pid: number
  executorConfig: string,
  slaMiss: {
    taskId: Task['taskId'],
    dagId: Dag['dagId'],
    executionDate: Date,
    emailSent: boolean,
    timestamp: Date,
    description: string,
    notification_sent: boolean,
  },
}

export interface Variable {
  key: string,
  val: string,
  isEncrypted: boolean,
}

export interface ConfigSection {
  name: string;
  options: Record<string, string>[];
}

export interface Config {
  sections: ConfigSection[];
}
