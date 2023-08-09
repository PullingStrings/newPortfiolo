import Navbar from "@/component/NavBar";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height:100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`

const Section = styled.div`
 background-color: #fff;
 padding: 30px 10px;
 border-radius: 10px;
 color: #000;
 text-align: left;
`

export default function Contact() {
 return (
  <>
    <Navbar/>
    <Container>
     <Section>
      <p>GitHub</p><a className="footer-links link-facebook hover:border-yellow-500" href="https://github.com/PullingStrings">https://github.com/PullingStrings</a>
        <p>LinkedIn</p><a className="footer-links link-instagram hover:border-yellow-500" href="https://www.linkedin.com/in/titozwane/">https://www.linkedin.com/in/titozwane/</a>
       <p>Email:</p><a  href="mailto:titozwane28@gmail.com">titozwane28@gmail.com</a>
     </Section>

    </Container>
  </>


 )
}