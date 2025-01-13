// src/app/components/SharedLayout.jsx
'use client';
import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Content from './ContentSection';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Player from './Player';

const PlayerPanelsSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.nav`
 width: 100%;
 background: #000;
 padding: 5px;
 a {
  margin-left: 3px;
 }
`

export default function SharedLayout({ bgImage, menuLinks, content, audioSrc, children }) {
  return (
    <>
    <Menu>
    {menuLinks.map(({ href, label }, idx) => (
      <a key={idx} href={href}>{label}</a>
    ))}
  </Menu>
    <Container bgImage={bgImage}>

      {content && <Content content={content} />}
      <div className='player-section'>
        <PlayerPanelsSection>
          <LeftPanel />
          <RightPanel />
        </PlayerPanelsSection>
        <Player audioSrc={audioSrc} />
      </div>
      {children}
    </Container>
    </>

  );
}
