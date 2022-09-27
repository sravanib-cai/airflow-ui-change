import { Flex, Box, VStack, Heading, Text, Skeleton } from '@chakra-ui/react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Card from './Card';

const useStyles = () => ({
  analytics: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px'
  },
  analyticsComparison: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px'
  },
  iconComparison: {
    width: '10px',
    margin: '0px 8px'
  },
  iconPercentile: {
    width: '18px',
    margin: '0px 8px'
  }
});

const AnalyticsCard = (props) => {
  const styles = useStyles();
  return (
    <Card>
      <Flex p={8} w="100%">
        <Box flex="1">
          <Flex direction="column" h="100%">
            <VStack spacing="24px" align="start" flex="1">
              <Text color="black.800" size="14px">
                {props.data.title}
              </Text>
              <Box>
                <Skeleton isLoaded={!props.loading} height="30px" width="90px">
                  <Heading color="black.1000">{props.data.value}</Heading>
                </Skeleton>
              </Box>
            </VStack>
          </Flex>
        </Box>
        <Flex sx={{ alignItems: 'center' }}>
          {props.data.type ? (
            <Text
              sx={styles.analytics}
              color={props.data.type === 'increased' ? 'success.dark' : 'error.dark'}>
              {props.data.type === 'increased' ? (
                <ArrowUpwardRoundedIcon style={styles.iconPercentile} />
              ) : (
                <ArrowDownwardRoundedIcon style={styles.iconPercentile} />
              )}
              {props.data.percentage}
            </Text>
          ) : null}
        </Flex>
      </Flex>
    </Card>
  );
};

export default AnalyticsCard;
