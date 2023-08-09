import React from 'react'
import styled from 'styled-components'
import VideoPreview from './VideoPreview'

const ColSection = styled.div`
    width: 100%;
    max-width: 382px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0px 0 96px 30px;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 10px 0 96px 30px;
      flex-wrap: wrap;
    }
`

const ColumnSectionSkills = ({ title, items }) => {
  return (
  <div>
  <h2 className="main-text px-[30px]">{title}</h2>
    <ColSection>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          | <h2 className="main-text main-text-small"> {item.title}</h2>
        </React.Fragment>
      ))}
    </ColSection>
  </div>
  )
}

export default ColumnSectionSkills


