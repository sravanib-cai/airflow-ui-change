import React, { useRef, useState } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const DataLakeView = () => {
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
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [fileDate, setFileDate] = useState('');

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / (k ** i)).toFixed(dm))} ${sizes[i]}`;
  }

  const handleChange = (e) => {
    // const [file] = e.target.files;
    // console.log(file);
    setFileName(e.target.files[0].name);
    setFileSize(formatBytes(e.target.files[0].size));
    setFileDate(new Date(Date(e.target.files[0].lastModified)).toDateString());
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
        <h5 className="margin-top-md"> Choose DataLake type for this Config Group: </h5>
      </div>
      <link href="https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css" rel="stylesheet" />
      <div style={padding}>
        <div className="switch-toggle switch-3 switch-candy">
          {/* {% for datalake_source in files.keys() %}
            {% if datalake_source|upper == 'S3' %}
            <input id="on" name="state-d" type="radio" checked="" />
            <label for="on" onclick='activate_datalake("{{ datalake_source }}")'>
            {{ datalake_source|upper }}</label>
            {% elif datalake_source|upper == 'HADOOP' %}
            <input id="na" name="state-d" type="radio" />
            <label for="na" className="disabled"
            onclick='activate_datalake("{{ datalake_source }}")'>
            {{ datalake_source|upper }}</label>
            {% elif datalake_source|upper == 'CEPH' %}
            <input id="off" name="state-d" type="radio" />
            <label for="off" onclick='activate_datalake("{{ datalake_source }}")'>
            {{ datalake_source|upper }}</label>
            {% endif %}
          {% endfor %} */}

          {/* <input id="on" name="state-d" type="radio" checked="" />
          <label htmlFor="on">S3</label>
          <input id="na" name="state-d" type="radio" />
          <label htmlFor="na" className="disabled">HADOOP</label> */}

          {/* <input id="off" name="state-d" type="radio" />
          <label htmlFor="off">CEPH</label> */}
        </div>
      </div>
      <div style={padding} />
      <div style={btnRight}>
        <button style={buttonStyle} type="submit" onClick={() => fileRef.current.click()}>
          File Upload
        </button>
        <input
          ref={fileRef}
          onChange={handleChange}
          multiple={false}
          type="file"
          hidden
        />
      </div>
      <p>
        File Name:
        {fileName}
      </p>
      <p>
        File Size:
        {fileSize}
      </p>
      <p>
        File Date:
        {fileDate}
      </p>
      <br />
      <div className="input-group">
        <span className="input-group-addon">Search file: </span>
        <div className="search-form-width">
          <input type="text" className="form-control" placeholder="filename" id="fileSearch" />
        </div>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table" id="filesTable">
          <thead>
            <tr className="table-head">
              <th colSpan="15">Filename</th>
              <th colSpan="2">Last modified</th>
              <th colSpan="2">Size</th>
              <th colSpan="2">Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="15" className="col-sm-15">
                pi.py
              </td>
              <td colSpan="2" className="col-sm-2">Fri Aug 19 2022</td>
              <td colSpan="2" className="col-sm-2">1.52 KB</td>
              <td colSpan="1" className="col-sm-1">
                <div>
                  <i className="fa fa-cloud-download fa-lg" data-toggle="tooltip" title="Download" />
                </div>
              </td>
              <td colSpan="1" className="col-sm-1">
                <i className="fa fa-trash fa-lg" style={{ color: '#90cdf4' }} aria-hidden="true" data-toggle="tooltip" title="Delete File" />
              </td>
            </tr>
            <tr>
              <td colSpan="15" className="col-sm-15">
                airflow.html
              </td>
              <td colSpan="2" className="col-sm-2">Mon Aug 22 2022</td>
              <td colSpan="2" className="col-sm-2">335.86 KB</td>
              <td colSpan="1" className="col-sm-1">
                <div>
                  <i className="fa fa-cloud-download fa-lg" data-toggle="tooltip" title="Download" />
                </div>
              </td>
              <td colSpan="1" className="col-sm-1">
                <i className="fa fa-trash fa-lg" style={{ color: '#90cdf4' }} aria-hidden="true" data-toggle="tooltip" title="Delete File" />
              </td>
            </tr>
            <tr>
              <td colSpan="15" className="col-sm-15">
                Code.tsx
              </td>
              <td colSpan="2" className="col-sm-2">Mon Aug 22 2022</td>
              <td colSpan="2" className="col-sm-2">1.73 KB</td>
              <td colSpan="1" className="col-sm-1">
                <div>
                  <i className="fa fa-cloud-download fa-lg" data-toggle="tooltip" title="Download" />
                </div>
              </td>
              <td colSpan="1" className="col-sm-1">
                <i className="fa fa-trash fa-lg" style={{ color: '#90cdf4' }} aria-hidden="true" data-toggle="tooltip" title="Delete File" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataLakeView;
