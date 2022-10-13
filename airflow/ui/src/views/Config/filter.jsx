import React, { useState } from 'react';
import '../../static/buttonstyle.css';
import { Link } from 'react-router-dom';
import {
  // Button,
  Portal,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // PopoverAnchor,
} from '@chakra-ui/react';
import 'reactjs-popup/dist/index.css';

import 'font-awesome/css/font-awesome.min.css';
// import elephant from '../../components/icons/elephant.svg';
// import diagramProject from '../../components/icons/diagram-project-solid.svg';

const Filter = () => {
  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };
  const [isShownKey, setIsShownKey] = useState(false);
  const [isShownValue, setIsShownValue] = useState(false);

  const handleClickKey = () => {
    setIsShownKey((current) => !current);
    // setIsShown(true);
  };
  const handleClickValue = () => {
    setIsShownValue((current) => !current);
    // setIsShown(true);
  };
  return (
    // <div style={btnRight}>
    <div>
      {/* <div style={padding} /> */}
      <div className="btn-group">
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <button type="button" className="btn">
              Add Filters
            </button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent width="inherit">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    borderRadius="0.375rem"
                    height="2rem"
                    minWidth="2rem"
                    fontSize="12px"
                    width="auto"
                    paddingLeft="0.75rem"
                    paddingRight="0.75rem"
                    borderWidth="1px"
                    color="blue.900"
                    backgroundColor="blue.200"
                    fontWeight="600"
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.200' }}
                    _focus={{ boxShadow: 'outline' }}
                  >
                    Filters
                    <span className="caret" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={handleClickKey}>Key</MenuItem>
                    <MenuItem onClick={handleClickValue}>Value</MenuItem>
                  </MenuList>
                </Menu>
              </PopoverHeader>
              <PopoverBody>
                {isShownKey && (
                <div>
                  <div className="btn-group">
                    <span className="input-form-addon input-form-sep">Key</span>
                  </div>
                  <div className="btn-group input-form">
                    <input
                      type="text"
                      style={{ width: '500px', marginLeft: '15px' }}
                      className="form-control-addon"
                    />
                  </div>
                </div>
                )}
                {isShownValue && (
                <div>
                  <div className="btn-group">
                    <span className="input-form-addon input-form-sep">Value</span>
                  </div>
                  <div className="btn-group input-form">
                    <input
                      type="text"
                      style={{ width: '500px', marginLeft: '15px' }}
                      className="form-control-addon"
                    />
                  </div>
                </div>
                )}
              </PopoverBody>
              <PopoverFooter>
                <button type="submit" className="btn">Apply</button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </div>
      <div style={space} />
      <div className="btn-group">
        <Menu>
          <MenuButton
            transition="all 0.2s"
            borderRadius="0.375rem"
            height="2rem"
            minWidth="2rem"
            fontSize="12px"
            width="auto"
            paddingLeft="0.75rem"
            paddingRight="0.75rem"
            borderWidth="1px"
            color="blue.900"
            backgroundColor="blue.200"
            fontWeight="600"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.200' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Actions
            <span className="caret" />
          </MenuButton>
          <MenuList>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <br />
    </div>
  );
};

export default Filter;
