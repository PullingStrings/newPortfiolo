'use client'
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

// Styled wrapper to control overall panel styling
const SliderWrapper = styled.div`
  width: 43%;

  .swiper-scrollbar.swiper-scrollbar-horizontal {
   background: #000000bd;
  }

  .swiper-scrollbar-drag {
   background: #fff;
  }

  img {
   padding: 5px 5px 5px 5px;
   border-radius: 15px;
  }

  /* Reduce image size on mobile */
  @media (max-width: 768px) {
    img {
      width: 70px;
      height: 70px;
      padding: 5px 0 0 0 ;

    }
  }
`;


const projects = [
  { slug: 'samsung-flagship-project', image: '/FlagshipSamsung.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  { slug: 'samsung-galaxy-gifts-project', image: '/GalaxyGifts.png' },
  // ... add more projects as needed
];


export default function RightPanel() {
 return (
  <SliderWrapper>
   <Swiper
        // Swiper settings
        slidesPerView={'auto'}
        spaceBetween={10}
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        style={{ width: '100%' }}
      >
       {projects.map((project, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }}>
         <Link key={index} href={`/view/${project.slug}`} passHref>
             <Image
               src={project.image}
               alt={project.slug}
               width={100}
               height={100}
             />
         </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </SliderWrapper>
 )
}