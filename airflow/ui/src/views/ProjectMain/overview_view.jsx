import
React,
{
  useRef,
  // useState,
} from 'react';
import '../../static/buttonstyle.css';
import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';

import 'font-awesome/css/font-awesome.min.css';

const OverviewView = () => {
  // const fileRef = useRef();
  const buttonStyle = {
    backgroundColor: '#2D3748',
    color: '#90cdf4',
    borderRadius: '0.375rem',
    fontWeight: '600',
    height: '10rem',
    minWidth: '5rem',
    fontSize: '10px',
    width: 'auto',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    border: '#90cdf4',
  };
  const btnRight = {
    cssFloat: 'right',
  };

  const space = {
    width: '200px',
    height: 'auto',
    display: 'inline-block',
  };
  const padding = {
    paddingBottom: '5px',
  };

  const padding2 = {
    paddingBottom: '100px',
  };

  // const [fileName, setFileName] = useState('');
  // const [fileSize, setFileSize] = useState('');
  // const [fileDate, setFileDate] = useState('');

  // function formatBytes(bytes, decimals = 2) {
  //   if (bytes === 0) return '0 Bytes';
  //   const k = 1024;
  //   const dm = decimals < 0 ? 0 : decimals;
  //   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  //   const i = Math.floor(Math.log(bytes) / Math.log(k));
  //   return parseFloat((bytes / (k ** i)).toFixed(dm)) + ' ' + sizes[i];
  // }

  // const handleChange = (e) => {
  //   // const [file] = e.target.files;
  //   // console.log(file);
  //   setFileName(e.target.files[0].name);
  //   setFileSize(formatBytes(e.target.files[0].size));
  //   setFileDate(new Date(Date(e.target.files[0].lastModified)).toDateString());
  //   // const fileDate = e.target.files[0].lastModifiedDate[0];

  //   // const item = {
  //   //   name: {fileName},
  //   //   size: {fileSize},
  //   //   date: {fileDate}
  //   // };
  //   // this.setState({
  //   //   rows: [...this.state.rows, item]
  //   // });
  // };

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      <div>
        <div style={space} />
        <Link to="/pipelines/create-and-update">
          <button className="btn-projects" type="button">
            Pipelines
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Total   48
              <br />
              Running   2
              <br />
              Completed  0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : 3 hrs ago
            </p>
          </button>
        </Link>

        <div style={space} />
        <Link to="/developer/models-expts">
          <button className="btn-projects" type="button">
            Models and Experiments
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Total  23
              <br />
              Running  2
              <br />
              Completed   0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : 12 hrs ago
            </p>
          </button>
        </Link>

        <div style={space} />
        <Link to="/developer/datasets">
          <button className="btn-projects" type="button">
            Datasets
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Uploaded   43
              <br />
              Running   2
              <br />
              Completed  0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : 3 days ago
            </p>
          </button>
        </Link>
      </div>

      <div style={padding2} />

      <div>
        <div style={space} />
        <Link to="/developer/auto-api-builder">
          <button className="btn-projects" type="button">
            Auto API Builder
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Total   2
              <br />
              Running   2
              <br />
              Completed  0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : about a month ago
            </p>
          </button>
        </Link>

        {/* <div style={space} />
        <Link to="/config/clusterconfig/datalakeconfig">
          <button className="btn-projects" type="button">
            Configurations
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Total  23
              <br />
              Running  2
              <br />
              Completed   0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : 4 days ago
            </p>
          </button>
        </Link> */}

        <div style={space} />
        <Link to="/monitor/audit-logs">
          <button className="btn-projects" type="button">
            Monitor
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Total  23
              <br />
              Running  2
              <br />
              Completed   0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : 2 hrs ago
            </p>
          </button>
        </Link>

        <div style={space} />
        <Link to="/security">
          <button className="btn-projects" type="button">
            Security
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-body">
              Users   5
              <br />
              Running   2
              <br />
              Completed  0
            </p>
            <div style={padding} />
            <hr className="solid" />
            <div style={padding} />
            <p className="project-footer">
              Last Modified : 21/07/2022
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OverviewView;
