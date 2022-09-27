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
    <Box py={2} px={2}>
      <Box px="5%" py={2} pt="2%">
        <Box mt={4}>
          <Flex>
            <ProjectNavCard data={ProjectNavData} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectNav;
