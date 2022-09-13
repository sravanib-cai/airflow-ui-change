import React, { useState } from 'react';

function FileForm(props) {
  const [name, setName] = useState('');
  const changeName = () => {
	setName(event.target.value);
  };

  const transferValue = () => {
    event.preventDefault();
	const val = {
	  name,
    city,
	};
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName('');
  };
  return (
    <div>
      {/* <label>Name</label> */}
      <input color="black" type="text" value={name} onChange={changeName} />
      <button color="#4A5568" onClick={transferValue}>Upload File</button>
    </div>
  );
}

export default FileForm;
