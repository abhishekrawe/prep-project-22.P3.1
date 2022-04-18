import react, {useState, useEffect} from 'react'

import morningBird from './assets/raindrop.mp3'

const SoundArray = ({sound}) => {

  const Playit = () => {
      alert('Called Play it')
      const aud = new Audio(morningBird)
      aud.play()
  };
  useEffect(() => {
    Playit()
  },[])


  return null;

}

export default SoundArray;