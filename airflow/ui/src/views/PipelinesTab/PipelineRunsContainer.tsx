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

const PipelineRunsContainer: React.FC<Props> = ({
  children, current, toolBar, match,
}) => {
  const projectId = match.params.id;
  const projectName = match.params.name;
  const navItems = [
    {
      label: 'Create and Update',
      path: `/${projectId}/${projectName}/pipelines/create-and-update`,
    },
    {
      label: 'Manage and Track',
      path: `/${projectId}/${projectName}/pipelines/manage-and-track`,
    },
    {
      label: 'Pipeline Dependencies',
      path: `/${projectId}/${projectName}/pipelines/pipeline-dependencies`,
    },
    {
      label: 'Runs',
      path: `/${projectId}/${projectName}/pipelines/runs`,
    },
    {
      label: 'Task Instances',
      path: `/${projectId}/${projectName}/pipelines/task-instances`,
    },
    {
      label: 'Jobs',
      path: `/${projectId}/${projectName}/pipelines/jobs`,
    },
    {
      label: 'Code Artifacts',
      path: `/${projectId}/${projectName}/pipelines/code-artifacts`,
    },
    {
      label: 'Pools',
      path: `/${projectId}/${projectName}/pipelines/pools`,
    },
    {
      label: 'XComs',
      path: `/${projectId}/${projectName}/pipelines/xcoms`,
    },
  ];

  return (
    <SectionWrapper
      currentSection="Pipelines"
      currentView={current}
      navItems={navItems}
      toolBar={toolBar}
    >
      {children}
    </SectionWrapper>
  );
};

export default withRouter(PipelineRunsContainer);
