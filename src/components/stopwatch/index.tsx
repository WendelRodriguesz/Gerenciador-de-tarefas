import Button from "../button";
import Watch from "./watch";
import Style from "./stopwatch.module.scss"

export default function Stopwatch(){
    return(
        <div className={Style.stopwatch}>
            <p className={Style.titulo}>Escolhe uma tarefa e clique no botão para iniciar o cronômetro</p>
            <div className={Style.watch}>
               <Watch/> 
            </div>
            <Button text="Iniciar"/>
        </div>
    )
}