import React from 'react';
import '../../static/buttonstyle.css';
import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const DataLakeExplorerView = () => {
  // const fileRef = useRef();
  // const buttonStyle = {
  //   backgroundColor: '#90cdf4',
  //   color: '#1A202C',
  //   borderRadius: '0.375rem',
  //   fontWeight: '600',
  //   height: '2rem',
  //   minWidth: '2rem',
  //   fontSize: '12px',
  //   width: 'auto',
  //   paddingLeft: '0.75rem',
  //   paddingRight: '0.75rem',
  // };

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
      <div style={padding} />

      <div className="input-group">
        <span className="input-group-addon">File path: </span>
        <div className="search-form-width">
          <input type="text" className="form-control" placeholder="filename" id="fileSearch" />
        </div>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table" id="filesTable">
          <thead>
            <tr className="table-head">
              <th colSpan="5">Filename</th>
              <th colSpan="2">File Owner</th>
              <th colSpan="2">Last Modified</th>
              <th colSpan="2">Size</th>
              <th colSpan="2">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="col-sm-5">
                customer.csv
              </td>
              <td colSpan="2" className="col-sm-2">prateek</td>
              <td colSpan="2" className="col-sm-2">Fri Apr 1 15:59:49 2022</td>
              <td colSpan="2" className="col-sm-2">97.072 KB</td>
              <td colSpan="2" className="col-sm-2">
                <Link to="/developer/auto-eda">
                  <button className="btn btn-success pull-right" type="submit">
                    Run Auto EDA
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataLakeExplorerView;
