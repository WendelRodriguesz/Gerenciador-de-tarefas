import React, { useState } from "react";
import Button from "../button";
import style from './form.module.scss';
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
export default function Form({ setTasks }: Props) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00:00');

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks => [...oldTasks, {
            task,
            time,
            selected: false,
            completed: false,
            id: uuidv4()
        }]);
        setTask('');
        setTime('00:00:00');
    }
        return (
            <form className={style.newtask} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Titulo:
                    </label>
                    <input
                        type="text"
                        name="task"
                        value={task}
                        onChange={event => setTask(event.target.value )} // Colocando os campos dentro do state
                        id="task"
                        placeholder="O que você vai fazer?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo:
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        value={time}
                        onChange={event => setTime( event.target.value )} // Colocando os campos dentro do state
                        id="time"
                        min="00:00:00"
                        max="24:00:00"
                        required
                    />
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        );
    }