import React from 'react'
import styled from 'styled-components'

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
  min-height: 100vh;
`

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

const BioSection = () => {
  return (
   <Section>
      <Figure/>
      <p className="bio text-white text-lg md:text-2xl font-light">
       I&#39;m a front-end developer with over a decade of experience crafting digital solutions in tech-driven environments. Specializing in React, TypeScript, HTML/CSS, and JavaScript, I&#39;ve delivered impactful results to clients across diverse sectors. Known for my creative approach to troubleshooting, I bring a unique blend of analytical prowess and artistic intuition to the tech landscape.
      </p>
    </Section>
  )
}

export default BioSection
