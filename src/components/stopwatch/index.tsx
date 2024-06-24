import Button from "../button";
import Watch from "./watch";
import Style from "./stopwatch.module.scss"
import { timeForSeconds } from "../../common/utills/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined
    finishTask: () => void
}
export default function Stopwatch({ selected, finishTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeForSeconds(selected.time));
        }
    }, [selected]);

    function regress(cont: number = 0) {
        setTimeout(() => {
            if (cont > 0) {
                setTime(cont - 1);
                return regress(cont - 1);
            }

            finishTask();
        }, 1000)
    }
    return (
        <div className={Style.stopwatch}>
            <p className={Style.title}>Escolhe uma tarefa e clique no botão para iniciar o cronômetro</p>
            Tempo: {time}
            <div className={Style.watch}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regress(time)}>Iniciar</Button>
        </div>
    )
}