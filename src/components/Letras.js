export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h"
        , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"]

function adicionar(){
    {props.setNumeroImg(props.numeroImg+1)}
}


    return (
        <div className="contLetras">
            <ul className="letrinhas">
                {alfabeto.map((e) => (<li><button disabled={props.blockAll?true :false} onClick={adicionar} className={props.blockAll} >{e.toUpperCase()}</button></li>))}
            </ul>
        </div>
    )
}