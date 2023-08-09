import styled from "styled-components"

const Card = styled.div`
  position: relative;
  margin: 30px;
  :before {
    content: '';
    display: inline-block;
    position: absolute;
    background-color: #000;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    top: 0px;
    left: -12px;
    border: 5px solid;
    z-index: 2;
  }
`

const Title = styled.div`
  font-weight: bold;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 5vh;
`

const Body = styled.div`
  border-left: 2px solid #E6E9ED;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

const TimelineCard = ({
  title,
  at,
  period,
  description,
  bulletPoint,
}) => {
  return (
    <Card>
      <Title className="text-[12px] sm:text-[20px]">
        <h5>
          {title} <span>{at}</span>
        </h5>
      </Title>
      <Body className="flex flex-col h-full justify-center">
        <small>{period}</small>
        <p className="text-[11px] sm:text-[15px] py-3">{description}</p>
        <ul className="list-disc pl-5 text-[10px] sm:text-[15px]">
          {bulletPoint.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Body>
    </Card>
  )
}

export default TimelineCard
