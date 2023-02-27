export default function Jogo(props){

    
    
    function escolhaPalavra() {
        let numeroAleatorio= Math.floor(Math.random() * props.palavras.length);
        props.setPalavra(props.palavras[numeroAleatorio]);
        props.setBlockAll('')
        props.setNumeroImg(0)
        props.setLetrasChute([])
    }

    return(
        <div className="jogo">
         <div className="img">
         <img className="imagem" src={`assets/forca${props.numeroImg}.png`} alt=""></img>
         </div>
         <div className="palavra">
            <button onClick={escolhaPalavra} className="escolha">Escolher Palavra</button>
            <h1  className="tracinho">{props.palavra.split('').map((l,i)=>
            <span key={i} className="sLetra">
            <span className={props.letrasChute.includes(l)? '' : 'hiden'}>{l}</span>
            </span>)}</h1>
         </div>
        </div>
    );
}