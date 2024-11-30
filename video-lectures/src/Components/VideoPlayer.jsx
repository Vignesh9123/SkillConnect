import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styled from "styled-components";

export const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <MainContainer>
      <div data-vjs-player style={{ width: "60vw" }}>
        <div ref={videoRef} />
        <div class="checkbox-wrapper">
          <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
          <label class="terms-label" for="terms-checkbox-37">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              class="checkbox-svg"
            >
              <mask fill="white" id="path-1-inside-1_476_5-37">
                <rect height="200" width="200"></rect>
              </mask>
              <rect
                mask="url(#path-1-inside-1_476_5-37)"
                stroke-width="40"
                class="checkbox-box"
                height="200"
                width="200"
              ></rect>
              <path
                stroke-width="15"
                d="M52 111.018L76.9867 136L149 64"
                class="checkbox-tick"
              ></path>
            </svg>
            <span class="label-text">Completed</span>
          </label>
        </div>
      </div>
    </MainContainer>
  );
};

export default VideoPlayer;

const MainContainer = styled.div`
  display: flex;
  color: white;

  .checkbox-wrapper{
    display: flex;
    width: 150px;
    padding:10px 0;
    background: linear-gradient(135deg, #0f172a, #1e3a8a, #185df1, #117cff);
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    border: 2px solid #ffffff88;
    border-radius: 20px;
  }
  .checkbox-wrapper input[type="checkbox"] {
    display: none;
  }

  .checkbox-wrapper .terms-label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .checkbox-wrapper .terms-label .label-text {
    margin-left: 5px;
    font-size: large;
    font-weight: 600;
  }

  .checkbox-wrapper .checkbox-svg {
    width: 25px;
    height: 25px;
  }

  .checkbox-wrapper .checkbox-box {
    fill: rgba(207, 205, 205, 0.425);
    stroke: #ffffff;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    transition: stroke-dashoffset 0.6s ease-in;
  }

  .checkbox-wrapper .checkbox-tick {
    stroke: #ffffff;
    stroke-dasharray: 172;
    stroke-dashoffset: 172;
    transition: stroke-dashoffset 0.6s ease-in;
  }

  .checkbox-wrapper input[type="checkbox"]:checked + .terms-label .checkbox-box,
  .checkbox-wrapper
    input[type="checkbox"]:checked
    + .terms-label
    .checkbox-tick {
    stroke-dashoffset: 0;
  }
`;