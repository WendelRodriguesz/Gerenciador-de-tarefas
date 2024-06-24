import React from "react";
import Button from "../button";
import style from './form.module.scss';
import { ITask } from "../../types/task";
import {v4 as uuidv4} from "uuid";

class Form extends React.Component <{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
    }> {
    state = {
        task: "",
        time: "00:00:00"
    }

    addtask(evento: React.FormEvent<HTMLFormElement>){ 
        evento.preventDefault();
        this.props.setTasks(oldTask => 
            [
                ...oldTask, 
                {
                    ...this.state, 
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }]);
        this.setState({
            task: "",
            time: "00:00:00",
        })
    }
    render(){
        return (
            <form className={style.newtask} onSubmit={this.addtask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Titulo:
                    </label>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={evento => this.setState({...this.state, task: evento.target.value})} // Colocando os campos dentro do state
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
                    value={this.state.time}
                    onChange={evento => this.setState({...this.state, time: evento.target.value})} // Colocando os campos dentro do state
                    id="time"
                    min="00:00:00"
                    max="24:00:00"
                    required
                />
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}
export default Form;