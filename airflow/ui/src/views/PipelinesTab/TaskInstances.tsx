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
// import { Heading } from '@chakra-ui/react';
import PipelineRunsContainer from './PipelineRunsContainer';
import TaskInstancesView from './taskinstances_view';

const TaskInstances: React.FC = () => (
  <PipelineRunsContainer current="Task Instances">
    {/* <Heading as="h5" size="md">Task Instances</Heading> */}
    <TaskInstancesView />
  </PipelineRunsContainer>
);

export default TaskInstances;
