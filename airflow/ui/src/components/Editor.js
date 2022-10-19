/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Box, useTheme, Flex } from "@chakra-ui/react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const styles = {
  root: {
    minHeight: "72vh",
    boxSizing: "border-box",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain,
  },
};

const MyEditor = (props) => {
  const chakraTheme = useTheme();
  const [saveFile, setSaveFile] = useState({ open: false, data: null });
  const [deleteFile, setDeleteFile] = useState({ open: false, data: null });

  const highlight = (code) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="py">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <Box key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </Box>
          ))}
        </>
      )}
    </Highlight>
  );

  const getCode = () => {
    const fileData = props.fileData;
    if (fileData) return fileData;
    return "Code not found";
  };

  const handleCodeChange = (newCode) => {
    props.setFileData(newCode);
  };

  return (
    <>
      <Flex
        bg="rgb(1, 22, 39)"
        w="100%"
        borderRightRadius={8}
        minHeight="82vh"
        direction="column"
      >
        <Box height="65vh" overflow="auto" flexGrow={1}>
          <Editor
            value={getCode()}
            onValueChange={handleCodeChange}
            highlight={highlight}
            padding={10}
            style={styles.root}
          />
        </Box>
      </Flex>
    </>
  );
};

export default MyEditor;
