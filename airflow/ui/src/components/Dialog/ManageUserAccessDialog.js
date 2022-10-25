import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import axios from "axios";

const ManageUserAccessDialog = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      // const token = userStore.user.access;
      const token = "read";
      const projectUrl = `https://exl.workbench.couture.ai/someuri/api/experimental/project/user?project_id=${props.data.id}`;
      const usersUrl = `https://exl.workbench.couture.ai/someuri/api/v1/users`;
      const config = {
        method: "GET",
      };

      const response = await axios.all([
        axios({ ...config, url: projectUrl }),
        axios({ ...config, url: usersUrl }),
      ]);

      console.log(response[0]);
      console.log(response[1]);

      const projectUsers = response[0].data.message.data;
      const allUsers = response[1].data.users;
      setSelectedUsers(projectUsers);
      setUsers(allUsers);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      // TODO: handle error here
    }
  };

  useEffect(() => {
    setLoading(true);
    if (props.data) {
      fetchUserData();
    }
    // eslint-disable-next-line
  }, [props.data]);

  const handleSubmit = async () => {
    setLoading(true);
    const userIdData = selectedUsers.map((user) => Number(user.id));
    try {
      const config = {
        method: "POST",
        url: `https://exl.workbench.couture.ai/someuri/api/experimental/project/user`,
        data: {
          users: userIdData,
          projects: [props.data.id],
        },
      };
      await axios(config);
      setLoading(false);
      props.handleClose();
    } catch (e) {
      console.log(e);
      setLoading(false);

      // TODO: handle error here
    }
  };

  return (
    <AlertDialog
      isOpen={props.open}
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
            {!loading &&
              users.map((user) => (
                <VStack key={user.id} alignItems="start">
                  <Checkbox
                    disabled={loading}
                    isChecked={
                      selectedUsers.filter((key) => key.id === user.id)
                        .length !== 0
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers([...selectedUsers, user]);
                      } else {
                        console.log("clicked");
                        setSelectedUsers([
                          ...selectedUsers.filter((key) => key.id !== user.id),
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
            <Button
              onClick={props.handleClose}
              variant="menu"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              ml={3}
              onClick={handleSubmit}
              disabled={loading}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ManageUserAccessDialog;
