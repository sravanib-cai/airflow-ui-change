import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { DeleteConnection } from 'api/project_api';
import {
  IconButton,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
// import { DeleteIcon } from '@chakra-ui/icons';
import { MdDelete, MdAdd } from 'react-icons/md';
// import AddConnectionModal from 'components/AddConnectionModal';
// interface PauseProps {
//   connectionId: string;
// }

const ConnectionDeleteButton: React.FC<{ connectionId: string }> = ({ connectionId }) => {
  const [deleteResult, setDeleteResult] = useState<string | null>(null);

  const fortmatResponse = (res: any) => JSON.stringify(res, null, 2);

  const { isLoading: isDeletingConnection, mutate: deleteConnectionId } = useMutation<any, Error>(
    async () => DeleteConnection(connectionId),
    {
      onSuccess: (res) => {
        setDeleteResult(fortmatResponse(res));
        console.log('success');
      },
      onError: (err: any) => {
        setDeleteResult(fortmatResponse(err.response?.data || err));
        console.log('error', err);
      },
    },
  );

  useEffect(() => {
    if (isDeletingConnection) setDeleteResult('deleting...');
  }, [isDeletingConnection]);

  function deleteDataById() {
    console.log(connectionId);
    if (connectionId) {
      try {
        deleteConnectionId();
      } catch (err) {
        setDeleteResult(fortmatResponse(err));
      }
    }
  }
  console.log(deleteResult);

  return (
    <>
      <IconButton
        icon={<MdDelete />}
        size="sm"
        aria-label="Delete Connection"
        onClick={deleteDataById}
      />
    </>
  );
};

export default ConnectionDeleteButton;
