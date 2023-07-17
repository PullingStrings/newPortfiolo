import { useRef } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    width: 320px;
    height: 240px;
    overflow: hidden;
    position: relative;

    &:hover video {
        opacity: 1;
    }
`;

const StyledVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease;
`;

const VideoPreview = ({ videoSrc }) => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }

    return (
        <VideoContainer onMouseOver={playVideo} onMouseOut={pauseVideo}>
            <StyledVideo ref={videoRef} width="320" height="240" loop autoPlay>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </StyledVideo>
        </VideoContainer>
    );
}

export default VideoPreview;
