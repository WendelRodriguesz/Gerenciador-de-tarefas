import Button from "../button";
import Watch from "./watch";
import Style from "./stopwatch.module.scss"
import { timeForSeconds } from "../../common/utills/time";
import { ITask } from "../../types/task";

interface Props{
    selected: ITask | undefined
}
export default function Stopwatch( {selected}: Props ){
    console.log('conversao: ', timeForSeconds('01:01:01'))
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