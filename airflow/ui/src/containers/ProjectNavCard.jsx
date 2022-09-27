import React from 'react';
import { Heading, Flex, Spacer, Text, Grid, GridItem, Link } from '@chakra-ui/react';
import ProjectCard from '../components/Cards/ProjectCard';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
//import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

const ProjectNavCard = (props) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5} my={5}>
      {props.data.map((item, i) => {
        return (
          <GridItem key={i}>
            <Link to={item.link}>
              <Card w="100%" h="250px">
                <Flex direction={'column'} px={3} py={3}>
                  <Flex h="200px" direction="column">
                    <Heading fontSize="lg" my={4}>
                      {item.name}
                    </Heading>
                    <Text fontSize="md">
                      {item.total}
                    </Text>
                    <Text fontSize="md">
                      {item.running}
                    </Text>
                    <Text fontSize="md">
                      {item.completed}
                    </Text>
                    <Spacer mx="10%" />
                    <Text fontSize="sm" mt={3}>
                      Last Modified : {item.date}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProjectNavCard;
