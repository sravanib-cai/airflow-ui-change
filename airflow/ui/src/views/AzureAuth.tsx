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

import React, { useEffect } from 'react';
import {
  Text,
} from '@chakra-ui/react';
import { useLocation, withRouter } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

interface Props {
  history: any;
}

const AzureAuth: React.FC<Props> = ({history}) => {
  const query = useQuery();
  useEffect(() => {
    const code = query.get('code');
    // const token = 'write';
    // const token = userStore.user.access;
    const formData = new FormData();
    formData.append('code', code);
    console.log(code);
    // formData.append('projectDescription', projectDescription);

    const config = {
      method: 'POST',
      url: `${process.env.API_URL}/api/experimental/oauth_azure`,
      data: formData,
    };

    axios(config).then((response) => {
      console.log(response);
      const token = jwt_decode(response.data.access_token);
      console.log("debug token", token)
      localStorage.setItem('token', token);
      // localStorage.setItem('token', response.data.access_token);
      history.push("/");

    }).catch((error) => {
      console.log(error);
      // window.location.href = 'localhost:5000';

      // history.push("/");
    });
  }, []);

  return (
    <Text>Loading...</Text>
  );
};

export default withRouter(AzureAuth);
