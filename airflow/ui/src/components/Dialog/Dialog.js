import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';

const Dialog = (props) => {
  return (
    <AlertDialog isOpen={props.open} onClose={props.onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading variant="h3">{props.title ? props.title : 'Title'}</Heading>
            <Text color="black.600" variant="body2">
              {props.description && props.description}
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody>{props.children}</AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outlineSecondary" onClick={props.onClose}>
              Cancel
            </Button>
            <Button variant="primary" ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Dialog;
