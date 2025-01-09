'use client'
import React, { Children } from 'react';
import styled from 'styled-components';

const ContentSection = styled.section`
display: flex;
width: 50%;
align-self: flex-end;

@media (max-width: 768px) {
      width: 100%;
      padding: 5px;
}

`

export default function Content({ content }) {
 return (
  <ContentSection>
   <div dangerouslySetInnerHTML={{ __html: content }} />
  </ContentSection>
 )
}