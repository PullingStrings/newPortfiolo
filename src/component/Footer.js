import React, { useState } from 'react'
import ResumePopup from './ResumePopUp'

const Footer = () => {
  const [showResume, setShowResume] = useState(false)

  const handleResumeClick = () => {
    setShowResume(true)
  }
  const handleCloseResumePopup = () => {
    setShowResume(false)
  }
  return (
    <footer className="fixed right-12 bottom-12 flex flex-col items-end text-white">
      <a onClick={handleResumeClick} href="#">
        Resume
      </a>
      {showResume && (
        <ResumePopup
          url="https://codeberry.net/demo/comet/assets/resume.pdf"
          onClose={handleCloseResumePopup}
        />
      )}
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
    </footer>

  )
}

export default Footer
