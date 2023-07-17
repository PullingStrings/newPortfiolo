import React from 'react'
import styled from 'styled-components'
import VideoPreview from './VideoPreview'

const ColSection = styled.div`
    width: 100%;
    max-width: 382px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px 0px
`

const ColumnSectionSkills = ({ title, items }) => {
  return (
  <div>
  <h2 className="main-text ">{title}</h2>
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


