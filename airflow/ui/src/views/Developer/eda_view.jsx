/* global document */
import React, { useRef } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const EDAView = () => {
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
  const shiftbtnRight = {
    marginRight: '5px',
  };
  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };

  function openNav() {
    const mysidebar = document.getElementById('mySidebar');
    mysidebar.style.width = '500px';
    const main = document.getElementById('main');
    main.style.marginLeft = '500px';
    // document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    const mysidebar = document.getElementById('mySidebar');
    mysidebar.style.width = '0';
    // document.getElementById("mySidebar").style.width = "0";
    const main = document.getElementById('main');
    main.style.marginLeft = '0';
    // document.getElementById("main").style.marginLeft = "0";
  }

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

  // const space = {
  //   width: '3px',
  //   height: 'auto',
  //   display: 'inline-block',
  // };
  const padding = {
    paddingBottom: '20px',
  };
  // const handleChange = (e) => {
  //   const [file] = e.target.files;
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

  function showDiv() {
    document.getElementById('file_view').style.display = '';
  }

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      {/* <button type="button" className="btn btn-primary pull-left" data-toggle="modal"
              id="uploadData" data-target="#selectdata">Upload Data</button> */}
      <div style={padding}>
        <div className="buttonCenter">
          <button style={buttonStyle} type="submit" onClick={() => fileRef.current.click()}>
            File Upload
          </button>
          <input
            ref={fileRef}
            // onChange={handleChange}
            multiple={false}
            type="file"
            hidden
          />
        </div>
      </div>
      <div style={padding}>
        <div className="rightbar">
          <div className="input-group">
            <span className="input-group-addon">Search Dataset: </span>
            <div className="search-form-width">
              <input type="text" className="form-control" placeholder="filename" id="fileSearch" />
            </div>
          </div>
        </div>
        <div className="rightbar" style={btnRight}>
          <button type="button" className="openbtn" onClick={() => openNav()}>&#9776; Processed Outputs</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th colSpan="1">
                <input type="radio" aria-label="checkbox" name="default-group" />
              </th>
              <th colSpan="3">Dataset</th>
              <th colSpan="1">Date Modified</th>
              <th colSpan="1">Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1" className="col-sm-1">
                <input type="radio" name="default-group" />
              </td>
              <td colSpan="3" className="col-sm-3">
                s3a://eda-couture-test/inputs/RickAndMortyScripts.csv, table=RickAndMortyScripts
              </td>
              <td colSpan="1" className="col-sm-1">19/08/2022</td>
              <td colSpan="1" className="col-sm-1">
                738 KB
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={padding}>
        <button type="button" className="btn">Generate Cross-File Visualizations</button>
        <div style={space} />
        <button className="btn" style={shiftbtnRight} type="submit">
          Generate Visualizations
        </button>
      </div>

      {/* <div className="button-container">
        <button style={btnRight} className="openbtn rotate vertical-center"
        onClick={() =>openNav()}>&#9776; Open Sidebar</button>
      </div> */}
      {/* <button style={btnRight} className="openbtn rotate vertical-center"
      onClick={() =>openNav()}>&#9776; Open Sidebar</button> */}

      <div id="mySidebar" className="sidebar">
        <button type="button" className="closebutton" onClick={() => closeNav()}>&#10006;</button>
        <div className="outputs">
          <p>
            Processed Outputs
          </p>
        </div>
        <div style={padding} />
        <div className="flex-container">
          <div className="stage1">
            <div className="folder-title">
              <p> Folders </p>
            </div>
            <div className="folders flex-container">
              <div>
                <button className="btn-folder" type="submit" id="toggle-folder" onClick={() => showDiv()}>
                  RickNMorty
                </button>
              </div>
            </div>
          </div>

          <div className="stage2">
            <div id="file_view" className="files_view" style={{ display: 'none' }}>
              <div>
                <p>
                  RickNMorty
                  <i className="fa fa-angle-right" />
                </p>
              </div>
              <div className="grid-container">
                <div className="tile grid-item">
                  <div>
                    <i className="fa fa-file" />
                    <div style={space} />
                    <button type="button" aria-label="Delete" className="fa fa-download" />
                    <div className="file-text">
                      <p>
                        ricknmorty.html
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* o
      <div className="column2">
        <div className="outputs">
          <p>
            Processed Outputs
          </p>
        </div>
        <div className="flex-container">
          <div className="stage1" >
            <div className="folder-title">
              <p> Folders </p>
            </div>
            <div className="folders flex-container">
            {/* {%for folder_name in folder_dict%}
              <div>
                <button className="btn folder-btn" type="submit">
                  RickNMorty
                </button>
              </div>
            {/* {%endfor%}
            </div>
          </div>

          <div className="stage2" id="file-view">
            {/* {%for folder_name, file_list in folder_dict.items()%}
            <div className="flex-container files_view" >
              <div>
              <p>RickNMorty <i className="fa fa-angle-right"></i></p>
              </div>
              <div className="grid-container">
              {/* {%for file_name in file_list%}
                <div className="tile grid-item">
                  <div>
                    <i className="fa fa-file">
                    </i>
                    <button className="fa fa-download">
                    </button>
                    <p className="file-text">ricknmorty.html</p>
                  </div>
                </div>
              {/* {%endfor%}
              </div>
            </div>
            {/* {%endfor%}
          </div>
        </div>
      </div>
      */}

    </div>
  );
};

export default EDAView;
