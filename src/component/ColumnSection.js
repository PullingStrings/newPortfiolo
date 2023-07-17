import React from 'react'
import styled from 'styled-components'

const ColSection = styled.div`
    width: 100%;
    max-width: 382px;
`

const ColumnSection = ({ title, items, linkName }) => {
  return (
 <ColSection>
  <dl className="list" style={{
    marginTop: '3.2em'
  }}>
    <h2 className="main-text ">{title}</h2>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <dt className="main-text main-text-small mt-5">{item.title}</dt>
        <dd className="list-item" style={{
          marginTop: '0.25em',
          marginBottom: '2em'
        }}>
          <a className="list-link underline" href={item.link}>{item.linkName}</a>
        </dd>
      </React.Fragment>
    ))}
  </dl>
 </ColSection>
 )
}

export default ColumnSection


