/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Flex,
  Spacer,
  InputGroup,
  Input,
  InputLeftElement,
  useTheme,
  Button,
  Checkbox,
  Stack,
  IconButton
} from '@chakra-ui/react';
import Card from '../../Components/Cards/Card';
import ProjectNavCard from '../../containers/ProjectNavCard';
import { ProjectNavData } from '../../utils/ProjectNavData';
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';

const ProjectNav = () => {
  // const [Data, setData] = useState(ProjectNavData);
  return (
    <Box py={3} px={3}>
      <Box px="6%" py={3} pt="3%">
        <Box mt={3}>
          <Flex>
            <ProjectNavCard data={ProjectNavData} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectNav;
