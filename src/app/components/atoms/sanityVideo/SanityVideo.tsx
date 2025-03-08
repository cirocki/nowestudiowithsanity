"use client";
import ReactPlayer from "react-player";
import styles from "./video-styles.module.scss";
interface SanityVideoProps {
  url: string;
}

export default function SanityVideo({ url }: SanityVideoProps) {
  return (
    <div className={styles.player_wrapper}>
      <ReactPlayer
        className={styles.react_player}
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
}
