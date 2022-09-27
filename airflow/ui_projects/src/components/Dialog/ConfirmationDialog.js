import React from 'react';

import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Progress,
} from '@chakra-ui/react';

const ConfirmationDialog = (props) => (
  <AlertDialog
    isOpen={props.open}
    onClose={() => {
      if (!props.loading) {
        props.handleClose();
      }
    }}
  >
    <AlertDialogOverlay>
      <AlertDialogContent>
        {props.loading && <Progress size="xs" isIndeterminate />}
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {props.title ? props.title : 'Confirmation'}
        </AlertDialogHeader>
        <AlertDialogBody>
          {props.body ? props.body : 'Are you sure you want to do this?'}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={props.handleClose} variant="menu" disabled={props.loading}>
            {props.cancelText ? props.cancelText : 'Cancel'}
          </Button>
          <Button variant="primary" ml={3} onClick={props.onConfirm} disabled={props.loading}>
            {props.confirmText ? props.confirmText : 'Confirm'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
);

export default ConfirmationDialog;
