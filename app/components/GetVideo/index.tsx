import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000/video'); // Replace with your Flask server URL

export default function GetVideo() {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('video_frame', (frame) => {
      // Handle incoming video frame data
      // Update the videoSrc state with the frame data
      setVideoSrc(frame);
    });

    return () => {
      // Clean up WebSocket connection when component unmounts
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Video Stream</h1>
      {videoSrc && (
        <video
          src={`data:image/jpeg;base64,${videoSrc}`} // Assuming video frames are base64 encoded
          autoPlay
          controls
        ></video>
      )}
    </div>
  );
}
