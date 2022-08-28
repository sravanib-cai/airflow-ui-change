import React, { useState } from 'react';
import '../../static/buttonstyle.css';
import { Link } from 'react-router-dom';
import {
  Button,
  Portal,
  Box,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  extendTheme,
} from '@chakra-ui/react'
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const AuditLogsView = () => {
  
  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };
  const padding = {
    paddingBottom: '20px',
  };
  const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');
  const [isShownKey, setIsShownKey] = useState(false);
  const [isShownValue, setIsShownValue] = useState(false);

  const handleClickKey = event => {
    setIsShownKey(current => !current);
    // setIsShown(true);
  };
  const handleClickValue = event => {
    setIsShownValue(current => !current);
    // setIsShown(true);
  };

  return (
    // <div style={btnRight}>
    <div>
      <div style={padding} />
      <div className="btn-group">
        <Popover placement='bottom-end'>
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
                  transition='all 0.2s'
                  borderRadius= '0.375rem'
                  height= '2rem'
                  minWidth= '2rem'
                  fontSize= '12px'
                  width= 'auto'
                  paddingLeft= '0.75rem'
                  paddingRight= '0.75rem'
                  borderWidth='1px'
                  color= 'blue.900'
                  backgroundColor= 'blue.200'
                  fontWeight= '600'
                  _hover={{ bg: 'gray.400' }}
                  _expanded={{ bg: 'blue.200' }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  Filters <span className="caret"></span>
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
                    <div className='btn-group'>
                      <span className="input-form-addon input-form-sep">Key</span>
                    </div>
                    <div className="btn-group input-form">
                      <input type="text" style={{ width: '500px', marginLeft: '15px' }} className="form-control-addon" />
                    </div>
                  </div>
                )}
                {isShownValue && (
                  <div>
                    <div className='btn-group'>
                      <span className="input-form-addon input-form-sep">Value</span>
                    </div>
                    <div className="btn-group input-form">
                      <input type="text" style={{ width: '500px', marginLeft: '15px' }} className="form-control-addon" />
                    </div>
                  </div>
                )}
              </PopoverBody>
              <PopoverFooter>
                <button type="submit" className="btn">Submit</button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </div>

      <div style={{ float: "right" }}>
          <strong>Record Count:</strong> 1
      </div>
      <br />
      <div style={padding} />
      {/* <strong>No records found</strong> */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th colSpan="1">Id</th>
              <th colSpan="1">Dttm</th>
              <th colSpan="1">Pipeline Id</th>
              <th colSpan="1">Task Id</th>
              <th colSpan="1">Event</th>
              <th colSpan="2">Logical Date</th>
              <th colSpan="2">Owner</th>
              <th colSpan="3">Extra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1" className="col-sm-1">
                496
              </td>
              <td colSpan="1" className="col-sm-1">
                2022-08-26, 05:16:05
              </td>
              <td colSpan="1" className="col-sm-1">
                None
              </td>
              <td colSpan="1" className="col-sm-1">
                PreliminarySummary	
              </td>
              <td colSpan="1" className="col-sm-1">
                ManageDAGsView.editdag
              </td>
              <td colSpan="2" className="col-sm-2">2022-08-25, 18:21:03</td>
              <td colSpan="2" className="col-sm-2">3593a96d-e92c-4dc7-82c4-373e64dbbeb8</td>
              <td colSpan="3" className="col-sm-3">
                'path': '/managedagsview/editdag/spark_k8_test.py/?'[] []
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default AuditLogsView;
