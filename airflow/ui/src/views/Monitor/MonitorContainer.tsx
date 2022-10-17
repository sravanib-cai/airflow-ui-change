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

import React from 'react';
import { withRouter } from 'react-router-dom';
import SectionWrapper from 'components/SectionWrapper';

interface Props {
  current: string;
  toolBar?: React.ReactNode;
  match: {
    params: {
      id: string;
      name: string;
    }
  }
}

const MonitorContainer: React.FC<Props> = ({
  children, current, toolBar, match,
}) => {
  const projectId = match.params.id;
  const projectName = match.params.name;
  const navItems = [
    {
      label: 'Audit Logs',
      path: `/${projectId}/${projectName}/monitor/audit-logs`,
    },
    {
      label: 'Task Reschedules',
      path: `/${projectId}/${projectName}/monitor/task-reschedules`,
    },
    {
      label: 'SLA Misses',
      path: `/${projectId}/${projectName}/monitor/sla-misses`,
    },
    {
      label: 'Distributed Trace',
      path: `/${projectId}/${projectName}/monitor/trace`,
    },
    {
      label: 'Centralised Logs',
      path: `/${projectId}/${projectName}/monitor/logs`,
    },
    {
      label: 'Metrics Dashboards',
      path: `/${projectId}/${projectName}/monitor/metrics`,
    },
  ];

  return (
    <SectionWrapper
      currentSection="Monitor"
      currentView={current}
      navItems={navItems}
      toolBar={toolBar}
    >
      {children}
    </SectionWrapper>
  );
};

export default withRouter(MonitorContainer);
