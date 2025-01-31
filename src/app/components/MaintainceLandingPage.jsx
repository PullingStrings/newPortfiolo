"use client";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
`;

const Content = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  color: #4b5563;
`;

const LinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MaintenanceLandingPage = () => {
  return (
    <Container>
      <Content>
        <Heading>Under Development</Heading>
        <Paragraph>Our website is currently under development. Please check back soon!</Paragraph>
        <LinksContainer>
          <StyledLink href="https://www.linkedin.com/in/titozwane/" target="_blank" rel="noopener noreferrer">
             Pop over to my LinkedIn in the meantime
          </StyledLink>
          <StyledLink href="/Sibusiso_Tito_Zwane_Resume.pdf" download>
             Download Resume
          </StyledLink>
        </LinksContainer>
      </Content>
    </Container>
  );
};

export default MaintenanceLandingPage;