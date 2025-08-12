import styled, { keyframes } from "styled-components";
import { Button } from "../ui/Button";

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const TitleText = styled.h1`
  font-size: 5.5rem;
  margin-bottom: 0.5rem;
  font-weight: 900;
  color: white;
  text-shadow: -1px -1px 0 #000, 4px -2px 0 #000, 2px 1px 0 #000, 1px 1px 0 #000;
`;

const Hero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  padding: 2rem 5%;
  overflow: hidden;
  color: white;

  /* Animated background */
  background: linear-gradient(-45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    #ff8c00,
    #ff00ff
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h2 {
     font-size: 1.75rem;
     margin-bottom: 1rem;
   }
`;

const HeroImage = styled.div`
 width: 35vw;
 height: 35vw;
 max-width: 500px;
 max-height: 500px;
 min-width: 200px;
 min-height: 200px;
 background: rgba(255, 255, 255, 0.1);
 border-radius: 50%;
 z-index: 2;
 background-image: url('/profile-pic-animated.png'); /* Replace with your image */
 background-size: cover;
`;

export default function HeroSection() {
  return (
    <Hero>
      <HeroText>
       <TitleText>Sibusiso 'Tito' Zwane</TitleText>
        <h2>Creative Developer</h2>
        <p>Building experiences at the intersection of code, art, and music.</p>
        <div style={{ marginTop: "1.5rem" }}>
          <Button href="#projects">View My Work</Button>
          <Button href="#contact" $variant="secondary" style={{ marginLeft: "1rem" }}>
            Get in Touch
          </Button>
        </div>
      </HeroText>
      <HeroImage>{/* Optional profile image */}</HeroImage>
    </Hero>
  );
}
