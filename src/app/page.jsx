
import SharedLayout from './components/SharedLayout';


export default function Home() {
  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'Github' },
    { href: '#', label: 'Contact' },
  ];

  const introText = 'I&#44;m a front-end developer with over a decade of experience crafting digital solutions in tech-driven environments. Specializing in React, TypeScript, HTML/CSS, and JavaScript. I&#44;ve delivered impactful results to clients across diverse sectors. Known for my creative approach to troubleshooting, I bring a unique blend of analytical prowess and artistic intuition to the tech landscape.'
  const defaultAudioSrc = '/audio/TownshipWinds.mp3'



  return (
    <SharedLayout
      bgImage={'/happyme.jpg'}
      menuLinks={menuLinks}
      content={introText}
      audioSrc={defaultAudioSrc}
      />
  );
}
