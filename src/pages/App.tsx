import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from'./App.module.scss';
import Stopwatch from '../components/stopwatch';
import { ITarefa } from "../types/tarefa";

  function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    return (
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas}/>
        <List tarefas ={tarefas}/>
        <Stopwatch/>
      </div>
    );
}

export default App;
