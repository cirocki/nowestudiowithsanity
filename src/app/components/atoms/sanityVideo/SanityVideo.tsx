"use client";
import ReactPlayer from "react-player";

interface SanityVideoProps {
  url: string;
}

export default function SanityVideo({ url }: SanityVideoProps) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
}
