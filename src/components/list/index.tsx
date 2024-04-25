import React from "react"; // não precisa ser importado no function components, só no class component
import style from "./list.module.scss"
import Item from "./item/index"
function List(){
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    },
    {
        tarefa: "Java",
        tempo: "01:30:00"
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {/* Para transformar os itens da lista em um elemento html, usando o map */}
                {tarefas.map((item, index) => (
                    <Item 
                        {...item} //desustruturar o item 
                        key ={index}
                        // tarefa ={item.tarefa}
                        // tempo ={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;