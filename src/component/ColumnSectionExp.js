import React from 'react'
import styled from 'styled-components'

const ColSection = styled.div`
    width: 100%;
    max-width: 382px;
`

const ColumnSectionExp = ({ title, items, experience }) => {
  return (
 <ColSection>
  <dl className="list" style={{
    marginTop: '3.2em'
  }}>
    <h2 className="main-text ">{title}</h2>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <dt className="main-text main-text-small mt-5">{item.title}</dt>
         <div>{item.experience}</div>
      </React.Fragment>

    ))}
  </dl>
 </ColSection>
 )
}

export default ColumnSectionExp