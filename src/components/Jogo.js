export default function Jogo(props) {


    function escolhaPalavra() {
        const numeroAleatorio = Math.floor(Math.random() * props.palavras.length);
        props.setPalavra(props.palavras[numeroAleatorio]);
        props.setBlockAll('');
        props.setNumeroImg(0);
        props.setLetrasChute([]);
        props.setPerdeu(false);
        props.setGanhou(false);
        props.setAcerto(0);
    }


    return (
        <div className="jogo">
            <div className="img">
                <img data-test="game-image" className="imagem" src={`assets/forca${props.numeroImg}.png`} alt="forca"></img>
            </div>
            <div className="palavra">
                <button data-test="choose-word" onClick={escolhaPalavra}className="escolha">Escolher Palavra
                </button>
                <h1 className="tracinho">
                    {props.palavra.split('').map((l, i) =>
                        <span key={i} className="sLetra">
                            <span data-test="word" id="idLetra"
                                className={`${props.perdeu ? 'erro' : ''} ${props.ganhou ? 'certo' : ''} ${props.letrasChute.includes(l) || props.perdeu ? '' : 'hiden'}`}>{l}
                            </span>
                        </span>)}
                </h1>
            </div>
        </div>
    );
}