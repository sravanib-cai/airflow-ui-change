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

const CreatePipelineDialog = (props) => {
  const [loading, setLoading] = useState(false);
  const [isStarter, setIsStarter] = useState(true);
  const [error, setError] = useState({ name: false, msg: "" });
  const [success, setSuccess] = useState({ name: false, msg: "" });

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      props.handleCreate(isStarter);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setIsStarter(true);
    setError({ name: false, msg: "" });
    setSuccess({ name: false, msg: "" });
    props.handleClose();
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    props.setFileName(value);
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
            Create New Pipeline
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <VStack spacing={6} alignItems="flex-start">
              <Box w="100%">
                <Text>Enter Pipeline Name</Text>
                <Input placeholder="Filename" onChange={handleFilter} />
              </Box>
              <Box>
                <Text>
                  Pipeline name can contain characters A-Z, a-z, 0-9, _, -. No
                  need to put .py in the end.
                </Text>
                <Checkbox
                  isChecked={isStarter}
                  onChange={(e) => setIsStarter(e.target.checked)}
                  defaultChecked
                >
                  Insert starter content in file.
                </Checkbox>
              </Box>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={handleCancel} variant="menu" disabled={loading}>
              Cancel
            </Button>
            <Button
              onClick={handleConnect}
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

export default CreatePipelineDialog;
