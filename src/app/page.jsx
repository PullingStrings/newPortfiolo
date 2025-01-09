
import SharedLayout from './components/SharedLayout';


export default function Home() {
  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'Github' },
    { href: '#', label: 'Contact' },
  ];

  const introText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid cum distinctio fuga inventore sit rem dignissimos possimus optio, voluptatum sunt voluptatem ad facere hic nostrum cumque ducimus voluptates consequatur iure.'
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
