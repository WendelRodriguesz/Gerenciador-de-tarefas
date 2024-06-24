import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from'./App.module.scss';
import Stopwatch from '../components/stopwatch';
import { ITask } from "../types/task";

  function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [selected, setSelected] = useState<ITask>();

    function selectTask(taskSelected: ITask){ // função para mostrar qual o item selecionado
      setSelected(taskSelected);
      setTasks(oldTasks => oldTasks.map(task => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false // operação ternária sobre a tarefa selecionada
      })));
    }

    return (
      <div className={style.AppStyle}>
        <Form setTasks ={setTasks}/>
        <List 
          tasks ={tasks} 
          selectTask ={selectTask}
        />
        <Stopwatch selected={selected}/>
      </div>
    );
}

export default App;
