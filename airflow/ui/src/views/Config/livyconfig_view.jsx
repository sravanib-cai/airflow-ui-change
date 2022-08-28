import React, { useRef } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const LivyConfigView = () => {
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
    cssFloat: 'right',
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
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  // }

  const handleChange = (e) => {
    const [file] = e.target.files;
    // console.log(file);
    // setFileName(e.target.files[0].name);
    // setFileSize(formatBytes(e.target.files[0].size));
    // setFileDate(new Date(Date(e.target.files[0].lastModified)).toDateString());

    // const fileDate = e.target.files[0].lastModifiedDate[0];

    // const item = {
    //   name: {fileName},
    //   size: {fileSize},
    //   date: {fileDate}
    // };
    // this.setState({
    //   rows: [...this.state.rows, item]
    // });
  };

  const Headers = {
    // backgroundColor: '#90cdf4',
    // color: '#1A202C',
    fontWeight: '600',
    fontSize: '14px'
  };

  // const space = {
  //   width: '3px',
  //   height: 'auto',
  //   display: 'inline-block',
  // };
  const padding = {
    paddingBottom: '20px',
  };
  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      <div style={padding}>
        <h4 className="margin-top-md">Set your Livy configuration for Remote Spark Access in Jupyter Notebooks here. </h4>
        <br />
        <h6 style={Headers}>kernel_python_credentials</h6>
      </div>
      <div>
        <span className="input-form-addon input-form-sep">Username</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon input-form-sep">Password</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div> 
      <div>
        <span className="input-form-addon input-form-sep">url</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div> 
      <div>
        <span className="input-form-addon input-form-sep">auth</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <br />
      {/* <div style={padding} /> */}
      <div className="buttonCenter">
        <button style={buttonStyle} type="submit">
          Save Changes
        </button>
      </div> 

      <div style={padding}>
        <h6 style={Headers}>kernel_scala_credentials</h6>
      </div>
      <div>
        <span className="input-form-addon input-form-sep">Username</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon input-form-sep">Password</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div> 
      <div>
        <span className="input-form-addon input-form-sep">url</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div> 
      <div>
        <span className="input-form-addon input-form-sep">auth</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <br />
      {/* <div style={padding} /> */}
      <div className="buttonCenter">
        <button style={buttonStyle} type="submit">
          Save Changes
        </button>
      </div> 

      <div style={padding}>
        <h6 style={Headers}>kernel_r_credentials</h6>
      </div>
      <div>
        <span className="input-form-addon input-form-sep">Username</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon input-form-sep">Password</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div> 
      <div>
        <span className="input-form-addon input-form-sep">url</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div> 
      <div>
        <span className="input-form-addon input-form-sep">auth</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <br />
      {/* <div style={padding} /> */}
      <div className="buttonCenter">
        <button style={buttonStyle} type="submit">
          Save Changes
        </button>
      </div> 

      <br />  
      <h6 style={Headers}>custom headers</h6>
      <div className="buttonCenter">
        <div className="input-form form-width">
          <input type="text" className="form-control-addon" />
        </div>
      </div>
      {/* <div style={padding} /> */}
      <div className="buttonCenter">
        <button style={buttonStyle} type="submit">
          Save Changes
        </button>
      </div> 

      <br />
      <h6 style={Headers}>session_configs</h6>
      <div className="buttonCenter">
        <div className="input-form form-width">
          <input type="text" className="form-control-addon" />
        </div>
      </div>
      {/* <div style={padding} /> */}
      <div className="buttonCenter">
        <button style={buttonStyle} type="submit">
          Save Changes
        </button>
      </div> 
      
    </div>
  );
};

export default LivyConfigView;
