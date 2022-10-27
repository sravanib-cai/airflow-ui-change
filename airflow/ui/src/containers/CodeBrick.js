import React, { useState } from "react";
import {
  Box,
  VStack,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import CodeBrickDialog from "components/Dialog/CodeBrickDialog";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const CodeBrick = (props) => {
  const [codeBrick, setCodeBrick] = useState({
    open: false,
    data: null,
  });
  const [codeBrickData, setCodeBrickData] = useState({
    title: "Custom",
    code: "a: 10;",
  });
  const [codeBrickLoading, setCodeBrickLoading] = useState(false);

  return (
    <Box position="relative" h="100%" w="100%">
      <VStack px={2} pt={8}>
        <Flex w="100%" alignItems="center">
          <Heading fontSize={24}>Obelisk Code Bricks</Heading>
        </Flex>
        <InputGroup border="1px solid #1a202c" borderRadius={"6px"}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchRoundedIcon />}
          />
          <Input bg="inherit" placeholder="Search Codebricks.." />
        </InputGroup>
      </VStack>
      <VStack mt={2} overflowY="auto" pt={2} spacing={0}>
        {/* {props.data.map((item, i) => {
          return ( */}
        <Button
          onClick={() => setCodeBrick({ open: true, data: null })}
          //   key={i}
          variant="list"
          w="100%"
          height="60px"
        >
          <Flex w="100%" alignItems="center">
            <VStack alignItems="start">
              <Text>Custom</Text>
            </VStack>
          </Flex>
        </Button>
        {/* );
        })} */}
      </VStack>
      <Button
        position="absolute"
        bottom="0%"
        //   onClick={() => setCodeBrick({ open: true, data: null })}
        //   key={i}
        //   variant="list"
        size="sm"
        w="100%"
      >
        Add New CodeBrick
      </Button>
      <CodeBrickDialog
        data={codeBrickData}
        loading={codeBrickLoading}
        setLoading={setCodeBrickLoading}
        open={codeBrick.open}
        handleClose={() => setCodeBrick({ open: false, data: null })}
      />
    </Box>
  );
};

export default CodeBrick;
