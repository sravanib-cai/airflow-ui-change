import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Progress,
  Checkbox,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { ManageUserAccessSchema } from '../../modal/manageUserAccess';

const ManageUserAccessDialog = (props) => {
  const userStore = useSelector((store) => store.user);
  const { open, handleClose } = props;
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchUserData = async () => {
    try {
      // const token = userStore.user.access;
      const token = 'read';
      const projectUrl = `${process.env.API_URL}/api/experimental/project/${props.data.id}/`;
      const usersUrl = `${process.env.API_URL}/api/v1/users/`;
      const config = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.all([
        axios({ ...config, url: projectUrl }),
        axios({ ...config, url: usersUrl }),
      ]);

      const projectUsers = response[0].data.users;
      const allUsers = response[1].data.users;

      setSelectedUsers(projectUsers);
      setUsers(allUsers);
      setLoading(false);
    } catch (e) {
      // TODO: handle error here
    }
  };

  useEffect(() => {
    if (props.data) {
      fetchUserData();
    }
    // eslint-disable-next-line
  }, [props.data]);

  const handleSubmit = async () => {
    setLoading(true);
    const userIdData = selectedUsers.map((user) => Number(user.user_id));
    const { error } = ManageUserAccessSchema.validate(userIdData);

    if (error) {
      toast({
        title: 'Error',
        description: 'Invalid users selected',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } else {
      try {
        const token = userStore.user.access;
        const config = {
          method: 'PATCH',
          url: `${process.env.API_URL}/api/project/users/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            users: userIdData,
          },
        };
        await axios(config);
        setLoading(false);
        props.handleClose();
      } catch (e) {
        // TODO: handle error here
      }
    }
  };

  return (
    <AlertDialog
      isOpen={open}
      onClose={() => {
        if (!loading) {
          props.handleClose();
        }
      }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          {loading && <Progress size="xs" isIndeterminate />}
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Manage User Access
          </AlertDialogHeader>
          <AlertDialogBody maxH={500} overflowY="auto">
            {users.map((user) => (
              <VStack key={user} alignItems="start">
                <Checkbox
                  disabled={loading}
                  isChecked={
                    selectedUsers.filter((key) => key.user_id === user.user_id).length !== 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedUsers([...selectedUsers, user]);
                    } else {
                      setSelectedUsers([
                        ...selectedUsers.filter((key) => key.user_id !== user.user_id),
                      ]);
                    }
                  }}
                >
                  {user.username}
                </Checkbox>
              </VStack>
            ))}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleClose} variant="menu" disabled={loading}>
              Cancel
            </Button>
            <Button variant="primary" ml={3} onClick={handleSubmit} disabled={loading}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ManageUserAccessDialog;
