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
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AzureAuth: React.FC = () => {
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
      url: 'exl.workbench.couture.ai/workbench-expt/api/experimental/oauth_azure',
      data: formData,
    };

    axios(config).then((response) => {
      console.log(response);
      window.location.href = 'localhost:5000';
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Text>Loading...</Text>
  );
};

export default AzureAuth;
