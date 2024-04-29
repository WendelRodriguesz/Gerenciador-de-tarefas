import React from "react"; // não precisa ser importado no function components, só no class component
import style from "./list.module.scss";
import Item from "./item";
import { ITask } from "../../types/task";

function List({tasks}:{tasks: ITask[]}){
    return (
        <aside className={style.listtasks}>
            <h2>Estudos do dia</h2>
            <ul>
                {/* Para transformar os itens da lista em um elemento html, usando o map */}
                {tasks.map((item, index) => (
                    <Item 
                        {...item} //desustruturar o item 
                        key ={index}
                        // task ={item.task}
                        // time ={item.time}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;