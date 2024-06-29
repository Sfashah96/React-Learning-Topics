import React from 'react';

const Video = ({ video }) => {
    return (
        <div className="video-item">
            <img src={video.thumbnailUrl} alt={video.title} />
            <h3>{video.title}</h3>
        </div>
    );
};

export default Video;
