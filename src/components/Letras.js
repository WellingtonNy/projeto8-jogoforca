export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h"
        , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"]


function certoErrado(e){
    if(props.palavra.includes(e)){
        console.log('acerto miseravi')
    }else{
        {props.setNumeroImg(props.numeroImg+1)}
    }
}

    return (
        <div className="contLetras">
            <ul className="letrinhas">

                {alfabeto.map((e) => (<li key={e}><button disabled={props.blockAll?true :false} 
                
                
                
                onClick={()=>
                
                    { props.setLetrasChute((w)=>[...w,e])
                    console.log(props.letrasChute)
                    certoErrado(e)
                    
}}
             
             
             
             
              className={props.blockAll} >{e.toUpperCase()}</button></li>))}
            </ul>
        </div>
    )
}