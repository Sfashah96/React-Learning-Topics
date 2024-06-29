import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from './Video';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './VideoList.css'; // Add transitions styles

const VideoList = ({ filter }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then(response => {
                setVideos(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <div className="video-list">
            <TransitionGroup>
                {filteredVideos.map(video => (
                    <CSSTransition
                        key={video.id}
                        timeout={500}
                        classNames="video"
                    >
                        <Video key={video.id} video={video} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default VideoList;
