

import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Figure = styled.figure`
  background-image: url('https://codeberry.net/demo/comet/assets/images/logo.svg');
  background-position: top left, top left;
  background-repeat: no-repeat;
  background-size: auto, auto 100%;
  width: 42px;
  height: 50px;
  padding: 0;
  margin: 0;
`

const Section = styled.section`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  padding: 96px 0 96px 96px;
  width: calc(100vw - 96px - 7em);
  display: -webkit-box;
  display: flex;
  box-sizing: border-box;
  min-height: 65vh;

  @media (max-width: 768px) {
    padding: 0px 0 96px 30px;
    width: calc(100vw - 96px - 0em);
  }
`

const TypingText = styled.pre`
  white-space: pre-wrap;
  line-height: 1.5;
  font-family: monospace;
  font-size: 18px;
`;

    const bio = [
    "I'm a front-end developer with over a decade of experience crafting digital solutions in tech-driven environments. Specializing in React, TypeScript, HTML/CSS, and JavaScript.",
    "I've delivered impactful results to clients across diverse sectors.",
    "Known for my creative approach to troubleshooting, I bring a unique blend of analytical prowess and artistic intuition to the tech landscape."
  ];

const BioSection = () => {

  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isClient, setIsClient] = useState(false)


  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentText((prev) => prev + bio[line][char]);
      if (char < bio[line].length - 1) {
        setChar((prev) => prev + 1);
      } else if (line < bio.length - 1) {
        setChar(0);
        setLine((prev) => prev + 1);
        setCurrentText((prev) => prev + "\n");
      }

      if (line === bio.length - 1 && char === bio[line].length - 1) {
        clearInterval(timer);
      }
    }, 30);
    return () => {
      clearInterval(timer);
    };
  }, [line, char]);

  return (
  <>
    {isClient && (
    <Section>
      <Figure/>
      <TypingText>{currentText}</TypingText>
    </Section>
    )}
  </>
  );
};

export default BioSection;

