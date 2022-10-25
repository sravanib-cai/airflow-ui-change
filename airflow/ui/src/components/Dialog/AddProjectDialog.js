/* eslint-disable import/named */
import React, { useState } from "react";
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
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import AddProjectDialogSchema from "../../modal/projectDialog";

const AddProjectDialog = (props) => {
  // const userStore = useSelector((store) => store.user);
  const { open, handleClose } = props;
  const [name, setName] = useState("");
  // const [projectDescription, setprojectDescription] = useState('');
  const [errorState, setError] = useState({ name: false });
  // const [errorState, setError] = useState({ name: false, projectDescription: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const data = {
      name,
      // projectDescription,
    };
    console.log(AddProjectDialogSchema);
    const { error } = AddProjectDialogSchema.validate(data);
    if (error) {
      switch (error.details[0].context.key) {
        case "name":
          setError({ ...error, name: true });
          break;
        // case 'projectDescription':
        //   setError({ ...error, projectDescription: true });
        //   break;
        default:
          console.log(error);
      }
    } else {
      setLoading(true);

      try {
        const token = "write";
        // const token = userStore.user.access;
        const formData = new FormData();
        formData.append("name", name);
        // formData.append('projectDescription', projectDescription);

        const config = {
          method: "POST",
          url: `https://exl.workbench.couture.ai/someuri/api/experimental/project`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: formData,
        };

        await axios(config);

        setLoading(false);
        props.fetchProjects();
        props.handleClose();
      } catch (e) {
        setLoading(false);
        // handle error here
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
            Add Project
          </AlertDialogHeader>
          <AlertDialogBody>
            <Input
              mb={2}
              placeholder="Project Name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
                if (errorState.name && e.target.value !== "") {
                  setError({ ...errorState, name: false });
                }
              }}
              error={errorState.name}
              disabled={loading}
            />
            {errorState.name && (
              <Text color="error.dark" fontSize="xs">
                * Project name is required
              </Text>
            )}
            {/* <Input
              mb={2}
              placeholder="Project Description"
              onChange={(e) => {
                setprojectDescription(e.target.value);
                if (errorState.projectDescription && e.target.value !== '') {
                  setError({ ...errorState, projectDescription: false });
                }
              }}
              error={errorState.projectDescription}
              disabled={loading}
            /> */}
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

export default AddProjectDialog;
