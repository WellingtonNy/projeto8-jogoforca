import Jogo from './Jogo'
import Letras from './Letras';
import palavras from '../palavras';
import React from 'react';


export default function App(){

const [numeroImg,setNumeroImg]=React.useState(0)
const [palavra,setPalavra]=React.useState('')
const [letrasChute,setLetrasChute]=React.useState([])
const [blockAll,setBlockAll]=React.useState('disabled')

  return(
  <div className="container">
   <Jogo 
   setLetrasChute={setLetrasChute}
   setNumeroImg={setNumeroImg}
   setBlockAll={setBlockAll}
   blockAll={blockAll}
   letrasChute={letrasChute}
   palavras={palavras}
   palavra={palavra}
   setPalavra={setPalavra}
   numeroImg={numeroImg}/>
   <Letras 
   palavra={palavra}
   setLetrasChute={setLetrasChute} 
   letrasChute={letrasChute}
   numeroImg={numeroImg} 
   setNumeroImg={setNumeroImg}
   blockAll={blockAll}
   />
  </div>
  );
}