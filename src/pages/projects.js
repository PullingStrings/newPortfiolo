import Image from 'next/image'
import Navbar from '@/component/NavBar'
import styled from 'styled-components';

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
const work = [
  { title: "Samsung", link: "https://www.samsung.com/uk/smartphones/galaxy-z-foldable/", linkName: "Galaxy Z Foldable"},
  { title: "Samsung", link: "https://www.samsung.com/uk/smartphones/galaxy-s23/purchase/", linkName: "Galaxy S23"},
  { title: "Samsung", link: "https://www.samsung.com/uk/smartphones/galaxy-z-fold4/purchase/", linkName: "Galaxy Z Fold4"},
  { title: "Samsung", link: "https://www.samsung.com/uk/smartphones/galaxy-s22/purchase/", linkName: "Galaxy S22"},
  { title: "Samsung", link: "https://www.samsung.com/uk/trade-in/", linkName: "Trade In Tool"},
  { title: "Samsung", link: "https://www.samsung.com/uk/mobile/galaxygifts/", linkName: "Galaxy Gifts"  },
  { title: "Samsung", link: "https://www.samsung.com/uk/laptop-buying-guide/", linkName: "Laptop Buying Guide"},
  { title: "Samsung", link: "https://www.samsung.com/uk/pay-monthly-contract/", linkName: "Pay Monthly Contract"},
  { title: "Samsung", link: "https://www.samsung.com/uk/students-offers/", linkName: "Students Offers"},
  { title: "Vingt Paris", link: "https://vingtparis.com/", linkName: "Vingt Paris"},
  { title: "IOPC", link: "https://www.policeconduct.gov.uk/", linkName: "Independent Office for Police Conduct"},
  { title: "Nafasi", link: "https://www.nafasiartspace.org/", linkName: "Nafasi Arts Space"},
  { title: "Care", link: "https://www.care.ca/", linkName: "Care International"},
];


  return (
  <>
  <Navbar />
    <div className="grid grid-cols-3 gap-4 p-8">

      {work.map((item, index) => (
        <Card key={index}>

          <CardTwo
          className="rounded-lg shadow-md p-4 transition-transform duration-200 ease-in-out transform hover:scale-105"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-center">
            <h2 className="text-white">{item.title}</h2>
            <p className="text-white">{item.linkName}</p>
          </a>
          </CardTwo>
        </Card>
      ))}
    </div>
  </>
  )
}
