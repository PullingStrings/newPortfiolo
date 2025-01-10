'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import SharedLayout from '@/app/components/SharedLayout';
import projectsData from '@/data/projects.json';
import audioData from '@/data/audioData.json';

export default function ViewPage() {
  const { id } = useParams();
  const router = useRouter();
  const [bgImage, setBgImage] = useState('/happyme.jpg');
  const [content, setContent] = useState(null);
  const [projectMeta, setProjectMeta] = useState(null);

  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: 'https://github.com/your-repo', label: 'Github' },
    { href: 'mailto:contact@yourdomain.com', label: 'Contact' },
  ];

  // Load audio metadata for the current project
  useEffect(() => {
    const metadata = audioData[id] || null;
    setProjectMeta(metadata);
  }, [id]);

  // Load project data (background and content)
  useEffect(() => {
    const project = projectsData[id];
    if (project) {
      setBgImage(project.bgImage || '/happyme.jpg');
      setContent(project.content || '');
    } else {
      setBgImage('/happyme.jpg');
      setContent('');
    }
  }, [id]);

  // Prepare navigation logic
  const projectList = Object.keys(projectsData);
  const currentIndex = projectList.indexOf(id);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < projectList.length) {
      router.push(`/view/${projectList[nextIndex]}`);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      router.push(`/view/${projectList[prevIndex]}`);
    }
  };

  return (
    <SharedLayout
      bgImage={projectMeta?.coverImage || bgImage}
      menuLinks={menuLinks}
      content={content}
      audioSrc={projectMeta?.audioSrc || '/audio/TownshipWinds.mp3'}
    >
      {/* Navigation Buttons */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button onClick={handlePrev} disabled={currentIndex <= 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={currentIndex === -1 || currentIndex >= projectList.length - 1}>
          Next
        </button>
      </div> */}
    </SharedLayout>
  );
}
