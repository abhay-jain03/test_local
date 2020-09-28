/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Test2 = (props) => {

  const [uploadImage, setUploadImage] = useState();

  const tryy = {
    background: "#f6f6f6",
    width: "40%",
    height: "2rem",
    border: "1px solid",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
  };

  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    // props.handleFile(fileUploaded);
    document.getElementById("hiddenFileInput").innerHTML = fileUploaded.name;
  }

  return (
    <>
      <h1>Hi Test2</h1>
      <div>
        <label style={tryy} for="hiddenFileInput">
          Upload a file
        </label>
      </div>
      <input
        type="file"
        id="hiddenFileInput"
        onChange={(event) => handleChange(event)}
        style={{ display: "none" }}
      />
    </>
  );
}

export default Test2;
