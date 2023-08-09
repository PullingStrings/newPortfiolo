import ColumnSection from "@/component/ColumnSection";
import ColumnSectionSkills from "@/component/ColumnSectionSkills";
import ColumnSectionExp from "@/component/ColumnSectionExp";
import styled from "styled-components";
import workData from "../../workData/work.json"
import skillsData from "../../workData/skills.json"
import experienceData from "../../workData/exp.json"



const Section = styled.section`
z-index: 1;
  position: relative;
  padding: 0px 0 96px 96px;
  width: calc(100vw - 96px - 7em);
  display: -webkit-box;
  display: flex;
  box-sizing: border-box;
  // min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0px 0 96px 0px;
    width: calc(100vw - 96px - 0em);
  }
`

const List = styled.ul`
  list-style: none;
  font-size: 10px;
`

const WorkAndAwards = () => {


  return (
    <Section>
        <ColumnSectionSkills title="Skills" items={skillsData} />
    </Section>
  );
}

export default WorkAndAwards;