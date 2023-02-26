export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h"
        , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"]

function adicionar(){
  let  contador = props.numeroImg+1
    {props.setNumeroImg(contador)}
}



    return (
        <div className="contLetras">
            <ul className="letrinhas">
                {alfabeto.map((e) => (<li><button onClick={adicionar} className="desabilitada" >{e.toUpperCase()}</button></li>))}
            </ul>
        </div>
    )
}