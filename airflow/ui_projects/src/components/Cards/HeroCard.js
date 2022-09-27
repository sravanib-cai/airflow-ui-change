import { useState } from 'react';
import { Box, Flex, Heading, VStack, Image, Text, Button } from '@chakra-ui/react';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const HeroCard = (props) => {
  const [spacing, setSpacing] = useState(2);
  return (
    <Flex bg="gradient" py={6} px={8} borderRadius="24px" w="100%">
      <Box flex="1">
        <Flex direction="column" h="100%">
          <VStack spacing="12px" align="start" flex="1">
            <Heading color="black.1000">{props.title}</Heading>
            <Text noOfLines={4} color="black.800">
              {props.description}
            </Text>
          </VStack>
          <Box>
            <Button
              onMouseEnter={() => setSpacing(12)}
              onMouseLeave={() => setSpacing(4)}
              onClick={props.onClick}>
              {props.btnText}
              <NavigateNextRoundedIcon style={{ marginLeft: spacing, transition: '0.5s' }} />
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Image src={props.image} alt={props.title} objectFit="cover" w={200} h={200} />
      </Box>
    </Flex>
  );
};

export default HeroCard;
