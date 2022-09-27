import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const Card = (props) => {
  const CardColor = useColorModeValue('gray.100', 'gray.700');
  const useStyles = () => ({
    card: {
      border: `1px solid ${CardColor}`,
      boxShadow: '2px 2px 50px rgba(0, 0, 0, 0.03), -2px -2px 50px rgba(0, 0, 0, 0.03)',
    },
  });
  const styles = useStyles();
  return (
    <Box style={styles.card} borderRadius="12px" {...props}>
      {props.children}
    </Box>
  );
};

export default Card;
