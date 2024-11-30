import React from "react";
import styled from "styled-components";
import { IoIosPlayCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import VideoHeader from "./VideoHeader";
const VideoLessonMainPage = () => {
  return (
    <>
    <VideoHeader/>
    <MainContainer>
      <div className="body">
        <div>
          <h2>Available Courses</h2>
        </div>
        <div className="course">
          <div className="cls-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoEJqEcRvH5wpoQ_aCe54kWDLf68kTvxTmfo47CGUPiuNObM5KOonaieZfoHgeZAhO7o&usqp=CAU"
              alt="React"
              width={270}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="text">
            <div className="title">
              <h3>INTRODUCTION TO REACT</h3>
            </div>
            <div className="disc">
              <p>Learn React From Scartch with hands-on projects</p>
            </div>
          </div>
          <div className="by" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
            <div class="heart-container" title="Like">
              <input type="checkbox" class="checkbox" id="Give-It-An-Id" />
              <div class="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  class="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
            <div>
              <i>By: Code with harry</i>
            </div>
          </div>
        </div>
        <div className="course">
          <div className="cls-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3S6F1raN9AuPrPxZ4iDLm-iRTwUGZD1EWA&s"
              alt="React"
              width={270}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="text">
            <div className="title">
              <h3>Advance Python Programming</h3>
            </div>
            <div className="disc">
              <p>Deep dive into Python advanced concepts and best practices</p>
            </div>
          </div>
          <div className="by" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
            <div class="heart-container" title="Like">
              <input type="checkbox" class="checkbox" id="Give-It-An-Id" />
              <div class="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  class="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
            <div>
              <i>By: Apna College</i>
            </div>
          </div>
        </div>
        <div className="course">
          <div className="cls-img">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQE4HlbOIpJlQA/article-cover_image-shrink_600_2000/0/1699214360888?e=2147483647&v=beta&t=VwhL0syvD4xOqpxuYfaQY6Ah4HP0oN8nUSsrkkYW3w4"
              alt="React"
              width={270}
              style={{
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
          <div className="text">
            <div className="title">
              <h3>INTRODUCTION TO WEB DEVELOPMENT</h3>
            </div>
            <div className="disc">
              <p>
                Learn HTML, CSS, and JavaScript from scratch to build responsive
                websites.
              </p>
            </div>
          </div>
          <div className="by" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
            <div class="heart-container" title="Like">
              <input type="checkbox" class="checkbox" id="Give-It-An-Id" />
              <div class="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  class="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
            <div>
              <i>By: Free CodeCamp</i>
            </div>
          </div>
        </div>
        <div className="course">
          <div className="cls-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTGzHILuCqG8illyo6ODfTMw-kXx3RGeIWg&s"
              alt="Python"
              width={270}
              style={{
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
          <div className="text">
            <div className="title">
              <h3>CPROGRAMMING FOR BEGINNERS</h3>
            </div>
            <div className="disc">
              <p>Master C programming and build real-world applications.</p>
            </div>
          </div>
          <div className="by" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
            <div class="heart-container" title="Like">
              <input type="checkbox" class="checkbox" id="Give-It-An-Id" />
              <div class="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  class="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  class="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  class="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
            <div>
              <i>By: Chai Aur Code</i>
            </div>
          </div>
        </div>
        <div>
          <h2>Watch Virtual Classes</h2>
        </div>
        <div className="direct">
          <Link to="/videoplayer " className="boxy">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iLN0baNtQt1Dlv-Eu8bwFw7QlFLVVIb4cg&s"
                alt=""
                width={230}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div
              className="title-boxy"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h2 style={{ marginRight: "10px", color: "white" }}>Python Libraries</h2>
              <button
                className="play-btn"
                style={{
                  height: "50px",
                  padding: "0px 0px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoIosPlayCircle style={{ fontSize: "40px" }} />
              </button>
            </div>
          </Link>
          <div className="boxy">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                alt=""
                width={230}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div
              className="title-boxy"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h2 style={{ marginRight: "10px" }}>DOM Manipulation</h2>
              <button
                className="play-btn"
                style={{
                  height: "50px",
                  padding: "0px 0px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoIosPlayCircle style={{ fontSize: "40px" }} />
              </button>
            </div>
          </div>
          <div className="boxy">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3291/3291670.png"
                alt=""
                width={230}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div
              className="title-boxy"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h2 style={{ marginRight: "10px" }}>Forms</h2>
              <button
                className="play-btn"
                style={{
                  height: "50px",
                  padding: "0px 0px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoIosPlayCircle style={{ fontSize: "40px" }} />
              </button>
            </div>
          </div>
          <div className="boxy">
            <div>
              <img
                src="https://i.pinimg.com/564x/e3/68/6a/e3686af5908e06e5278158b626207d5f.jpg"
                alt=""
                width={230}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div
              className="title-boxy"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h2 style={{ marginRight: "10px" }}>Hook States</h2>
              <button
                className="play-btn"
                style={{
                  height: "50px",
                  padding: "0px 0px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoIosPlayCircle style={{ fontSize: "40px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
    </>

  );
};

export default VideoLessonMainPage;

const MainContainer = styled.div`
  width: 100%;
  min-height: 78.2vh;
  margin: 1px 0;
  display: flex;
  flex-direction: column;

  .heart-container {
    --heart-color: rgb(255, 0, 72);
    position: relative;
    width: 30px;
    height: 30px;
    transition: 0.3s;
  }

  .heart-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .heart-container .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heart-container .svg-outline,
  .heart-container .svg-filled {
    fill: var(--heart-color);
    position: absolute;
  }

  .heart-container .svg-filled {
    animation: keyframes-svg-filled 1s;
    display: none;
  }

  .heart-container .svg-celebrate {
    position: absolute;
    animation: keyframes-svg-celebrate 0.5s;
    animation-fill-mode: forwards;
    display: none;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }

  .heart-container .checkbox:checked ~ .svg-container .svg-filled {
    display: block;
  }

  .heart-container .checkbox:checked ~ .svg-container .svg-celebrate {
    display: block;
  }

  @keyframes keyframes-svg-filled {
    0% {
      transform: scale(0);
    }

    25% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1);
      filter: brightness(1.5);
    }
  }

  @keyframes keyframes-svg-celebrate {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
      filter: brightness(1.5);
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
      display: none;
    }
  }
  .body {
    position: relative;
    width: 98vw;
    min-height: 76vh;
    display: flex;
    flex-direction: column;
    margin: 1vh auto 0 auto;
    justify-content: center;
    align-items: center;
    backdrop-filter: grayscale(30%);
    gap: 20px;
    padding: 10px 0;
    border: 2px solid blue;
    border-radius: 20px;
  }
  .cls-img {
    display: flex;
    left: 10px;
    top: 5px;
    position: absolute;
  }
  .course {
    width: 90%;
    height: 30vh;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 10px blue;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 2px 2px 1px blue;
    }
  }
  .text {
    bottom: 1px;
    height: 60px;
    position: absolute;
    overflow-y: auto;
    padding: 0 10px;
  }
  .by {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .direct {
    width: 90%;
    height: auto;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .boxy {
    width: 300px;
    height: 300px;
    border: 2px solid blue;
    background: linear-gradient(#0000ff6e 50%, #00000090);
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 10px white;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 1px 1px 5px white;
    }
  }
  @media (max-width: 650px) {
    .by {
      display: none;
    }
  }
`;