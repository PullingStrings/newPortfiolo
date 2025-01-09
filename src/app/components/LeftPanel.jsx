'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const Panel = styled.div`
  display: flex;
  align-items: center;


  img {
    padding: 5px;
    border-radius: 15px;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;

    }
  }
`;

const TitleDescriptionContainer = styled.div`
  padding: 5px;
  p {
  @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  h1 {
  @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`

const projects = [
  {
    slug: 'samsung-flagship-project',
    image: '/FlagshipSamsung.png',
    title: 'Samsung Flagship Project',
    desc: 'This is where the desc will sit'
  },
  {
    slug: 'samsung-galaxy-gifts-project',
    image: '/GalaxyGifts.png',
    title: 'Samsung Galaxy Gifts Project',
    desc: 'This is where the desc will sit'
  },
  // ... add more projects as needed
];

export default function LeftPanel() {
  const { id } = useParams();  // Retrieves the dynamic segment from the URL, e.g., 'project-alpha'

  // Find the project that matches the current slug
  const project = projects.find((proj) => proj.slug === id);

  // If no matching project is found (e.g., on the home page '/'), you can handle it gracefully
  if (!project) {
    return (
      <Panel>
        <Image
          src={'/happyme.jpg'}
          alt={'happy me'}
          width={100}
          height={100}
          priority={true}
          style={{
              padding: '5px',
              borderRadius: '15px',
              objectFit: 'cover'
          }}
        />
      </Panel>
    );
  }

  return (
    <Panel>
      <Image
        src={project.image}
        alt={project.slug}
        width={100}
        height={100}
        priority={true}
      />
      <TitleDescriptionContainer>
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
      </TitleDescriptionContainer>
    </Panel>
  );
}
