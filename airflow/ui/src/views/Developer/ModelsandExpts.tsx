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
import { Heading } from '@chakra-ui/react';
// import CaiML from 'views/Microfrontends/CaiML';
import DeveloperContainer from './DeveloperContainer';

const ModelsandExpts: React.FC = () => (
  <DeveloperContainer current="Models and Experiments">
    <Heading as="h5" size="md">Models and Experiments</Heading>
    {/* <script type="text/javascript" src="http://localhost:8069/runtime.d70b81031b374795.js" />
    <script type="text/javascript" src="http://localhost:8069/polyfills.6cffbd8c793ec304.js" />
    <script type="text/javascript" src="http://localhost:8069/vendor.864183ce6b9f0756.js" />
    <script type="text/javascript" src=" http://localhost:8069/main.9475936c5c507dbf.js" />
    <script type="text/javascript" src="http://localhost:8069/scripts.3c7edbbdd21861d9.js" /> */}
    {/* <CaiML /> */}
  </DeveloperContainer>
);

export default ModelsandExpts;
