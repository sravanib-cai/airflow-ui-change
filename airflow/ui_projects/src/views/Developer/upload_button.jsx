import React, { useRef, useState } from 'react';
// import moment from 'moment';

const UploadButton = () => {
  const fileRef = useRef();
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [fileDate, setFileDate] = useState('');
  // const [file, setFile] = useState([]);
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
  // function formatBytes(a,b=2,k=1024){with(Math){let d=floor(log(a)/log(k));
  // return 0==a?"0 Bytes":parseFloat((a/pow(k,d)).toFixed(max(0,b)))+
  // " "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}}

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / (k ** i)).toFixed(dm)) + ' ' + sizes[i];
    // return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  const handleChange = (e) => {
    const [f] = e.target.files;
    // console.log(f);
    // setFile(f);
    setFileName(e.target.files[0].name);
    // console.log('File test', f);
    // console.log(f.name);
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

  // const [fileData, setfileData] = useState([ {"fileName":"","fileSize":"","fileDate":""} ]);
  // const tableRows = fileData.map((info) => {
  //   return (
  //     <tr>
  //       <td>{info.fileName}</td>
  //       <td>{info.fileSize}</td>
  //       <td>{info.fileDate}</td>
  //     </tr>
  //   );
  // });

  // const addRows = (data) => {
  //   const updatedfileData = [...fileData];
  //   updatedfileData.push(data);
  //   setfileData(updatedfileData);
  // };

  // const state = {
  //   rows: []
  // };

  // const handleTableChange = idx => e => {
  //   const { name, value } = e.target;
  //   const rows = [...this.state.rows];
  //   rows[idx] = {
  //     [name]: value
  //   };
  //   this.setState({
  //     rows
  //   });
  // };
  // handleAddRow = () => {
  //   const item = {
  //     name: "",
  //     size: "",
  //     date: ""
  //   };
  //   this.setState({
  //     rows: [...this.state.rows, item]
  //   });
  // };
  // handleRemoveRow = () => {
  //   this.setState({
  //     rows: this.state.rows.slice(0, -1)
  //   });
  // };

  return (
    <div>
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
      <div>
        {/* <div className="row clearfix">
          <div className="col-md-12 column">
            <table
              className="table table-bordered table-hover"
              id="tab_logic"
            >
              <thead>
                <tr>
                  <th className="text-center"> Filename </th>
                  <th className="text-center"> Size </th>
                  <th className="text-center"> Last Modified </th>
                </tr>
              </thead>
              <tbody>
                {this.state.rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>{idx}</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={this.state.rows[idx].name}
                        onChange={this.handleTableChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="size"
                        value={fileName}
                        onChange={this.handleTableChange(idx)}
                        className="form-control"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={this.handleRemoveRow}
              className="pull-right btn btn-default"
            >
              Delete Row
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UploadButton;
