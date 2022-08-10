import React, { useRef, useState } from 'react';

const UploadButton = () => {
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
  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
  };

  return (
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
  );
};

export default UploadButton;
