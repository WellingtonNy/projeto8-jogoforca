export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h"
        , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];


    function perdeu() {
        const numero = props.numeroImg;
        if (numero === 5) {
            { props.setPerdeu(true); }
        }
    }


    function ganhou() {
        const palavraCerta = props.palavra.split('');
        const arrSemRepetirElemento = [...new Set(palavraCerta)];
        const tamanhoArr = arrSemRepetirElemento.length;
        props.setAcerto(props.acerto + 1);
        const numeroAcerto = props.acerto;
        if (tamanhoArr - 1 === numeroAcerto) {
            props.setGanhou(true);
        }
    }


    function certoErrado(e) {
        if (props.palavra.includes(e)) {
            ganhou();
        } else {
            { props.setNumeroImg(props.numeroImg + 1); }
            perdeu();
        }
    }


    return (
        <div className="contLetras">
            <ul className="letrinhas">
                {alfabeto.map((e) => (
                    <li key={e}>
                        <button data-test="letter" disabled={props.blockAll || props.perdeu || props.ganhou || props.letrasChute.includes(e) ? true : false}
                            onClick={() => {
                                props.setLetrasChute((w) => [...w, e])
                                certoErrado(e);
                            }}
                            className={`${props.blockAll} ${props.letrasChute.includes(e) ? 'disabled' : ''}`} >{e.toUpperCase()}
                        </button>
                    </li>))}
            </ul>
        </div>
    );
}