import React, { useState } from "react";
import styled from "styled-components";
import Upload from "./Upload";
import { Link } from "react-router-dom";

const VideoHeader = () => {
  const [showUpload, setShowUpload] = useState(false);
  const user =  JSON.parse(localStorage.getItem("user"));
  const handleClose = () => {
    setShowUpload(false);
  };

  return (
    <MainContainer>
      <Link to="/" className="logo"></Link>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3vw",
        }}
      >
        <button style={{display:user.role == 'admin' ? '':'none'}} className="upload-btn" onClick={() => setShowUpload(true)}>
          Upload Video
        </button>
      </div>
      {showUpload && <Upload onClose={handleClose} />}
      
    </MainContainer>
  );
};

export default VideoHeader;

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 3px 3vw;
  .logo {
    background: url("https://github.com/SurajSG23/landing-page-SC/raw/main/src/assets/SC-logo.png") no-repeat center/contain;
    width: 180px;
    height: 70px;
    filter: drop-shadow(2px 2px 5px blue);
    cursor: pointer;
  }
  .upload-btn {
    padding: 7px 5px;
    border: 1px solid blue;
    border-radius: 7px;
    cursor: pointer;
    color: white;
    font-weight: 600;
    background-color: blue;
    box-shadow: 3px 3px 10px #8686ff;
    font-weight: 600;
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`;