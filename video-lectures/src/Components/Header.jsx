import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <MainContainer>
      <div className="logo"></div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'3vw'}}>
        <div className="about">About</div>
        <div className="aboutP">
          <p>
            Skill Connect is an innovative platform designed to empower students
            on their career journey. With Skill Connect, you can access
            high-quality online classes, enhance your learning with AI-powered
            mock interviews, and generate ATS-optimized resumes that increase
            your chances of landing your dream job. Our platform provides
            everything you need to stay ahead in the competitive job market,
            offering personalized learning paths and real-time feedback. Whether
            you're improving your skills or preparing for interviews, Skill
            Connect has you covered.
          </p>
        </div>
        <div>
          <FaRegUserCircle style={{ fontSize: "40px",cursor:'pointer' }} />
        </div>
        <div className="log-button">
            <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 3px 3vw;
.log-button button{
    width:120px;
    padding:4px 5px;
    border-radius:10px;
    font-weigth:600;
    font-size:18px;
    background-color:blue;
    color:white;
    cursor:pointer;
    }
  .about {
    cursor: pointer;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }
  }

  .aboutP {
    display: none;
    position: absolute;
    width: 22vw;
    height: auto;
    border: 2px solid blue;
    border-radius: 10px;
    backdrop-filter: blur(50px) contrast(1.5);
    z-index: 99;
    top: 8.5vh;
    right: 1vw;
    text-align: center;
    padding: 20px 10px;
    font-size: large;
    font-weight: 600;
    opacity: 0;
    transform: translateY(50px);
    animation: none;
    transition: opacity 0.5s ease;
  }

  .about:hover + .aboutP {
    display: block;
    animation: slideIn 0.5s forwards;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .logo {
    background: url("https://github.com/SurajSG23/landing-page-SC/raw/main/src/assets/SC-logo.png") no-repeat center/contain;
    width: 180px;
    height: 70px;
    filter: drop-shadow(2px 2px 5px blue);
    cursor: pointer;
  }
  @media (max-width: 798px) {
    .aboutP {
      width: 97vw;
      top: 11vh;
    }
  }
`;
