import React, { useRef, useState } from 'react';
import '../../static/buttonstyle.css';
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
} from '@chakra-ui/react';
import 'reactjs-popup/dist/index.css';

import 'font-awesome/css/font-awesome.min.css';

const CreateUpdate = () => {
  const fileRef = useRef();
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
  //   return parseFloat((bytes / (k ** i)).toFixed(dm)) + ' ' + sizes[i];
  // }

  const shiftbtnRight = {
    marginRight: '5px',
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
        <Popover>
          <PopoverTrigger>
            <button type="button" className="btn pull-right">Create new Pipeline</button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Create new Pipeline</PopoverHeader>
              <PopoverBody>
                <form method="post" className="form-group">
                  <div className="modal-body">
                    <label htmlFor="name">Enter Pipeline name</label>
                    <input type="text" name="name" className="form-control" aria-describedby="helpBlock" />
                  </div>
                </form>
                <span id="helpBlock" className="help-block">
                  Pipeline name can contain characters
                  <code>A-Z, a-z, _, -, 0-9</code>
                  . No need to put .py in the end.
                </span>
                {/* <input type="checkbox">Insert starter content in file.</input> */}
              </PopoverBody>
              <PopoverFooter>
                {/* <button type="button" style={shiftbtnRight} className="btn btn-dflt" data-dismiss="modal">Close</button> */}
                <button type="submit" className="btn">Create</button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
        <div style={btnRight}>
          <button className="btn pull-right" style={shiftbtnRight} type="submit" onClick={() => fileRef.current.click()}>
            Upload Pipeline file(s)
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
      <div style={padding} />
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateUpdate;
