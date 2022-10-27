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
  Textarea,
} from "@chakra-ui/react";

const CodeBrickDialog = (props) => {
  const [error, setError] = useState({ name: false, msg: "" });
  const [success, setSuccess] = useState({ name: false, msg: "" });
  const [fileData, setFileData] = useState(props.data.code);

  const handleCancel = () => {
    setError({ name: false, msg: "" });
    setSuccess({ name: false, msg: "" });
    props.handleClose();
  };

  return (
    <AlertDialog
      isOpen={props.open}
      onClose={() => {
        if (!props.loading) {
          setError({ name: false, msg: "" });
          setSuccess({ name: false, msg: "" });
          props.handleClose();
        }
      }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          {props.loading && <Progress size="xs" isIndeterminate />}
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {props.data.title}
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <VStack spacing={6} alignItems="flex-start">
              <Box w="100%">
                <Textarea value={fileData} />
              </Box>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              onClick={handleCancel}
              variant="menu"
              disabled={props.loading}
            >
              Cancel
            </Button>
            <Button
              //   onClick={handleConnect}
              variant="primary"
              ml={3}
              disabled={props.loading}
            >
              Insert
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default CodeBrickDialog;
