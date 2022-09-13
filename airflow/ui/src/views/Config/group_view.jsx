import React from 'react';
import '../../static/buttonstyle.css';
import { Link } from 'react-router-dom';
import {
  // Button,
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
  // PopoverAnchor,
} from '@chakra-ui/react';
import 'reactjs-popup/dist/index.css';

import 'font-awesome/css/font-awesome.min.css';
// import elephant from '../../components/icons/elephant.svg';
// import diagramProject from '../../components/icons/diagram-project-solid.svg';

const GroupView = () => {
  const shiftbtnRight = {
    marginRight: '5px',
  };

  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };
  const padding = {
    paddingBottom: '20px',
  };
  const linkColor = useColorModeValue('blue.200', 'blue.300');

  return (
    // <div style={btnRight}>
    <div>
      {/* <div style={padding} /> */}
      <div style={padding}>
        <Popover>
          <PopoverTrigger>
            <button type="button" className="btn pull-right">Add a group</button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Add a group</PopoverHeader>
              <PopoverBody>
                <form method="post" className="form-group">
                  <div className="modal-body">
                    {/* <label htmlFor="name">Group name</label> */}
                    <input type="text" name="name" className="form-control" aria-describedby="helpBlock" />
                  </div>
                </form>
                <span id="helpBlock" className="help-block">
                  A group name can only contain
                  <code>A-Z, a-z, _, -, 0-9</code>
                </span>
              </PopoverBody>
              <PopoverFooter>
                {/* <button type="button" style={shiftbtnRight}
                className="btn btn-dflt" data-dismiss="modal">Close</button> */}
                <button type="submit" className="btn">Add</button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
        {/* <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup> */}
        {/* <Popup
          trigger={
            <button type="button" className="btn btn-success pull-right"
            data-toggle="modal">Add a group</button>
          }
        >
          <div>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">Add a group</h4>
                </div>
                <form method="post" className="form-group">
                  <div className="modal-body">
                    <label htmlFor="name">Group name</label>
                    <input type="text" name="name" className="form-control"
                    aria-describedby="helpBlock" />
                    <span id="helpBlock" className="help-block">
                      A group name can only contain
                      <code>A-Z, a-z, _, -, 0-9</code>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-dflt" data-dismiss="modal">
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Popup> */}

        <Link to="/config/clusterconfig/datalakeconfig">
          <button className="btn pull-right" style={shiftbtnRight} type="submit">
            Open default group
          </button>
        </Link>
      </div>

      {/* <div style={space} /> */}
      {/* <button style={buttonStyle} type="submit" >
        Add a group
      </button> */}
      {/*
      <div className="modal fade" id="addGroup" tabindex="-1"
      role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Add a group</h4>
            </div>
            <form method="post" className="form-group">
              <div className="modal-body">
                <label htmlFor="name">Group name</label>
                <input type="text" name="name" className="form-control"
                aria-describedby="helpBlock" onInput="checkGroupName(this)" required/>
                <span id="helpBlock" className="help-block">
                  A group name can only contain <code>A-Z, a-z, _, -, 0-9</code>
                </span>
              </div>
              <div className="modal-footer"}>
                <button type="button" className="btn btn-dflt" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <br />
      <div className="input-group">
        <span className="input-group-addon">Search Group: </span>
        <div className="search-form-width">
          <input type="text" className="form-control" placeholder="groupname" id="fileSearch" />
        </div>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table" id="filesTable">
          <thead>
            <tr className="table-head">
              <th colSpan="2" className="col-sm-2-1">Group Name</th>
              <th colSpan="2" className="col-sm-2-1">Change Default Group</th>
              <th colSpan="10" className="col-sm-10">Configurations</th>
              <th colSpan="1" className="col-sm-1">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="col-sm-2-1">
                {/* <td scope="row" colSpan="2" className="col-sm-2-1"> */}
                test
              </td>
              <td colSpan="2" className="col-sm-2-1">
                <div>
                  <input type="radio" name="default-group" checked />
                  <div style={space} />
                  Default group
                  {/* {% if is_default %} */}
                  {/* <input type="radio" name="default-group" checked> Default group */}
                  {/* {% else %} */}
                  {/* <input type="radio" name="default-group"
                  onclick="changeDefaultGroup("{{group.name}}")"> */}
                  {/* Make this group default */}
                  {/* {% endif %} */}
                </div>
              </td>
              <td colSpan="2" className="col-sm-2-1">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <i className="fa fa-database fa-lg" aria-hidden="true" />
                  <div style={space} />
                  <Link to="/config/clusterconfig/datalakeconfig" color="currentColor">Data Lake Config</Link>
                  /
                </Box>
              </td>
              <td colSpan="2" className="col-sm-2-1">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <i className="fa fa-cogs fa-lg" aria-hidden="true" />
                  <div style={space} />
                  <Link to="/config/clusterconfig/sparkconfig" color="currentColor">Spark Config</Link>
                  /
                </Box>
              </td>
              <td colSpan="2" className="col-sm-2-1">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <i className="fa fa-star-o fa-lg" style={{ transform: 'rotate(20deg)' }} aria-hidden="true" />
                  <div style={space} />
                  <Link to="/config/clusterconfig/sparkdependency" color="currentColor">Spark Dependency</Link>
                  /
                </Box>
              </td>
              <td colSpan="2" className="col-sm-2-1">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <i className="fa fa-key fa-lg" aria-hidden="true" data-toggle="tooltip" title="View Kerberos Configuration" />
                  <div style={space} />
                  <Link to="/config/clusterconfig/kerberosconfig" color="currentColor">Kerberos Config</Link>
                  /
                </Box>
              </td>
              <td colSpan="2" className="col-sm-2-1">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <i className="fa fa-arrows-v" aria-hidden="true" />
                  <div style={space} />
                  <Link to="/config/clusterconfig/livyconfig" color="currentColor">Livy Config</Link>
                  /
                </Box>
              </td>
              <td colSpan="1" className="col-sm-1">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* <a href="/#" style={{ opacity: '0.5', cursor: 'not-allowed' }}> */}
                  <i className="fa fa-trash fa-lg" style={{ color: '#90cdf4' }} aria-hidden="true" />
                  {/* </a> */}
                </div>
                {/* {% if not is_default %}
                <div style="display:flex; justify-content:center">
                  <a href="{{ url_for(view + ".delete_group", groupname=group.name) }}"
                  onclick="return confirm("Are you sure to delete {{ group.name }}?
                  All the related configs will be deleted?"
                  )">
                  <i className="fa fa-trash fa-lg" style="color:red"
                    aria-hidden="true" data-toggle="tooltip" title="Delete Group"
                  />
                </a></div>
                {% else %}
                <div style="display:flex; justify-content:center">
                  <a href="/#" style="opacity: 0.5; cursor: not-allowed;">
                    <i className="fa fa-trash fa-lg" style="color:red" aria-hidden="true" />
                  </a>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupView;
