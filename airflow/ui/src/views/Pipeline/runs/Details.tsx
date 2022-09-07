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
import { Heading, SimpleGrid, Box, MenuList, MenuItem } from '@chakra-ui/react';

import RunsContainer from './RunsContainer';
import useReactRouter from 'use-react-router';
import type {
  Dag as DagType,
  DagDetails,
} from 'interfaces';

import { useDagDetails } from 'api';
import { defaultDagDetails } from 'api/defaults';
import { FiCornerDownLeft } from 'react-icons/fi';

interface RouterProps {
    match: { params: { dagId: DagType['dagId'] } }
}
let getDets = (dets: DagDetails) => {

        // Object.entries(obj).forEach(([key, value], index) => {
        //     // 👇️ name Tom 0, country Chile 1
        //     console.log(key, value, index);
        //   });

      Object.entries(dets).forEach(([key, value], index) => {
        
        <SimpleGrid columns={2} spacing='2px'>
        <Box>{key}</Box>
        <Box>{value}</Box>
        </SimpleGrid>
      })

}


const Details: React.FC = () => {

 const { match: { params: { dagId } } }: RouterProps = useReactRouter();
 const {
    data: dagDetails = defaultDagDetails,
    isLoading,
    error,
} = useDagDetails(dagId);

console.log('SraDetais, responseDataDags', dagDetails);

  return (<RunsContainer currentView="Details">
    {/* <Heading as="h5" size="md">Details</Heading> */}
    <br />
    <SimpleGrid columns={2} spacing='2px'>
      <Box >Dag Id:</Box>
      <Box >{dagDetails.dagId}</Box>
      <Box >Start Date:</Box>
      <Box >{dagDetails.startDate}</Box>
      <Box >End Date:</Box>
      <Box >{dagDetails.endDate}</Box>
      <Box >Active:</Box>
      <Box >{dagDetails.isActive ? "True": "False"}</Box>
      <Box >Sub DAG:</Box>
      <Box >{dagDetails.isSubdag? "True": "False"}</Box>
      <Box >Paused</Box>
      <Box >{dagDetails.isPaused?"True": "False"}</Box>
    
    </SimpleGrid>
    {/* {Object.entries(dagDetails).forEach(([key, value]) => {
        
        <SimpleGrid columns={2} spacing='2px'>
        <Box>{key}</Box>
        <Box>{value}</Box>
        </SimpleGrid>
      })} */}

  </RunsContainer>
  )
};

export default Details;
