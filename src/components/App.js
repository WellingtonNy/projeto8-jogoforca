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
   setNumeroImg={setNumeroImg}
   setBlockAll={setBlockAll}
   blockAll={blockAll}
   letrasChute={letrasChute}
   palavras={palavras}
   palavra={palavra}
   setPalavra={setPalavra}
   numeroImg={numeroImg}/>
   <Letras 
   setLetrasChute={setLetrasChute} 
   numeroImg={numeroImg} 
   setNumeroImg={setNumeroImg}
   blockAll={blockAll}
   />
  </div>
  );
}