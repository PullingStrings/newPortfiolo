import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.colors.lightGray};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Skill = styled.span`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    cursor: default;
  }
`;

export default function SkillsSection() {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <SkillsGrid>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>Vite</Skill>
        <Skill>Styled Components</Skill>
        <Skill>Node.js</Skill>
        <Skill>UX/UI Design</Skill>
        <Skill>Git & GitHub</Skill>
        <Skill>Typescript</Skill>
      </SkillsGrid>
    </Section>
  );
}
