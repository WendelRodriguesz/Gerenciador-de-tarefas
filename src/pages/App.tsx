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
  
    function finishTask() {
      setSelected(undefined);
  
      if (selected) {
        setTasks(oldTaks => oldTaks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }))
      }
    }
    return (
      <div className={style.AppStyle}>
        <Form setTasks ={setTasks}/>
        <List 
          tasks ={tasks} 
          selectTask ={selectTask}
        />
        <Stopwatch 
          selected={selected}
          finishTask={finishTask}
        />
      </div>
    );
}

export default App;
