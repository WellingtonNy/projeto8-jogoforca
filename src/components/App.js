import Jogo from './Jogo';
import Letras from './Letras';
import palavras from '../palavras';
import React from 'react';



export default function App(){


const [numeroImg,setNumeroImg]=React.useState(0);
const [palavra,setPalavra]=React.useState('');
const [letrasChute,setLetrasChute]=React.useState([]);
const [blockAll,setBlockAll]=React.useState('disabled');
const [perdeu,setPerdeu]=React.useState(false);
const [ganhou,setGanhou]=React.useState(false);
const [acerto,setAcerto]=React.useState(0);
const [mostrar,setMostrar]=React.useState('');


  return(
  <div className="container">
   <Jogo
   palavras={palavras}
   numeroImg={numeroImg}
   setNumeroImg={setNumeroImg}
   palavra={palavra}
   setPalavra={setPalavra}
   letrasChute={letrasChute}
   setLetrasChute={setLetrasChute}
   blockAll={blockAll}
   setBlockAll={setBlockAll}
   perdeu={perdeu}
   setPerdeu={setPerdeu}
   ganhou={ganhou}
   setGanhou={setGanhou}
   setAcerto={setAcerto}
   mostrar={mostrar}
   setMostrar={setMostrar}
   />
   <Letras
   numeroImg={numeroImg}
   setNumeroImg={setNumeroImg}
   palavra={palavra}
   letrasChute={letrasChute}
   setLetrasChute={setLetrasChute}
   blockAll={blockAll}
   setBlockAll={setBlockAll}
   ganhou={ganhou}
   setGanhou={setGanhou}
   perdeu={perdeu}
   setPerdeu={setPerdeu}
   acerto={acerto}
   setAcerto={setAcerto}
   mostrar={mostrar}
   setMostrar={setMostrar}
   />
  </div>
  );
}