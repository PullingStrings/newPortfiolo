'use client';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000c7;
  border-radius: 10px;
  margin: 5px;

  @media (max-width: 768px) {

  }
`;

const PlayerSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
      justify-content: space-between;
      padding: 10px 14px;
      margin: 0px;
    }

  img.speakerIcon {
     @media (max-width: 768px) {
      display: none;
    }
  }
`
const PlayPauseButton = styled.button`
  position: relative;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 20px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0px 0px 10px 0px;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  img.playBtn {
    @media (max-width: 768px) {
        height: 20px;
      }
  }

  img.pauseBtn {
    @media (max-width: 768px) {
        height: 20px;
      }
  }

  @media (max-width: 768px) {
      margin: 0px;
      padding: 20px;
    }
`;
const Slider = styled.input.attrs({ type: 'range'})`
   /*********** Baseline, reset styles ***********/
  -webkit-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  padding: 0px 5px;
  width: 100%;

  /* Removes default focus */
  &:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  /* slider track */
  &::-webkit-slider-runnable-track {
    background-color: #fdb51c;
    border-radius: 30px;
    height: 2.5px;
  }

  /* slider thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -2.25px; /* Centers thumb on the track */
    background-color: #fff;
    border-radius: 0.5rem;
    height: 7px;
    width: 7px;
  }

  &:focus::-webkit-slider-thumb {
    outline: 3px solid #000000;
    outline-offset: 0.125rem;
  }

  /*********** Firefox styles ***********/
  /* slider track */
  &::-moz-range-track {
    background-color: #fdb51c;
    border-radius: 30px;
    height: 2.5px;
  }

  /* slider thumb */
  &::-moz-range-thumb {
    background-color: #fff;
    border: none; /* Removes extra border that FF applies */
    border-radius: 0.5rem;
    height: 7px;
    width: 7px;
  }

  &:focus::-moz-range-thumb {
    outline: 3px solid #000000;
    outline-offset: 0.125rem;
  }

`;
const SlideSeekerContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 15px;
`
const VolumeContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
      margin-right: 1.5rem;
    }
`

export default function Player({ audioSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  // Setup audio events for metadata and time updates
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      console.error('Audio element not found')
      return;
    }

    const onLoadedMetadata = () => {
      setDuration(audioEl.duration);
    };
    audioEl.addEventListener('loadedmetadata', onLoadedMetadata);

    if (audioEl.readyState >= 1) {
      onLoadedMetadata()
    }

    const onTimeUpdate = () => {
      console.log('Time update loaded:', audioEl.currentTime)
      setCurrentTime(audioEl.currentTime);
    };


    audioEl.addEventListener('timeupdate', onTimeUpdate);

    return () => {
      audioEl.removeEventListener('loadedmetadata', onLoadedMetadata);
      audioEl.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);


  function handleTogglePlayPause() {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (audioEl.paused) {
      audioEl.play();
      setIsPlaying(true);
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }

  }

  function handleSeekChange(event) {
    const newTime = parseFloat(event.target.value);
    const audioEl = audioRef.current
    if (audioEl && !isNaN(audioRef.current.duration)) {
      audioEl.currentTime = newTime;
      // audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }

  function handleVolumeChange(event) {
    const newVolume = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  }

  function toggleMute() {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  }

  function formatTime(time) {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return (
    <ControlContainer>
      <audio
        preload='auto'
        ref={audioRef}
        src={audioSrc}
        style={{ display: 'block ' }}
      />

      <SlideSeekerContainer>
        <span>{formatTime(currentTime)}</span>
        <Slider
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onInput={handleSeekChange}
        />
        <span>{formatTime(duration)}</span>
      </SlideSeekerContainer>

      <PlayerSection>

        <Image className='speakerIcon' src='/Speaker.svg' alt='thumbs up svg'
          width={20}
          height={20}
        />

        <PlayPauseButton onClick={handleTogglePlayPause}>
          {isPlaying ?
          <Image
            className='pauseBtn'
            src='/pause.svg'
            alt='pause button'
            width={23}
            height={23}
            />
             :
          <Image
            className='playBtn'
            src='/play.svg'
            alt='play button'
            width={30}
            height={30}
            />}
        </PlayPauseButton>

      <VolumeContainer>
        <button onClick={toggleMute} style={{
          border: 'none',
          background: 'transparent'
        }}>
          {isMuted ?
          <Image
            src='/mute.svg'
            alt='mute image'
            width={15}
            height={15}
            />
          :
          <Image
            src='/unmute.svg'
            alt='unmute image'
            width={15}
            height={15}
            />
          }
        </button>
        <Slider
          className='volume'
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            marginBottom: '4px'
          }}
        />
      </VolumeContainer>
      </PlayerSection>
    </ControlContainer>
  );
}
