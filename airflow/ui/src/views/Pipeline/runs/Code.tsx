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
import { Heading, Code as Codec } from '@chakra-ui/react';
// import CodeWrap from 'js/dag_code'
// export const DagName: React.FC<{ dagId: string }> = ({ dagId }) => (

import useReactRouter from 'use-react-router';
import type {
  Dag as DagType,
} from 'interfaces';
// import { defaultDags } from 'api/defaults';

import { useDag, useDagCode } from 'api';
import RunsContainer from './RunsContainer';

interface RouterProps {
  match: { params: { dagId: DagType['dagId'] } }
}

const Code: React.FC = () => {
  // const offset = 0;
  const { match: { params: { dagId } } }: RouterProps = useReactRouter();
  // const {
  //     data: { dags, totalEntries } = defaultDags,
  //     isLoading,
  //     error,
  // } = useDags({ limit: LIMIT1, offset });
  // console.log('SraCode, responseDataDags', dags, dags[0].fileToken);
  // const responseCode = useDagCode(dags[0].fileToken);

  const {
    data: dag = {
      dagId: '', rootDagId: '', isPaused: false, isSubdag: false, fileloc: '', fileToken: '', owners: [],
    },
  } = useDag(dagId);
  console.log('Code, responseDataDags', dag, dag.fileToken);

  const responseCode = useDagCode(dag.fileToken);

  if (!responseCode.error) {
    if (responseCode.data !== undefined) {
      console.log('successdatasra', responseCode.data.content);
      return (
        <RunsContainer currentView="DAG Code">
          <Heading>DAG Code</Heading>
          <Codec><pre>{responseCode.data.content}</pre></Codec>
        </RunsContainer>
      );
    }
    console.log('undefined', dag.fileToken);

    return (
      <RunsContainer currentView="DAG Code">
        <Heading>DAG Code</Heading>
        {/* <Code>{dag.fileToken}</Code>             */}
      </RunsContainer>
    );
  }

  console.log('failureCode', responseCode.error);
  return (
    <RunsContainer currentView="DAG Code">
      <Heading>DAG Code</Heading>
      <Heading>Failure</Heading>
    </RunsContainer>
  );
};

export default Code;
