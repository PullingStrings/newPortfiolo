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
        I’m a web developer that  loves working together with  creative and digital teams and all-round nice guy. I like  other things besides tech 😊  Open and available for  opportunities in London
      </p>
    </Section>
  )
}

export default BioSection
