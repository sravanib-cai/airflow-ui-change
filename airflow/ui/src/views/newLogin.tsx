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

import React, { useState, FormEvent } from 'react';
import {
  Box,
  Button,
  FormLabel,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import { FaMicrosoft } from 'react-icons/fa';
// import { TfiMicrosoftAlt } from 'react-icons/tfi';
import AppContainer from 'components/AppContainer';

import { useAuthContext } from 'providers/auth/context';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useAuthContext();

  const azureRedirect = async () => {
    window.location.href = `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_ID}/oauth2/v2.0/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_mode=query&scope=openid profile email`;
  };

  return (
    <AppContainer>
      <Box display="flex" alignItems="center" justifyContent="center" height="80vh">
        <Box as="form" width="100%" maxWidth="400px" mx="auto" onSubmit={azureRedirect}>
          <Button
            width="100%"
            mt={4}
            type="submit"
            // disabled={!username || !password}
            data-testid="submit"
          >
            Sign in with azure
            {/* <FontAwesomeIcon icon="fa-brands fa-microsoft" /> */}
            <Icon as={FaMicrosoft} />
          </Button>
        </Box>
      </Box>
    </AppContainer>
  );
};

export default Login;
