export default function Jogo(props){

    function escolhaPalavra() {
        let numeroAleatorio= Math.floor(Math.random() * props.palavras.length)
        props.setPalavra(props.palavras[numeroAleatorio])
        console.log(props.palavras[numeroAleatorio]);
    }

    return(
        <div className="jogo">
         <div className="img">
         <img className="imagem" src={`assets/forca${props.numeroImg}.png`} alt=""></img>
         </div>
         <div className="palavra">
            <button onClick={escolhaPalavra} className="escolha">Escolher Palavra</button>
            <h1 className="tracinho">_ a s d _ _ _ _ _ _ _</h1>
         </div>
        </div>
    );
}