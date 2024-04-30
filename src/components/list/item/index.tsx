import { ITask } from "../../../types/task";
import Style from "./item.module.scss";

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void
}

export default function Item(
    { 
        task, 
        time, 
        selected, 
        completed, 
        id,
        selectTask
    } : 
    Props){
    return (
        <li className={Style.item} onClick={() => selectTask(
            {
                task, 
                time, 
                selected, 
                completed, 
                id
            }
        )}>
        <h3> {task} </h3>
        <span> {time} </span>
        </li>
    )
}