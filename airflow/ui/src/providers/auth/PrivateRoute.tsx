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

import React, {
  FC,
} from 'react';
import { Route, RouteProps } from 'react-router-dom';

// import Login from 'views/Login';
// import Login from 'views/newLogin';

// DateProvider has to be used after authentication
import DateProvider from 'providers/DateProvider';
import { useAuthContext } from './context';

// const PrivateRoute: FC<RouteProps> = (props) => <Login />;

// const PrivateRoute: FC<RouteProps> = (props) => {
//   const { hasValidAuthToken } = useAuthContext();
//   return hasValidAuthToken ? <DateProvider><Route {...props} /></DateProvider> : <Login />;
// };

const PrivateRoute: FC<RouteProps> = (props) => {
  // const { hasValidAuthToken } = useAuthContext();
  return <DateProvider><Route {...props} /></DateProvider>;
};

export default PrivateRoute;
