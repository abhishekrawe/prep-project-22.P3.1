// import react, {useState, useEffect} from 'react'

// // import morningBird from './assets/raindrop.mp3'

// const SoundArray = ({sound}) => {

//   const [hover,setHover] = useState("")
//   const aud = new Audio(sound)

//   const Playit = () => {
//       alert(`Called Play it ${sound}`)
//       aud.play()
//   };

//   useEffect(() => {Playit()},[])

//   const Pauseit = () =>{
//     aud.pause();
//   }


//   // useEffect(() => {
//   //   Playit()
//   // },[])


//   return (
//     <>
//     <button type="button" onClick={Playit()}>Play Music</button>
//     <button type="button" onClick={Pauseit()}>Pause Music</button>
//     </>
//   );


// }

// export default SoundArray;