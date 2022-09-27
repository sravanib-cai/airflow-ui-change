import {
  Divider,
  Heading,
  Flex,
  Checkbox,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  SkeletonText
} from '@chakra-ui/react';
import Card from '../../Components/Cards/Card';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const ListCard = (props) => {
  const handleChange = (index) => {
    if (props.selected.includes(index)) {
      props.onChange(props.selected.filter((el) => el !== index));
    } else {
      props.onChange([...props.selected, index]);
    }
  };

  return (
    <Card>
      <Heading size="md" px={2} py={4}>
        {props.title}
      </Heading>
      <Divider variant="dashed" />
      <Box p={2}>
        <InputGroup border="1px solid #E2E8F0" borderRadius={'6px'}>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchRoundedIcon />}
          />
          <Input bg="inherit" placeholder="Search" />
        </InputGroup>
      </Box>
      <Box w="100%" h="55vh" overflowY="auto">
        {props.loading ? (
          <SkeletonText noOfLines={5} />
        ) : (
          <>
            {props.data.map((item, index) => (
              <Flex px={4} key={index} w="100%">
                <Checkbox
                  isChecked={props.selected.some(
                    (el) => el[props.checkedKey] === item[props.checkedKey]
                  )}
                  onChange={() => handleChange(item, index)}
                />
                <Box textAlign="start" ml={2}>
                  <Text fontSize="md">{item[props.keyEl]}</Text>
                </Box>
              </Flex>
            ))}
          </>
        )}
      </Box>
    </Card>
  );
};

export default ListCard;
