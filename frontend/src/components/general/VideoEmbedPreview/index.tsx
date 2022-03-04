import React, { CSSProperties } from "react";
import getVideoId from "get-video-id";

const VideoEmbedPreview: React.FC<{ url: string }> = ({ url }) => {
  const responsiveVideoContainer: CSSProperties = {
    padding: "56.25% 0 0 0",
    position: "relative",
  };

  const responsiveVideoPlayer: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  if (url) {
    const id = getVideoId(url).id;
    const service = getVideoId(url).service;

    const vimeoEmbedUrl = "https://player.vimeo.com/video/" + id;
    const youtubeEmbedUrl = "https://www.youtube.com/embed/" + id;

    if (!id) {
      return <div>Missing YouTube or Vimeo URL</div>;
    }

    if (service === "vimeo") {
      return (
        <div style={responsiveVideoContainer}>
          <iframe
            src={vimeoEmbedUrl}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      );
    }

    if (service === "youtube") {
      return (
        <div style={responsiveVideoContainer}>
          <iframe
            src={youtubeEmbedUrl}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      );
    }
  }

  return <div></div>;
};

export default VideoEmbedPreview;
