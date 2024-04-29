import Style from "./item.module.scss";

export default function Item({ task, time }: { task: string, time: string}){
    return (
        <li className={Style.item}>
        <h3> {task} </h3>
        <span> {time} </span>
        </li>
    )
}