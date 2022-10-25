import React, { useState } from "react";
import {
  Box,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton,
  Button,
  Progress,
  Input,
  Text,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";

const AddClusterGroupDialog = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ name: false, msg: "" });
  const [success, setSuccess] = useState({ name: false, msg: "" });
  const [newGroupName, setNewGroupName] = useState("");

  const handleCancel = () => {
    setError({ name: false, msg: "" });
    setSuccess({ name: false, msg: "" });
    props.handleClose();
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setNewGroupName(value);
  };

  const handleAddGroup = async () => {
    try {
      const data = new FormData();
      data.append("name", newGroupName);
      setLoading(true);
      const config = {
        method: "POST",
        url: `https://exl.workbench.couture.ai/someuri/hadoopconfigurationview/`,
        data: data,
      };
      await axios(config);
      setLoading(false);
      props.fetchGroups();
      props.handleClose();
    } catch (e) {
      console.log(e);
      setLoading(false);
      props.handleClose();
    }
  };

  return (
    <AlertDialog
      isOpen={props.open}
      onClose={() => {
        if (!loading) {
          setError({ name: false, msg: "" });
          setSuccess({ name: false, msg: "" });
          props.handleClose();
        }
      }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          {loading && <Progress size="xs" isIndeterminate />}
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Add a group
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <VStack spacing={6} alignItems="flex-start">
              <Box w="100%">
                <Text>Group Name</Text>
                <Input placeholder="Group name" onChange={handleFilter} />
              </Box>
              <Box>
                <Text>A group name can only contain A-Z, a-z, _, -, 0-9.</Text>
              </Box>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleCancel} variant="menu" disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={handleAddGroup}
              variant="primary"
              ml={3}
              disabled={loading}
            >
              Connect
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AddClusterGroupDialog;
