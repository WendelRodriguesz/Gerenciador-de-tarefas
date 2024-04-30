import React from "react"; // não precisa ser importado no function components, só no class component
import style from "./list.module.scss";
import Item from "./item";
import { ITask } from "../../types/task";

interface Props{
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

function List({tasks, selectTask}: Props){
    return (
        <aside className={style.listtasks}>
            <h2>Estudos do dia</h2>
            <ul>
                {/* Para transformar os itens da lista em um elemento html, usando o map */}
                {tasks.map((item) => (
                    <Item 
                        selectTask = { selectTask }
                        key = {item.id}
                        {...item} //desustruturar o item 
                        // task ={item.task}
                        // time ={item.time}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;