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

const AddEDAFileDialog = (props) => {
  // const userStore = useSelector((store) => store.user);
  const { open, handleClose } = props;
  const [name, setName] = useState("");
  const [errorState, setError] = useState({ name: false });
  const [loading, setLoading] = useState(false);

  const checkFileStatus = async () => {
    try {
      // const token = userStore.user.access;
      const token = "read";
      const config = {
        method: "GET",
        url: `https://exl.workbench.couture.ai/someuri/edaview/eda_file_check?conn_uri=s3a://eda-couture-test/inputssvs/Tips.csv`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      // setFiles(response.data.response);
      setFiles(response.data);
    } catch (e) {
      // TODO: handle error here
    }
  };

  const handleSubmit = async () => {
    const file = {
      name,
    };
    console.log(AddProjectDialogSchema);
    const { error } = AddProjectDialogSchema.validate(file);
    if (error) {
      switch (error.details[0].context.key) {
        case "name":
          setError({ ...error, name: true });
          break;
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

        const config = {
          method: "POST",
          url: `https://exl.workbench.couture.ai/someuri/edaview/eda/sources/`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          file: formData,
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
            Add a new s3a data source
          </AlertDialogHeader>
          <AlertDialogBody>
            <Input
              mb={2}
              placeholder="s3a://"
              autoFocus
              // onChange={(e) => {
              //   setName(e.target.value);
              //   if (errorState.name && e.target.value !== '') {
              //     setError({ ...errorState, name: false });
              //   }
              // }}
              onChange={(e) => {
                setName(e.target.value);
                if (errorState.name && e.target.value !== "") {
                  setError({ ...errorState, name: false });
                }
                // checkPath(e.target.value, window.location.href.split('/edaview/eda/sources/')[0]);
              }}
              error={errorState.name}
              disabled={loading}
            />
            {errorState.name && (
              <Text color="error.dark" fontSize="xs">
                * File path is required
              </Text>
            )}
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

export default AddEDAFileDialog;
