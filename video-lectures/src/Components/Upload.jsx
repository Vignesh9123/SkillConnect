import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
const Upload = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    setVideoLoading(true);
    const formData = new FormData();
    formData.append("folderName", title);
    formData.append("file", videoFile);

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onClose();
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      })
      .finally(() => {
        setVideoLoading(false);
      });
  };

  return (
    <MainContainer>
      <div className="box">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="title">Upload Your Video</h2>
        <form action="">
          {/* <input
            type="text"
            placeholder="Enter video title"
            value={title}
            onChange={handleTitleChange}
            className="title-input"
            required
          /> */}
          <input
            type="text"
            placeholder="Enter Course "
            value={title}
            onChange={handleTitleChange}
            className="title-input"
            required
          />
          <div className="button-group">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="upload-btn"
              style={{ zIndex: "1", opacity: "0", cursor: "pointer" }}
              required
            />
            <button
              className="upload-btn"
              style={{
                position: "absolute",
                maxWidth: "180px",
                height: "45px",
                left: "85px",
                zIndex: "0",
              }}
            >
              Choose Video
            </button>
            <button className="upload-video-btn" onClick={handleUploadClick}>
              {videoLoading ? "Uploading..." : "Upload Video"}
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
};

export default Upload;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;

  .box {
    width: 70vw;
    max-width: 500px;
    height: auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid blue;
    border-radius: 15px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: red;
    transition: transform 0.2s;
  }

  .close-btn:hover {
    transform: scale(1.2);
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    color: blue;
    margin-bottom: 15px;
  }

  .title-input {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border: 1px solid blue;
    border-radius: 8px;
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .title-input:focus {
    border-color: darkblue;
  }

  .button-group {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .upload-btn,
  .upload-video-btn {
    width: 150px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .upload-btn {
    background-color: blue;
    border: none;
  }

  .upload-video-btn {
    background-color: green;
    border: none;
  }

  .upload-btn:hover {
    background-color: darkblue;
    transform: scale(1.05);
  }

  /* .upload-video-btn:hover {
    background-color: darkgreen;
    transform: scale(1.05);
  } */
`;