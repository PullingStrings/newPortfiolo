import Navbar from '@/component/NavBar'
import TimelineCard from '@/component/TimelineCard'
import styled from 'styled-components';
import { useState, useEffect } from 'react';


const Timeline = styled.div`
  // Your timeline styles here
`;
const experiences = [
  {
    title: "Frontend Developer",
    at: "Cheil (Samsung Ltd)",
    period: "Oct 2020 - present",
    description: "I currently work with multiple clients on different work streams for Samsung. Within these work streams, I design, build and implement merchandising strategies for Samsung’s flagship pages, campaigns, launches, and promotions to drive sales and improve customer engagement. I also manage optimisation requests from support divisions to improve the overall performance and user experience of Samsung’s online platforms",
    bulletPoint: [
      "Enhance user experience and boost performance of Samsung’s online platforms through targeted optimisation strategies, leading to a significant increase in customer engagement and sales.",
      "Develop and test potential online and digital solutions for business-oriented strategies as well as code and develop custom full pages for Samsung's flagship smartphones.",
      "Develop tools and features that streamline the management of Samsung UK’s repair and support services, improving efficiency and customer satisfaction."

    ]
  },
  {
    title: "Frontend Developer",
    at: "Freelance",
    period: "May 2020 - Oct 2020",
    description: "Working with multiple clients to create and build their online businesses and organisations.",
     bulletPoint: [
      "Building and exporting legacy PHP websites to modern content management systems.",
      "Manage optimisation requests from support divisions to improve the overall performance and user experience of Samsung’s online platforms",
      "Responsible for migrating MySQL databases and creating new responsive front-end interfaces.",
      "Assist in managing website hosting including liaising with support remote teams to improve site speeds.",
      "Designing and developing UI to fit business brand identity."

    ]
  },
  {
    title: "Web Developer",
    at: "Four Communications",
    period: "Oct 2018 - Mar 2020",
    description: "Four is one of the leading independent integrated communications agencies in the UK and the Middle East. As a web developer:",
     bulletPoint: [
      "Built bespoke client websites, databases, and web applications for clients such as the Estèe Lauder Group, NHS, the Booker Prize, and the Home Office.",
      "Utilized HTML/CSS, JavaScript, PHP, JQuery, React, and TypeScript to produce interactive and database-driven sites- Deployed and maintained varied Cloud services including AWS, Google Cloud, and DigitalOcean",
      "Provided capacity building on built systems to enable easy use and maintenance by account teams, and contributed to digital strategy and technical build sessions",
      "Led client-facing technical development and guidance for solutions and products with suppliers and colleagues, and provided creative guidance to business pitches"

    ]
  },
  {
    title: "Junior Software developer",
    at: "Eventogy",
    period: "Feb 2018 - Jun 2018",
    description: "",
     bulletPoint: [
      "Built a secure, cloud-based platform for corporate conferences and events management, aimed specifically at professional, legal, and finance industries",
      "Utilized HTML5, AngularJS, Express, Node.js, MongoDB, and Mongoose to build a scalable and audit-compliant platform for events executives"
    ]
  },
  {
    title: "Web developer",
    at: "General Assembly",
    period: "Jul 2017 - Nov 2017",
    description: "An intensive three-month full-time programme, teaching the fundamentals of Web Development through practical application delivered by industry experts. In the three months, our responsibilities and assignments were to create code and deploy 4 web apps ",
     bulletPoint: [
      "Completed an intensive three-month full-time program in Full Stack Web Development",
      "Built four web apps utilizing technologies such as ReactJS, Express, Node.js, AngularJS, MongoDB, and Mongoose"
    ]
  },
];

export default function Resume() {
  const [isClient, setIsClient] = useState(false)
   useEffect(() => {
     setIsClient(true)
   },[])
 return (
  <>
  <Navbar />
  {isClient && (
  <Timeline>
      {experiences.map((exp, index) => (
        <TimelineCard key={index} {...exp} />
      ))}
  </Timeline>
  )}
  </>
 )
}