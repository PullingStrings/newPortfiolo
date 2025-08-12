import styled from "styled-components";
import { Button } from "../ui/Button";

const Section = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-align: center;
`;

export default function ContactCTA() {
  return (
    <Section id="contact">
      <h2>Let’s Work Together</h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
        Whether you’re a recruiter, business, or creative collaborator, I’d love to connect and see how we can work together.
      </p>
      <Button
        href="mailto:titozwane28@gmail.com"
        style={{ background: "#fff", color: "#0070f3" }}
      >
        Contact Me
      </Button>
    </Section>
  );
}
