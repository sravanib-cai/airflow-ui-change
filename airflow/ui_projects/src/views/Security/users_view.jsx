import React, { useState } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
import {
  // Button,
  Portal,
  // Box,
  // useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  // PopoverAnchor,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider,
  // extendTheme,
} from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const UsersView = () => {
  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };
  const padding = {
    paddingBottom: '20px',
  };
  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
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
      <div style={padding} />
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
                {/* <button onClick={handleClick}>dropdown</button>
                  {isShown && (
                    <div>
                      <h2>Some content here</h2>
                    </div>
                  )} */}
                {isShownKey && (
                  <div>
                    <div className="btn-group">
                      <span className="input-form-addon input-form-sep">Key</span>
                    </div>
                    <div className="btn-group input-form">
                      <input type="text" style={{ width: '500px', marginLeft: '15px' }} className="form-control-addon" />
                    </div>
                  </div>
                )}
                {isShownValue && (
                  <div>
                    <div className="btn-group">
                      <span className="input-form-addon input-form-sep">Value</span>
                    </div>
                    <div className="btn-group input-form">
                      <input type="text" style={{ width: '500px', marginLeft: '15px' }} className="form-control-addon" />
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
            // _hover={{ bg: 'gray.400' }}
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
        {/* <div className="dropdown">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
            Actions
            <span className="caret" />
          </button>
          <ul className="dropdown-menu" role="menu">
            <li>Delete</li>
            {% for action_key in actions %}
              {% set action = actions.get(action_key) %}
                  <li>
                    <a href="javascript:void(0)"
                        className="{{action.name}}_menu_item">
                        <i className="fa {{action.icon}}"></i>
                        {{ _(action.text) }}
                    </a>
                  </li>
            {% endfor %}
          </ul>
        </div> */}

      </div>
      <div style={{ float: 'right' }}>
        <strong>Record Count:</strong>
        1
      </div>
      <br />
      <div style={padding} />
      {/* <strong>No records found</strong> */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th colSpan="1">
                <input type="radio" name="default-group" />
              </th>
              <th colSpan="1">First Name</th>
              <th colSpan="1">Last Name</th>
              <th colSpan="2">Username</th>
              <th colSpan="2">Email</th>
              <th colSpan="1">Role</th>
              <th colSpan="1">IsActive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1" className="col-sm-1">
                <input type="radio" name="default-group" />
              </td>
              <td colSpan="1" className="col-sm-1">
                Vishal
              </td>
              <td colSpan="1" className="col-sm-1">
                Bhardwaj
              </td>
              <td colSpan="2" className="col-sm-2">
                3593a96d-e92c-4dc7-82c4-373e64dbbeb8
              </td>
              <td colSpan="2" className="col-sm-2">vishal.bhardwaj@couture.ai</td>
              <td colSpan="1" className="col-sm-1">
                admin
              </td>
              <td colSpan="1" className="col-sm-1">
                True
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default UsersView;
