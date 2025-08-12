import styled from "styled-components";
import { Button } from "../ui/Button";

const Section = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 500px;
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 280px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  background-image: url('/profile-pic-animated.png'); /* Replace with your image */
  background-size: cover;
`;

export default function AboutSection() {
  return (
    <Section id="about">
      <ImageWrapper>{/* Replace with personal image */}</ImageWrapper>
      <TextContent>
        <h2>About Me</h2>
        <p>
          I’m Sibusiso "Tito" Zwane — a Creative Developer passionate about
          blending technology, design, and art to craft meaningful digital
          experiences. With over a decade of experience, I’ve worked on
          projects for leading brands and creative spaces alike.
        </p>
        <Button href="/resume" style={{ marginTop: "1.5rem" }}>
          View My Resume
        </Button>
      </TextContent>
    </Section>
  );
}
