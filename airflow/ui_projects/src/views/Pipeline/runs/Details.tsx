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

import
React,
{
// useRef,
// useState,
} from 'react';
// import { Heading, SimpleGrid, Box, MenuList, MenuItem } from '@chakra-ui/react';

import useReactRouter from 'use-react-router';
import type {
  Dag as DagType,
} from 'interfaces';

import { useDagDetails, useDag } from 'api';
import { defaultDagDetails, defaultDag } from 'api/defaults';
import RunsContainer from './RunsContainer';
// import { FiCornerDownLeft } from 'react-icons/fi';

interface RouterProps {
  match: { params: { dagId: DagType['dagId'] } }
}
// let getDets = (dets: DagDetails) => {
//     // Object.entries(obj).forEach(([key, value], index) => {
//     //     // 👇️ name Tom 0, country Chile 1
//     //     console.log(key, value, index);
//     //   });

//   Object.entries(dets).forEach(([key, value], index) => {
//     <SimpleGrid columns={2} spacing='2px'>
//     <Box>{key}</Box>
//     <Box>{value}</Box>
//     </SimpleGrid>
//   })
// }

// let check_tags = (dets: DagDetails) => {

// }

const Details: React.FC = () => {
  const { match: { params: { dagId } } }: RouterProps = useReactRouter();
  const {
    data: dagDetails = defaultDagDetails,
    // isLoading,
    // error,
  } = useDagDetails(dagId);

  const {
    data: dagValues = defaultDag,
    // isLoading,
    // error,
  } = useDag(dagId);

  console.log('SraDetais, responseDataDags', dagDetails);
  console.log('SraDefDag, responseDataDagdef', dagValues);

  // console.log('schedule setInterval', {dagDetails.scheduleInterval.value})

  return (
    <RunsContainer currentView="Details">
      {/* <Heading as="h5" size="md">Details</Heading> */}
      {/* <br />
      <SimpleGrid columns={2} spacing='2px'>
        <Box >Dag Id:</Box>
        <Box >{dagDetails.dagId}</Box>
        <Box >Start Date:</Box>
        <Box >{dagDetails.startDate}</Box>
        <Box >End Date:</Box>
        <Box >{dagDetails.endDate}</Box>
        <Box >Active:</Box>
        <Box >{dagDetails.isActive ? 'True' : 'False'}</Box>
        <Box >Sub DAG:</Box>
        <Box >{dagDetails.isSubdag? 'True' : 'False'}</Box>
        <Box >Paused</Box>
        <Box >{dagDetails.isPaused?'True' : 'False'}</Box>
      </SimpleGrid> */}
      {/* {Object.entries(dagDetails).forEach(([key, value]) => {
          <SimpleGrid columns={2} spacing='2px'>
          <Box>{key}</Box>
          <Box>{value}</Box>
          </SimpleGrid>
        })} */}
      <br />
      {/* <div>
        <a
          className="btn"
          style="border: 0; background-color:{{ State.color(state)}};
          color: {{ State.color_fg(state) }};" href="{{
            url_for('TaskInstanceModelView.list', _flt_3_dag_id=dag.dag_id, _flt_3_state=state) }}">
          {{ state }} <span className="badge">{{ count }}</span>
        </a>
      </div>
      <br /> */}
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>Schedule Interval</td>
              <td>
                {dagDetails.scheduleInterval
                  ? dagDetails.scheduleInterval.value
                  : 'null'}
              </td>
            </tr>
            <tr>
              <td>Catchup</td>
              <td className="col-det">{dagDetails.catchup ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td className="col-det">{dagDetails.startDate}</td>
            </tr>
            {/* <tr>
              <td>Started</td>
              <td>{{ states|length > 0 }}</td>
            </tr> */}
            <tr>
              <td>End Date</td>
              <td className="col-det">{dagDetails.endDate ? dagDetails.endDate : 'null'}</td>
            </tr>
            <tr>
              <td>Max Active Runs</td>
              <td className="col-det">{dagDetails.maxActiveRuns}</td>
            </tr>
            <tr>
              <td>Concurrency</td>
              <td className="col-det">{dagDetails.concurrency}</td>
            </tr>
            {/* <tr>
              <td>Default Args</td>
              <td className="wrap">{dagDetails.params}</td>
            </tr> */}
            {/* <tr>
              <td>Tasks Count</td>
              <td>{{ dag.tasks|length }}</td>
            </tr> */}
            {/* <tr>
              <td>Task IDs</td>
              <td>{{ dag.task_ids }}</td>
            </tr> */}
            <tr>
              <td>File location</td>
              <td className="col-det">{dagDetails.fileloc}</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td className="col-det">{dagDetails.owners}</td>
            </tr>
            <tr>
              <td>DAG Run Timeout</td>
              <td>
                days:
                {dagDetails.dagRunTimeout ? dagDetails.dagRunTimeout.days : 'null'}
                ,
                microseconds:
                {dagDetails.dagRunTimeout ? dagDetails.dagRunTimeout.microseconds : 'null'}
                ,
                seconds:
                {dagDetails.dagRunTimeout ? dagDetails.dagRunTimeout.seconds : 'null'}
              </td>
            </tr>
            <tr>
              <td>Tags</td>
              <td>
                {
                  dagDetails.tags
                    ? dagDetails.tags.map((tag: any) => (
                      <a href="/pipelines/manage-and-track" className="label label-info" style={{ margin: '3px 6px 3px 0' }}>
                        {tag.name}
                      </a>
                    ))
                    : 'null'
                }
              </td>
            </tr>
            {/* <tr>
              <th>Tags</th>
              <td>
              {% if tags is defined and tags %}
                {% for tag in tags | sort(attribute='name') %}
                  <a className="label label-info"
                    href="{{ url_for('Airflow.index', tags=tag.name) }}"
                    style="margin: 3px 6px 3px 0;"
                    title="All DAGs tagged &ldquo;{{ tag.name }}&rdquo;"
                  >
                    {{ tag.name }}
                  </a>
                {% endfor %}
              {% else %}
                None
              {% endif %}
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <br />
      <h5>DagModel debug information</h5>
      <br />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fileloc</td>
              <td className="col-det">{dagDetails.fileloc}</td>
            </tr>
            <tr>
              <td>has_import_errors</td>
              <td className="col-det">{dagValues.hasImportErrors ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>has_task_concurrency_limits</td>
              <td className="col-det">{dagValues.hasTaskConcurrencyLimits ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>is_active</td>
              <td className="col-det">{dagDetails.isActive ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>is_paused_at_creation</td>
              <td className="col-det">{dagDetails.isPaused ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>is_subdag</td>
              <td className="col-det">{dagDetails.isSubdag ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>last_expired</td>
              <td className="col-det">{dagValues.lastExpired ? dagValues.lastExpired : 'null'}</td>
            </tr>
            <tr>
              <td>last_parsed_time</td>
              <td className="col-det">{dagDetails.lastParsed ? dagDetails.lastParsed : 'null'}</td>
            </tr>
            <tr>
              <td>last_pickled</td>
              <td className="col-det">{dagValues.lastPickled ? dagValues.lastPickled : 'null'}</td>
            </tr>
            <tr>
              <td>metadata</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>next_dagrun</td>
              <td className="col-det">{dagValues.nextDagrun}</td>
            </tr>
            <tr>
              <td>next_dagrun_create_after</td>
              <td className="col-det">{dagValues.nextDagrunCreateAfter}</td>
            </tr>
            <tr>
              <td>next_dagrun_data_interval_end</td>
              <td className="col-det">{dagValues.nextDagrunDataIntervalEnd}</td>
            </tr>
            <tr>
              <td>next_dagrun_data_interval_start</td>
              <td className="col-det">{dagValues.nextDagrunDataIntervalStart}</td>
            </tr>
            <tr>
              <td>parent_dag</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>pickle_id</td>
              <td className="col-det">{dagDetails.pickleId ? dagDetails.pickleId : 'null'}</td>
            </tr>
            <tr>
              <td>registry</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>root_dag_id</td>
              <td className="col-det">{dagValues.rootDagId ? dagValues.rootDagId : 'null'}</td>
            </tr>
            <tr>
              <td>safe_dag_id</td>
              <td className="col-det">{dagDetails.dagId}</td>
            </tr>
            <tr>
              <td>scheduler_lock</td>
              <td className="col-det">{dagValues.schedulerLock ? dagValues.schedulerLock : 'null'}</td>
            </tr>
            <tr>
              <td>timetable_description</td>
              <td className="col-det">{dagValues.timetableDescription}</td>
            </tr>
            <tr>
              <td>timezone</td>
              <td className="col-det">{dagDetails.timezone}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </RunsContainer>
  );
};

export default Details;
