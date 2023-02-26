import Jogo from './Jogo'
import Letras from './Letras';
import palavras from '../palavras';
import React from 'react';


export default function App(){

const [numeroImg,setNumeroImg]=React.useState(0)
const [palavra,setPalavra]=React.useState('')
const [letrasChute,setLetrasChute]=React.useState([])

  return(
  <div className="container">
   <Jogo 
   letrasChute={letrasChute}
   palavras={palavras}
   palavra={palavra}
   setPalavra={setPalavra}
   numeroImg={numeroImg}/>
   <Letras numeroImg={numeroImg} setNumeroImg={setNumeroImg}/>
  </div>
  );
}