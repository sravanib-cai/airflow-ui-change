import React, { useState } from 'react';
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
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { AddProjectDialogSchema } from '../../modal/projectDialog';

const AddProjectDialog = (props) => {
  const userStore = useSelector((store) => store.user);

  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('LiveStreams');
  const [error, setError] = useState({ name: false, projectType: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const data = {
      name,
      projectType,
    };

    const { error } = AddProjectDialogSchema.validate(data);
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          setError({ ...error, name: true });
          break;
        case 'projectType':
          setError({ ...error, projectType: true });
          break;
        default:
          console.log(error);
      }
    } else {
      setLoading(true);

      try {
        const token = userStore.user.access;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('projectType', projectType);

        const config = {
          method: 'POST',
          url: `${process.env.REACT_APP_API_BASE_URL}/api/projects/`,
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
            Add Project
          </AlertDialogHeader>
          <AlertDialogBody>
            <Input
              placeholder="Project Name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
                if (error.name && e.target.value !== '') {
                  setError({ ...error, name: false });
                }
              }}
              error={error.name}
              disabled={loading}
            />
            {error.name && (
              <Text color="error.dark" fontSize="xs">
                * Project name is required
              </Text>
            )}
            <Select
              // placeholder="Select Project Type"
              mt={4}
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              disabled={loading}
            >
              <option value="LiveStreams">LiveStreams</option>
              <option value="Shorts">Shorts</option>
              <option value="AudioStreams">AudioStreams</option>
              <option value="Articles">Articles</option>
              <option value="Video">Video</option>
            </Select>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={props.handleClose} variant="menu" disabled={loading}>
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

export default AddProjectDialog;
