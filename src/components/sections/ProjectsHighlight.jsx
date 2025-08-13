// src/components/sections/ProjectsHighlight.jsx
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.colors.lightGray};
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 0.4s ease forwards;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`;

const Tag = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  margin-bottom: 0.8rem;
`;

export default function ProjectsHighlight() {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <Section id="projects">
      <h2>Featured Projects</h2>
      <ProjectsGrid>
        {projects.slice(0, visibleCount).map((proj, i) => (
          <ProjectCard key={i}>
            <Tag>{proj.type === "github" ? "From GitHub" : "Client Work"}</Tag>{" "}
            <Tag>{proj.visibility}</Tag>
            <h3>{proj.name}</h3>
            <p>{proj.description || "No description available"}</p>
            {proj.url && (
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                View Project on Github →
              </a>
            )}
            <br/>
            <br/>
            {proj.homepage && (
              <a href={proj.homepage} target="_blank" rel="noopener noreferrer">
                View Live Demo →
              </a>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {visibleCount < projects.length && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button as="button" onClick={showMore}>
            Show More
          </Button>
        </div>
      )}
    </Section>
  );
}
