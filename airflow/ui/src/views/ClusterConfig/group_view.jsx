import React, { useRef, useState } from 'react';
import './buttonstyle.css'; 
import { Link } from 'react-router-dom';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const GroupView = () => {
  const fileRef = useRef();
  const buttonStyle = {
    backgroundColor: '#90cdf4',
    color: '#1A202C',
    borderRadius: '0.375rem',
    fontWeight: '600',
    height: '2rem',
    minWidth: '2rem',
    fontSize: '12px',
    width: 'auto',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  };
  const btnRight = {
    marginRight: '5px',
  };
  // constructor(props){
  //   super(props);

  //   // Here we initialize our components state
  //   this.state = {
  //       showForm: false
  //   };

  //   this.onClick = this.onClick.bind(this);
  // }

  // onClick () {
  //     // On click we change our state – this will trigger our `render` method
  //     this.setState({ showForm: true });
  // }
  // const formstate= {showForm: false}
  // const showForm = () => {
  //   return (
      // <div className={"modal fade"} id="addGroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      //   <div className={"modal-dialog"} role="document">
      //     <div className={"modal-content"}>
      //       <div className={"modal-header"}>
      //         <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
      //           <span aria-hidden="true">&times;</span>
      //         </button>
      //         <h4 className={"modal-title"} id="myModalLabel">Add a group</h4>
      //       </div>
      //       <form method="post" className={"form-group"}>
      //         <div className={"modal-body"}>
      //           <label htmlFor="name">Group name</label>
      //           <input type="text" name="name" className={"form-control"} aria-describedby="helpBlock" onInput="checkGroupName(this)" required/>
      //           <span id="helpBlock" className={"help-block"}>
      //             A group name can only contain <code>A-Z, a-z, _, -, 0-9</code>
      //           </span>
      //         </div>
      //         <div className={"modal-footer"}>
      //           <button type="button" className={"btn btn-dflt"} data-dismiss="modal">Close</button>
      //           <button type="submit" className={"btn btn-primary"}>Add</button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
  //   );
  // };
  
  // function changeDefaultGroup(group) {
  //   location.href = "{{ url_for(view + '.change_default_group') }}?group=" + group;
  // }

  // function groupExists(group) {
  //   const groups = [
  //     {% for group, is_default in groups %}
  //       "{{group.name}}",
  //     {% endfor %}
  //   ];
  //   if( groups.includes(group) ) return true;
  //   return false;
  // }
  
  // function checkGroupName(input) {
  //   var validGroupName = /^[A-Za-z0-9_-]+$/i.test(input.value);
  //   if (validGroupName) {
  //     input.setCustomValidity('');
  //   } else {
  //     input.setCustomValidity('Not a valid Group name.');
  //   }
  //   if (groupExists(input.value)) {
  //     input.setCustomValidity('Group already exists.');
  //   }
  // }

  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };
  const padding = {
    paddingBottom: "20px"
  }
  const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      <div style={padding}>
        {/* <button className="btn btn-success pull-right" data-toggle="modal" onClick={() => this.setState({showForm: true}) }>Add a group</button> */}
        {/* {this.formstate.showForm ? this.showForm() : null} */}
        <Popup trigger={
          <button className={"btn btn-success pull-right"} data-toggle="modal">Add a group</button>
        }>
          <div className={"modal fade"} id="addGroup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className={"modal-dialog"} role="document">
              <div className={"modal-content"}>
                <div className={"modal-header"}>
                  <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className={"modal-title"} id="myModalLabel">Add a group</h4>
                </div>
                <form method="post" className={"form-group"}>
                  <div className={"modal-body"}>
                    <label htmlFor="name">Group name</label>
                    {/* <input type="text" name="name" className={"form-control"} aria-describedby="helpBlock" onInput="checkGroupName(this)" required/> */}
                    <input type="text" name="name" className={"form-control"} aria-describedby="helpBlock" />
                    <span id="helpBlock" className={"help-block"}>
                      A group name can only contain <code>A-Z, a-z, _, -, 0-9</code>
                    </span>
                  </div>
                  <div className={"modal-footer"}>
                    <button type="button" className={"btn btn-dflt"} data-dismiss="modal">Close</button>
                    <button type="submit" className={"btn btn-primary"}>Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Popup>
        
        <Link to={`/clusterconfig/datalakeconfig`}>
          <button className={"btn btn-success pull-right"} style={btnRight} type="submit">
            Open default group
          </button>
        </Link>
      </div>
      
      {/* <div style={space}></div> */}
      {/* <button style={buttonStyle} type="submit" >
        Add a group
      </button> */}
{/* 
      <div className={"modal fade"} id="addGroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className={"modal-dialog"} role="document">
          <div className={"modal-content"}>
            <div className={"modal-header"}>
              <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className={"modal-title"} id="myModalLabel">Add a group</h4>
            </div>
            <form method="post" className={"form-group"}>
              <div className={"modal-body"}>
                <label htmlFor="name">Group name</label>
                <input type="text" name="name" className={"form-control"} aria-describedby="helpBlock" onInput="checkGroupName(this)" required/>
                <span id="helpBlock" className={"help-block"}>
                  A group name can only contain <code>A-Z, a-z, _, -, 0-9</code>
                </span>
              </div>
              <div className={"modal-footer"}>
                <button type="button" className={"btn btn-dflt"} data-dismiss="modal">Close</button>
                <button type="submit" className={"btn btn-primary"}>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <br></br>
      <div className={"input-group"}>
        <span className="input-group-addon">Search Group: </span>
        <input type="text" className="form-control" placeholder="groupname" id="fileSearch" />
      </div>
      <br />
      <div className="table-responsive">
        <table className="table table-bordered" id="filesTable">
          <thead>
            <tr className="table-head">
              <th colspan="2" className="col-sm-2">Group Name</th>
              <th colspan="2" className="col-sm-2">Change Default Group</th>
              <th colspan="8" className="col-sm-8">Configurations</th>
              <th colspan="2" className="col-sm-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" colspan="2" className="col-sm-2">
                  test
              </td>
              <td colspan="2" className="col-sm-2">
                <div>
                  <input type="radio" name="default-group" checked /> 
                  Default group
                  {/* {% if is_default %} */}
                    {/* <input type="radio" name="default-group" checked> Default group */}
                  {/* {% else %} */}
                    {/* <input type="radio" name="default-group" onclick="changeDefaultGroup('{{group.name}}')"> */}
                    {/* Make this group default */}
                  {/* {% endif %} */}
                </div>
              </td>
              <td colspan="8" className="col-sm-8">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'teal.500' }}
                >
                  {/* <img src={{ url_for('static', filename='couture/images/elephant.svg')}} height="20" width="20"
                  style={{filter: "invert(61%) sepia(39%) saturate(4199%) hue-rotate(184deg) brightness(86%) contrast(80%)"}}> */}
                  <Link to="/clusterconfig/datalakeconfig" color="currentColor">Data Lake Configuration</Link>
                  /
                </Box>
              </td> 
              <td colspan="2" className="col-sm-2">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'teal.500' }}
                >
                  <i className="fa fa-star-o fa-lg" style={{transform: "rotate(20deg)"}} aria-hidden="true">
                  </i>
                  <div style={space}></div>
                  <Link to="/clusterconfig/sparkconfig" color="currentColor">Spark Configuration</Link>
                  /
                </Box>
              </td>
              <td colspan="2" className="col-sm-2">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'teal.500' }}
                >
                  <i className="fa fa-star-o fa-lg" style={{transform: "rotate(20deg)"}} aria-hidden="true">
                  </i>
                  <div style={space}></div>
                  <Link to="/clusterconfig/sparkdependency" color="currentColor">Spark Dependency</Link>
                  /
                </Box>
              </td>
              <td colspan="2" className="col-sm-3">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'teal.500' }}
                >
                  <i className="fa fa-key fa-lg" aria-hidden="true" data-toggle="tooltip" title="View Kerberos Configuration"></i>
                  <div style={space}></div>
                  <Link to="/clusterconfig/kerberosconfig" color="currentColor">Kerberos Configuration</Link>
                  /
                </Box>
              </td>
              <td colspan="2" className="col-sm-2">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'teal.500' }}
                >
                  <i className="fa fa-arrows-v" aria-hidden="true"></i>
                  <div style={space}></div>
                  <Link to="/clusterconfig/livyconfig" color="currentColor">Livy Configuration</Link>
                  /
                </Box>
              </td>
              <td colspan="2" className="col-sm-2">
                <div style={{display: "flex", justifyContent: "center"}}><a href="#" style={{opacity: "0.5", cursor: "not-allowed"}}>
                  <i className="fa fa-trash fa-lg" style={{color:"red"}} aria-hidden="true" ></i>
                </a></div>
                {/* {% if not is_default %}
                <div style="display:flex; justify-content:center"> <a href="{{ url_for(view + '.delete_group', groupname=group.name) }}" onclick="return confirm('Are you sure to delete {{group.name}}? All the related configs will be deleted?')">
                  <i className="fa fa-trash fa-lg" style="color:red" aria-hidden="true" data-toggle="tooltip" title="Delete Group"></i>
                </a></div>
              
                {% else %}
                <div style="display:flex; justify-content:center"><a href="#" style="opacity: 0.5; cursor: not-allowed;">
                  <i className="fa fa-trash fa-lg" style="color:red" aria-hidden="true" ></i>
                </a></div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
  );
};

export default GroupView;
