import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import { ManageUserAccessSchema } from "../../modal/manageUserAccess";

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
      const token = "read";
      const projectUrl = `https://exl.workbench.couture.ai/someuri/api/experimental/project/user?project_id=${props.data.id}`;
      const usersUrl = `https://exl.workbench.couture.ai/someuri/api/v1/users`;
      const config = {
        method: "GET",
      };

      const response = await axios.all([
        // axios({ ...config, url: projectUrl }),
        axios({ ...config, url: usersUrl }),
      ]);

      // console.log(response[0]);
      // console.log(response[1]);

      // const projectUsers = response[0].data.users;
      const allUsers = response[0].data.users;

      setSelectedUsers(allUsers.map((user) => ({ ...user, user_id: "" })));
      setUsers(allUsers);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);

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
    const userIdData = selectedUsers.filter((user) => Number(user.user_id) > 0);
    const idArr = userIdData.map((user) => user.id);
    try {
      const config = {
        method: "POST",
        url: `https://exl.workbench.couture.ai/someuri/api/experimental/project/user`,
        data: {
          users: idArr,
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
              <VStack key={user.id} alignItems="start">
                <Checkbox
                  disabled={loading}
                  isChecked={
                    selectedUsers.filter((key) => key.user_id === user.id)
                      .length !== 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newUser = { ...user, user_id: user.id };
                      setSelectedUsers([...selectedUsers, newUser]);
                    } else {
                      console.log("clicked");
                      setSelectedUsers([
                        ...selectedUsers.filter(
                          (key) => key.user_id !== user.id
                        ),
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
