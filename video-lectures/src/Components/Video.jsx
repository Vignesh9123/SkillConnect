import { useState, useEffect } from "react";

import "../App.css";
import VideoPlayer from "./VideoPlayer";
import { useRef } from "react";
import VideoHeader from "./VideoHeader";

function Video() {
  const playerRef = useRef(null);
  const [videoLink, setVideoLink] = useState(
    "https://res.cloudinary.com/dxygc9jz4/video/upload/sp_auto/v1732780155/dvozqbgqzmuel8laukay.m3u8"
  );

  const [videoFile, setVideoFile] = useState(null);
  const [folder, setFolder] = useState(null);
  const [files, setFiles] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [folderName, setFolderName] = useState(null);
  useEffect(() => {
    fetch("https://video-upload-poc.onrender.com/folders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      });
  }, []);

  const fetchFiles = (id) => {
    fetch(`https://video-upload-poc.onrender.com/files/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFiles(data);
      });
  };
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <VideoHeader/>
      {videoLink && (
        <>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3vh',
            padding:'10px',
            
          }}>
            <VideoPlayer
              options={videoPlayerOptions}
              onReady={handlePlayerReady}
              
            />
          </div>
        </>
      )}
    </>
  );
}

export default Video;