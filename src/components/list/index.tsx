import React from "react";

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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {/* Para transformar os itens da lista em um elemento html, usando o map */}
                {tarefas.map((item, index) => (
                    <li key={index}>
                    <h3> {item.tarefa} </h3>
                    <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
export default List;