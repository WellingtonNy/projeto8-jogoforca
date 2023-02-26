export default function Jogo(){
    return(
        <div className="jogo">
         <div className="img">
         <img className="imagem" src="assets/forca0.png" alt=""></img>
         </div>
         <div className="palavra">
            <button className="escolha">Escolher Palavra</button>
            <h1 className="tracinho">_ a s d _ _ _ _ _ _ _</h1>
         </div>
        </div>
    );
}