import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/component/NavBar'
import WorkAndAwards from '@/Section/WorkAndAwards'
import Footer from '@/component/Footer'
import BioSection from '@/component/BioSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tito Zwane - Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <BioSection/>
        <WorkAndAwards />
        <Footer />
    </div>
  );
}


