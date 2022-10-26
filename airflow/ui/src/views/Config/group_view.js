import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import {
  Portal,
  Box,
  Spacer,
  Button,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  useToast,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ClusterGroupTable from "components/Tables/ClusterGroupTable";
import AddClusterGroupDialog from "components/Dialog/AddClusterGroup";
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

const GroupView = (props) => {
  const [addGroup, setAddGroup] = useState({
    open: false,
    data: null,
  });
  const [defaultGroupLoading, setDefaultGroupLoading] = useState(false);
  const [defaultGroup, setDefaultGroup] = useState("");
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const [deleteFile, setDeleteFile] = useState({ open: false, data: null });
  const toast = useToast();

  const history = useHistory();
  const fetchGroups = () => {
    try {
      setLoading(true);
      const config = {
        method: "GET",
        url: `${process.env.API_URL}/hadoopconfigurationview/`,
      };
      axios(config).then((response) => {
        setLoading(false);
        setTableData(response.data.data.groups);
        setDefaultGroup(response.data.data.default_group);
      });
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleDeleteConfirm = () => {
    try {
      setDelLoading(true);
      const config = {
        method: "GET",
        url: `${process.env.API_URL}/hadoopconfigurationview/delete-group/${deleteFile.data[0]}`,
      };
      axios(config).then((res) => {
        toast({
          title: "Success",
          description: "Group Deleted!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setDeleteFile({ open: false, data: null });
        fetchGroups();
        setDelLoading(false);
      });
    } catch (e) {
      console.log(e);
      setDeleteFile({ open: false, data: null });
      setDelLoading(false);
      // TODO: handle error here
    }
  };

  const handleChangeDefaultGroup = async (groupName) => {
    try {
      setDefaultGroupLoading(true);
      const config = {
        method: "GET",
        url: `${process.env.API_URL}/hadoopconfigurationview/change-default-group/?group=${groupName}`,
      };
      await axios(config);
      setDefaultGroupLoading(false);
      fetchGroups();
    } catch (e) {
      setDefaultGroupLoading(false);
    }
  };

  return (
    <Box>
      <Box>
        <Flex pb="20px">
          <Spacer />
          <Button
            colorScheme="blue"
            size="sm"
            mr="2"
            onClick={() =>
              history.push(
                `/${props.projectId}/${props.projectName}/config/clusterconfig/datalakeconfig/${defaultGroup}`
              )
            }
          >
            Open Default Group
          </Button>

          <Button
            size="sm"
            mr="2"
            onClick={() => setAddGroup({ open: true, data: null })}
          >
            Add a group
          </Button>
        </Flex>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon bg="#2D3748" children="Search Group: " />
          <Input type="tel" placeholder="groupname" />
        </InputGroup>
      </Box>
      <Box pt="20px">
        <ClusterGroupTable
          projectId={props.projectId}
          projectName={props.projectName}
          data={tableData}
          handleDefaultGroup={handleChangeDefaultGroup}
          defaultGroup={defaultGroup}
          setDefaultGroup={setDefaultGroup}
          loading={loading}
          handleDelete={(e, data) => {
            setDeleteFile({ open: true, data: data });
          }}
        />
      </Box>
      <AddClusterGroupDialog
        projectId={props.projectId}
        projectName={props.projectName}
        fetchGroups={fetchGroups}
        open={addGroup.open}
        handleClose={() => setAddGroup({ open: false, data: null })}
      />
      <ConfirmationDialog
        open={deleteFile.open}
        handleClose={() => setDeleteFile({ open: false, data: null })}
        onConfirm={handleDeleteConfirm}
        loading={delLoading}
        title="Confirmation"
        body="Are you sure you want to delete this?"
        cancelText="Cancel"
        confirmText="Delete"
      />
    </Box>
  );
};

export default withRouter(GroupView);
