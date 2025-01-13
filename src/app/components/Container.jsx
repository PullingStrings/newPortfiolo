'use client'
import React from 'react';
import styled from 'styled-components';

const ContainerSection = styled.div`
  background-image: url(${props => props.$bgImage || '/happyme.jpg'});
  box-shadow: inset 0 0 0 1000px rgba(0 0 0 / 65%);
  background-size: cover;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: center;

  @media (max-width: 768px) {
    background-position: bottom;
    justify-content: space-around;
  }
`;

export default function Container({ bgImage, children }) {

 return (
  <ContainerSection $bgImage={bgImage}>
      {children}
    </ContainerSection>
 )

}