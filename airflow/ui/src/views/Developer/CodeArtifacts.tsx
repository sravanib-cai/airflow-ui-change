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
} from '@chakra-ui/react';
import type { Column } from 'react-table';
import {
  MdPlayArrow,
} from 'react-icons/md';

import Table from 'components/Table';

import DeveloperContainer from './DeveloperContainer';


const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// Generate 1-10 placeholder rows
const skeletonLoader = [...Array(getRandomInt(10) || 1)].map(() => ({
  active: <Switch isDisabled />,
  tags: '',
  dagId: <Progress size="lg" isIndeterminate data-testid="pipelines-loading" />,
  trigger: <IconButton size="sm" icon={<MdPlayArrow />} aria-label="Trigger Dag" disabled />,
}));


const CodeArtifacts: React.FC = () => (
  <DeveloperContainer current="Code Artifacts">
    <Heading>Code Artifacts</Heading>


  </DeveloperContainer>
);

export default CodeArtifacts;

