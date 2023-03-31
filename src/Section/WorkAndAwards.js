import ColumnSection from "@/component/ColumnSection";
import styled from "styled-components";

const Section = styled.section`
z-index: 1;
  position: relative;
  padding: 96px 0 96px 96px;
  width: calc(100vw - 96px - 7em);
  display: -webkit-box;
  display: flex;
  box-sizing: border-box;
  min-height: 100vh;
`

const WorkAndAwards = () => {
  const work = [
    { title: "AIGA",     link: "aiga.org" },
    { title: "Apple",    link: "apple.com" },
    { title: "Google",   link: "google.com"},
    { title: "Microsoft",link: "microsoft.com"},
    { title: "Mashable", link: "mashable.com"},
    { title: "Vox",      link: "vox.com"},
    { title: "Nike",     link: "nike.com"},
    { title: "Polygon",  link: "polygon.com"},
    { title: "The North Face",link: "thenorthface.com"},
  ];

  const awards = [
    { title: "AIGA",      link: "aiga.org"},
    { title: "Apple",     link: "apple.com"},
    { title: "Google",    link: "google.com"},
    { title: "Microsoft", link: "microsoft.com"},
    { title: "Mashable",  link: "mashable.com"},
    { title: "Vox",       link: "vox.com"},
    { title: "Nike",      link: "nike.com"},
    { title: "Polygon",   link: "polygon.com"},
    { title: "The North Face",  link: "thenorthface.com"},
  ];

  return (
    <Section>
        <ColumnSection title="Work" items={work} />
        <ColumnSection title="Awards" items={awards} />
    </Section>
  );
}

export default WorkAndAwards;