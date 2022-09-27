/* eslint-disable no-undef */
import React from 'react';
import '../static/buttonstyle.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProjectsTable = () => {
  // const fileRef = useRef();
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
    cssFloat: 'right',
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
    <div>
      <br />
      <div style={padding}>
        <div style={btnRight}>
          <button style={buttonStyle} type="submit">
            Add New Project
          </button>
        </div>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table" id="filesTable">
          <thead>
            <tr className="table-head">
              <th colSpan="3">Name</th>
              <th colSpan="2">Project Description</th>
              <th colSpan="1">Created By</th>
              <th colSpan="1">Created On</th>
              <th colSpan="1">Admin</th>
              <th colSpan="1">Net Compute Usage</th>
              <th colSpan="1">Last Modified</th>
              <th colSpan="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="col-sm-3">
                <Box
                  as="span"
                  color={linkColor}
                  _hover={{ color: 'blue.100' }}
                >
                  <div style={space} />
                  {/* Change url to project name variable */}
                  <Link to="/ml-example/overview" color="currentColor">ML Example</Link>
                </Box>
              </td>
              <td colSpan="2" className="col-sm-2">-</td>
              <td colSpan="1" className="col-sm-1">Lucky</td>
              <td colSpan="1" className="col-sm-1">12/03/2022</td>
              <td colSpan="1" className="col-sm-1">Lucky</td>
              <td colSpan="1" className="col-sm-1">3242.22 hrs</td>
              <td colSpan="1" className="col-sm-1">23/08/2022</td>
              <td colSpan="1" className="col-sm-1">
                <i
                  className="fa fa-ellipsis-h fa-lg"
                  style={{
                    color: '#718096', display: 'block', marginLeft: 'auto', marginRight: 'auto',
                  }}
                  data-toggle="tooltip"
                  title="Delete File"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
