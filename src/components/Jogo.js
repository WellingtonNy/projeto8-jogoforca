export default function Jogo(props) {


    function tracinho(palavra){
    const numero =palavra.length;
    const mostrar =[];
    let tela;
    for (let i = 0; i < numero; i++) {
        mostrar.push(' _ ');
    }
    tela = mostrar.join('');
    props.setMostrar(tela);
    }


    function escolhaPalavra() {
        const numeroAleatorio = Math.floor(Math.random() * props.palavras.length);
        props.setPalavra(props.palavras[numeroAleatorio]);
        props.setBlockAll('');
        props.setNumeroImg(0);
        props.setLetrasChute([]);
        props.setPerdeu(false);
        props.setGanhou(false);
        props.setAcerto(0);
        tracinho(props.palavras[numeroAleatorio]);
    }


    return (
        <div className="jogo">
            <div className="img">
                <img data-test="game-image" className="imagem" src={`assets/forca${props.numeroImg}.png`} alt="forca"></img>
            </div>
            <div className="palavra">
                <button data-test="choose-word" onClick={escolhaPalavra}className="escolha">Escolher Palavra
                </button>
                <h1 data-test="word" className={`tracinho ${props.perdeu ? 'erro' : ''} ${props.ganhou ? 'certo' : ''}`}>{props.mostrar}
                </h1>
            </div>
        </div>
    );
}