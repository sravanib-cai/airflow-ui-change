import React, { useState } from 'react';
import FileForm from './form';
import jsonData from './data.json';

function TableData() {
  const [fileData, setfileData] = useState(jsonData);
  const tableRows = fileData.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        {/* <td>{info.size}</td> */}
        <td>{info.delete}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const updatedfileData = [...fileData];
    updatedfileData.push(data);
    setfileData(updatedfileData);
  };

  return (
    <div>
      <FileForm func={addRows} />
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Filename</th>
            {/* <th>Size</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default TableData;
