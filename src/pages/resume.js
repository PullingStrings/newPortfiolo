import Navbar from '@/component/NavBar'
import TimelineCard from '@/component/TimelineCard'
import styled from 'styled-components';

const Timeline = styled.div`
  // Your timeline styles here
`;

const experiences = [
  {
    title: "Frontend Developer",
    at: "Cheil (Samsung Ltd)",
    period: "Oct 2020 - present",
    description: "I currently work with multiple clients on different work streams for Samsung. Within these work streams, I design, build and implement merchandising strategies for Samsung’s flagship pages, campaigns, launches, and promotions to drive sales and improve customer engagement. I also manage optimisation requests from support divisions to improve the overall performance and user experience of Samsung’s online platforms"
  },
  {
    title: "Frontend Developer",
    at: "Freelance",
    period: "May 2020 - Oct 2020",
    description: "Working with multiple clients to create and build their online businesses and organisations."
  },
  {
    title: "Web Developer",
    at: "Four Communications",
    period: "Oct 2018 - Mar 2020",
    description: "Built bespoke client websites, databases, and web applications for clients such as the Estèe Lauder Group, NHS, the Booker Prize, and the Home Office"
  },
  {
    title: "Junior Software developer",
    at: "Eventogy",
    period: "Feb 2018 - Jun 2018",
    description: "Built a secure, cloud-based platform for corporate conferences and events management, aimed specifically at professional, legal, and finance industries"
  },
  {
    title: "Web developer",
    at: "General Assembly",
    period: "Jul 2017 - Nov 2017",
    description: "Completed an intensive three-month full-time program in Full Stack Web Development also built four web apps utilizing technologies such as ReactJS, Express, Node.js, AngularJS, MongoDB, and Mongoose"
  },
];


export default function Resume() {
 return (
  <>
   <Navbar />
  <Timeline>
      {experiences.map((exp, index) => (
        <TimelineCard key={index} {...exp} />
      ))}
    </Timeline>

  </>
 )
}