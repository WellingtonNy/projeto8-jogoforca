export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h"
        , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];


    function perdeu() {
        const numero = props.numeroImg;
        if (numero === 5) {
            props.setPerdeu(true);
            props.setMostrar(props.palavra);
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
            props.setMostrar(props.palavra);
        }
    }


    function mostrarAcerto(e) {
        const palavra = props.palavra;
        const letras = props.letrasChute;
        letras.push(e);
        let tela = [];
        let tela2;

        for (let i = 0; i < palavra.length; i++) {
            if (letras.includes(palavra[i])) {
                tela.push(palavra[i]);
            } else {
                tela.push(' _ ');
            }
        }

        letras.pop();
        tela2 = tela.join('');
        props.setMostrar(tela2);
    }



    function certoErrado(e) {
        if (props.palavra.includes(e)) {
            mostrarAcerto(e);
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