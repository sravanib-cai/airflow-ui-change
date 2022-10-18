/* global document */
import React, { useEffect, useState } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import axios from 'axios';
import EDATable from '../../components/Tables/EDATable';
import 'font-awesome/css/font-awesome.min.css';
import AddEDAFileDialog from '../../components/Dialog/AddEDAFileDialog';

const EDAView = () => {
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

  const [files, setFiles] = useState([]);
  const [addFile, setAddFile] = useState({ open: false, file: null });
  const fetchFiles = async () => {
    try {
      // const token = userStore.user.access;
      const token = 'read';
      const config = {
        method: 'GET',
        url: 'https://exl.workbench.couture.ai/workbench-expt/edaview/eda/sources/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(config);
      // setFiles(response.data.response);
      setFiles(response.data);
      console.log(files);
      //   setFiles(defaultProjects);
    } catch (e) {
    //   setFiles(defaultProjects);

      // TODO: handle error here
    }
  };
  useEffect(() => {
    fetchFiles();
    // eslint-disable-next-line
      }, []);

  useEffect(() => {
    // fetchFiles();
    console.log('files', files);
    // eslint-disable-next-line
      }, [files]);
  // const space = {
  //   width: '3px',
  //   height: 'auto',
  //   display: 'inline-block',
  // };
  const heading = ['Dataset', ''];
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
          <Button
            onClick={() => setAddFile({ open: true, data: null })}
            colorScheme="blue"
            size="sm"
            mr="2"
          >
            File Upload
          </Button>
        </div>
      </div>
      <AddEDAFileDialog
        open={addFile.open}
        handleClose={() => setAddFile({ open: false, data: null })}
        fetchFiles={fetchFiles}
      />
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
      <Box w="100%" h={400}>
        <EDATable
          heading={heading}
          data={files.sources}
        />
      </Box>
      {/* <div className="table-responsive">
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
      </div> */}
      <div style={padding}>
        <Button
          // onClick={() => setAddFile({ open: true, data: null })}
          colorScheme="blue"
          size="sm"
          mr="2"
        >
          Generate Cross-File Visualizations
        </Button>
        {/* <button type="button" className="btn">Generate Cross-File Visualizations</button> */}
        <div style={space} />
        <Button
          // onClick={() => setAddFile({ open: true, data: null })}
          colorScheme="blue"
          size="sm"
          mr="4"
          marginRight="5px"
        >
          Generate Visualizations
        </Button>
        {/* <button className="btn" style={shiftbtnRight} type="submit">
          Generate Visualizations
        </button> */}
      </div>

      {/* <div className="button-container">
        <button style={btnRight} className="openbtn rotate vertical-center"
        onClick={() =>openNav()}>&#9776; Open Sidebar</button>
      </div> */}
      {/* <button style={btnRight} className="openbtn rotate vertical-center"
      onClick={() =>openNav()}>&#9776; Open Sidebar</button> */}

      <div id="mySidebar" className="sidebar">
        <div className="outputs">
          <button type="button" className="closebutton" onClick={() => closeNav()}>&#10006;</button>
          <p style={{ display: 'inline-block' }}>
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
                <button className="btn-folder" type="submit" id="toggle-folder" onClick={() => showDiv()}>
                  example2
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
