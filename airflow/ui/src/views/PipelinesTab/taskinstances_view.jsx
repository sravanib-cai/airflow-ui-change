import React, { useState } from 'react';
import '../../static/buttonstyle.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
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
import 'reactjs-popup/dist/index.css';
import 'font-awesome/css/font-awesome.min.css';

const TaskInstancesView = () => {
  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };
  const padding = {
    paddingBottom: '20px',
  };
  const [isShownKey, setIsShownKey] = useState(false);
  const [isShownValue, setIsShownValue] = useState(false);

  const handleClickKey = (event) => {
    setIsShownKey(current => !current);
    // setIsShown(true);
  };
  const handleClickValue = (event) => {
    setIsShownValue(current => !current);
    // setIsShown(true);
  };

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      <div style={padding} />
      {/* <div className="panel panel-primary {{ extra_class }}">
        <div className="panel-heading">
          <h4 className="panel-title">{{title}}</h4>
        </div>
        <div className="panel-body">
          {% endmacro %}
          {% macro panel_end() %}
        </div>
      </div> */}

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
                {/* <form method="post" className="form-group">
                  <div className="modal-body">
                    <label htmlFor="name">Group name</label>
                    <input type="text" name="name" className="form-control" aria-describedby="helpBlock" />
                  </div>
                </form>
                <span id="helpBlock" className="help-block">
                  A group name can only contain <code>A-Z, a-z, _, -, 0-9</code>
                </span> */}
              </PopoverBody>
              <PopoverFooter>
                {/* <button type="button" style={shiftbtnRight} className="btn btn-dflt" data-dismiss="modal">Close</button> */}
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

        {/* <script type="text/javascript">
          $(document).ready(function() {
          {% for action_key in actions %}
            {% set action = actions.get(action_key) %}
            $('.{{action.name}}_menu_item').on('click', function(){
              {% if action.confirmation %}
                return modelActions.execute_multiple('{{action.name}}','{{action.confirmation}}');
              {% else %}
                return modelActions.execute_multiple('{{action.name}}', false);
              {% endif %}
            })
          {% endfor %}
          });
        </script> */}
      </div>
      <div style={{ float: 'right' }}>
        <strong>Record Count:</strong>
        0
      </div>
      <br />
      <div style={padding} />
      <strong>No records found</strong>
      {/* <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th colSpan="5">Attribute</th>
              <th colSpan="5">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="col-sm-5">
                hooks
              </td>
              <td colSpan="5" className="code col-sm-5">[]</td>
            </tr>
            <tr>
              <td colSpan="5" className="col-sm-5">
                source
              </td>
              <td colSpan="5" className="code col-sm-5">
                $PLUGINS_FOLDER/cai_loopable_batch_plugin.py
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>

  );
};

export default TaskInstancesView;
