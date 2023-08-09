import Image from 'next/image'
import Navbar from '@/component/NavBar'
import styled from 'styled-components';
import workData from '../../workData/work.json';
import { useState, useEffect } from 'react';



const Card = styled.div`
  height: 254px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all .3s;
  :hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }
`
const CardTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 254px;
  background-color: #1a1a1a;
  border-radius:;
  transition: all .2s;
  :hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`


export default function Projects() {
 const [isClient, setIsClient] = useState(false)

 useEffect(() => {
    setIsClient(true)
  }, [])


  return (
  <>
  <Navbar />
  {isClient && (
    <div className="grid sm:grid-cols-3 gap-4 p-8">
      {workData.map((item, index) => (
        <Card key={index}>
          <CardTwo
          className="rounded-lg shadow-md p-4 transition-transform duration-200 ease-in-out transform hover:scale-105"
          style={{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
          <div style={{
            background:'#0000008a',
            padding:'7px',
            borderRadius: '6px'
          }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-center">
            <h2 className="text-white">{item.title}</h2>
            <p className="text-white">{item.linkName}</p>
          </a>
          </div>

          </CardTwo>
        </Card>
      ))}
    </div>
  )}
  </>
  )
}
