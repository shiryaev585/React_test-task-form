import React, { useState } from "react";
import folder from "../../../assets/folder.svg";
import "./DragAndDrop.scss";

const DragAndDrop = () => {
  const [drag, setDrag] = useState(true);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("userId", 1);
  };

  return (
    <div className="form__right-side-wrp drop">
      <h3 className="drop__subtitle">Upload your files</h3>
      <div
        className="drop__area"
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        <label for="file">
          <input
            type="file"
            id="file"
            name="test_file"
            className="drop__input"
            form="test_form"
          />
          <img className="drop__img" src={folder} alt="folder-img" />
          <p className="drop__area-txt">Drag your files here.</p>
          <p className="drop__area-txt">Maximum size: 2mb</p>
        </label>
      </div>
    </div>
  );
};

export default DragAndDrop;
