import React, { useState, useEffect } from 'react'
import ResumePopup from './ResumePopUp'
import Link from 'next/link'
import styled from 'styled-components'

const FooterDiv = styled.footer`
  display: flex;
  right: 3rem;
  bottom: 3rem;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  padding: 5px;

  @media (max-width: 768px) {
    background: #fff;
    color: #000;
    border-radius: 5px;
  }
`



const Footer = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <>
     {isClient && (
      <FooterDiv>
      <Link href="/resume">
        Resume
      </Link>
      <a className="footer-links link-facebook hover:border-yellow-500" href="https://github.com/PullingStrings">
        GitHub
      </a>
      <a className="footer-links link-instagram hover:border-yellow-500" href="https://www.linkedin.com/in/titozwane/">
        LinkedIn
      </a>
      <a  href="mailto:titozwane28@gmail.com">
        Email
      </a>

      <div className="scrunch" aria-hidden="true"></div>
    </FooterDiv>
    )}
    </>
  )
}

export default Footer
