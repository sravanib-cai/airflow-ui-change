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

import SectionWrapper from 'components/SectionWrapper';

interface Props {
  current: string;
  toolBar?: React.ReactNode;
}

const PipelineRunsContainer: React.FC<Props> = ({ children, current, toolBar }) => {
  const navItems = [
    {
      label: 'Create and Update',
      path: '/pipelines/create-and-update',
    },
    {
      label: 'Manage and Track',
      path: '/pipelines/manage-and-track',
    },
    {
      label: 'Pipeline Dependencies',
      path: '/pipelines/pipeline-dependencies',
    },
    {
      label: 'Runs',
      path: '/pipelines/runs',
    },
    {
      label: 'Task Instances',
      path: '/pipelines/task-instances',
    },
    {
      label: 'Jobs',
      path: '/pipelines/jobs',
    },
    {
      label: 'Code Artifacts',
      path: '/pipelines/code-artifacts',
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

export default PipelineRunsContainer;
