// src/app/view/[id]/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import SharedLayout from '@/app/components/SharedLayout';
import projectsData from '@/data/projects.json'


export default function ViewPage() {
  const { id } = useParams();
  const [bgImage, setBgImage] = useState('/happyme.jpg');
  const [content, setContent] = useState(null);
  const [audioSrc, setAudioSrc] = useState('/audio/TownshipWinds.wav')

  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: 'https://github.com/your-repo', label: 'Github' },
    { href: 'mailto:contact@yourdomain.com', label: 'Contact' },
  ];

  useEffect(() => {
  const project = projectsData[id];
  if (project) {
    setBgImage(project.bgImage || '/happyme.jpg');
    setContent(project.content || '');
    setAudioSrc(project.audioSrc || '/default-audio.mp3');
  } else {
    setBgImage('/happyme.jpg');
    setContent('');
    setAudioSrc('/audio/TownshipWinds.wav');
  }
}, [id]);

  return (
    <SharedLayout
      bgImage={bgImage}
      menuLinks={menuLinks}
      content={content}
      audioSrc={audioSrc}
    >
      {/* Additional dynamic content if needed */}
    </SharedLayout>
  );
}
