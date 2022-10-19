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

import React, { useState } from 'react';
// import { Heading } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import MonitorContainer from './MonitorContainer';

const Trace: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const hideSpinner = () => {
    // setIsLoading((current) => !current);
    setIsLoading(false);
  };
  return (
    <MonitorContainer current="Trace">
      {/* <Heading as="h5" size="md">Trace</Heading> */}
      <div>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            left="50%"
            top="50%"
            margin="300px 0 0 600px"
          />
        ) : null}
        <iframe
          title="Distributed Tracing"
          src={process.env.TRACE_URL}
          height="600"
          width="100%"
          onLoad={hideSpinner}
          frameBorder="0"
        />
      </div>
    </MonitorContainer>
  );
};

export default Trace;
