import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const PageWrapper = styled.section`
  padding: 6rem 5%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Timeline = styled.div`
  position: relative;
  margin: 2rem auto;
  padding-left: 2rem;
  max-width: 800px;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 3; /* keep the line above the card */
  }
`;

const TimelineItemWrap = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const Dot = styled.div`
  position: absolute;
  left: -19px;
  top: 0.5rem;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 5px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  z-index: 4; /* dot above everything */
`;

const Content = styled.div`
  position: relative;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  z-index: 1; /* card sits under the timeline line and dot */

  /* animation base state */
  opacity: 0;
  transform: translateX(-24px);
  transition:
    opacity 850ms ease,
    transform 850ms ease;

  /* reduced motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }

  /* when visible */
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  h3 {
    margin: 0 0 0.3rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h4 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

/* ---------- tiny in-view hook ---------- */
function useInView(options = { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // unobserve after first reveal
        obs.unobserve(el);
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

/* ---------- reusable item ---------- */
function ResumeItem({ role, company, period, bullets }) {
  const { ref, inView } = useInView();

  return (
    <TimelineItemWrap>
      <Dot />
      <Content ref={ref} className={inView ? "visible" : ""}>
        <h3>{role}</h3>
        <h4>{company} • {period}</h4>
        {Array.isArray(bullets) ? (
          <ul>
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        ) : (
          <p>{bullets}</p>
        )}
      </Content>
    </TimelineItemWrap>
  );
}

export default function Resume() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Cheil (Samsung Ltd), London, UK",
      period: "October 2020 - Present",
      bullets: [
        "Led frontend development for Samsung's UK site: merchandising strategies, campaign launches, and promotions.",
        "Spearheaded performance optimisations using data insights and user feedback to enhance UX.",
        "Built custom pages for flagship products (e.g., Galaxy Fold4) with Samsung’s in-house and SES teams."
      ]
    },
    {
      role: "Web Developer",
      company: "Four Communications, London, UK",
      period: "October 2018 - March 2020",
      bullets: [
        "Delivered sites and web apps for Estée Lauder Group, NHS, and The Booker Prize (HTML, CSS, PHP, JS).",
        "Led legacy platform updates with SEO + cloud hosting, cutting costs for smaller clients by ~50%."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed, Southern & Eastern Africa",
      period: "2015 – 2017",
      bullets: [
        "Designed and built sites for art galleries, music projects, and community radio stations.",
        "Integrated rich media with frontend frameworks to create interactive experiences."
      ]
    }
  ];

  const creative = [
    {
      role: "Creative Director",
      company: "Fuse Afrika Project, Johannesburg & Dar es Salaam",
      period: "2015 - 2016",
      bullets: [
        "Directed a collaborative music + art initiative with diverse artists.",
        "Built digital presence (interactive site, social) doubling event engagement."
      ]
    },
    {
      role: "Projects & Events Coordinator",
      company: "Nafasi Art Space, Dar es Salaam, Tanzania",
      period: "2014 - 2015",
      bullets: [
        "Produced exhibitions and visual art projects exploring identity, culture, and tech; showcased locally and online."
      ]
    }
  ];

  return (
    <PageWrapper>
      <h1>Resume</h1>
      <Timeline>
        {experiences.map((exp, i) => (
          <ResumeItem key={i} {...exp} />
        ))}
      </Timeline>

      <h1>Creative & Artistic Experience</h1>
      <Timeline>
        {creative.map((exp, i) => (
          <ResumeItem key={i} {...exp} />
        ))}
      </Timeline>
    </PageWrapper>
  );
}
