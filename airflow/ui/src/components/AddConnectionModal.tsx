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

import React, { ChangeEvent, useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Textarea,
} from '@chakra-ui/react';

import { useAddConnection } from 'api/project_api';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddConnectionModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // const mutation = useAddConnection(connectionId, connType, description, host, login, port, schema);
  const [connectionId, setConnectionId] = useState('');
  const [connType, setConnType] = useState('');
  const [description, setDescription] = useState('');
  const [host, setHost] = useState('');
  const [login, setLogin] = useState('');
  const [port, setPort] = useState('');
  const [schema, setSchema] = useState('');

  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isPostingConnection, mutate: postConnection } = useMutation(
    async () => useAddConnection, {
      // return await apiClient.post(`/tutorials`, {
        connectionId: connectionId,
        connType: connType,
        description: description,
      });
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        setPostResult(fortmatResponse(result));
      },
      onError: (err) => {
        setPostResult(fortmatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isPostingConnection) setPostResult("posting...");
  }, [isPostingConnection]);

  function postData() {
    try {
      postConnection();
    } catch (err) {
      setPostResult(fortmatResponse(err));
    }
  }

  const onSave = () => {
    mutation.mutate({
      connectionId,
      connType,
      description,
      host,
      login,
      port,
      schema,
      // projectId: 1,
    });
    onClose();
  };

  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Add Connection
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="connectionId">Connection Id</FormLabel>
            <Textarea name="connectionId" value={connectionId} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setConnectionId(e.target.value)} />
            <FormLabel htmlFor="connectionId">Connection Type</FormLabel>
            <Textarea name="connectionId" value={connType} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setConnType(e.target.value)} />
            <FormLabel htmlFor="connectionId">Description</FormLabel>
            <Textarea name="connectionId" value={description} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} />
            <FormLabel htmlFor="connectionId">Host</FormLabel>
            <Textarea name="connectionId" value={host} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setHost(e.target.value)} />
            <FormLabel htmlFor="connectionId">Login</FormLabel>
            <Textarea name="connectionId" value={login} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLogin(e.target.value)} />
            <FormLabel htmlFor="connectionId">Port</FormLabel>
            <Textarea name="connectionId" value={port} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPort(e.target.value)} />
            <FormLabel htmlFor="connectionId">Schema</FormLabel>
            <Textarea name="connectionId" value={schema} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSchema(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button ml={2} onClick={onSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddConnectionModal;
