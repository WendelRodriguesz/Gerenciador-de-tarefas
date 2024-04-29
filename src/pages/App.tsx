import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from'./App.module.scss';
import Stopwatch from '../components/stopwatch';
import { ITask } from "../types/task";

  function App() {
    const [tasks, settasks] = useState<ITask[]>([]);
    return (
      <div className={style.AppStyle}>
        <Form setTask={settasks}/>
        <List tasks ={tasks}/>
        <Stopwatch/>
      </div>
    );
}

export default App;
