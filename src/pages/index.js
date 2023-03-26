import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/component/NavBar'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tito Zwane - Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Tito Zwane</h1>
        <h2 className="text-2xl font-bold mb-4">Front-end Developer</h2>
        <p className="text-lg mb-4">
          I'm a London-based developer with 5+ years of experience in front-end
          development. My skills include HTML, CSS, JavaScript, React, and
          TypeScript.
        </p>
        <p className="text-lg mb-4">
          I've worked with a variety of clients, including Four Communications,
          the Estèe Lauder Group, and the NHS, and I've built bespoke client
          websites, databases, and web applications.
        </p>
        <p className="text-lg mb-4">
          I'm passionate about working collaboratively with creative and digital
          teams to deliver high-quality projects on time and on budget. When
          I'm not coding, you can find me playing music or creating art.
        </p>
      </main>
    </div>
  );
}


