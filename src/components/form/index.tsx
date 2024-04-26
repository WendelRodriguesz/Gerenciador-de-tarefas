import React from "react";
import Button from "../button";
import style from './form.module.scss';
import { ITarefa } from "../../types/tarefa";

class Form extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
    }> {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){ 
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
    }
    render(){
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Titulo:
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} // Colocando os campos dentro do state
                        id="tarefa"
                        placeholder="O que você vai fazer?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo:
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})} // Colocando os campos dentro do state
                    id="tempo"
                    min="00:00:00"
                    max="24:00:00"
                    required
                />
                </div>
                <Button
                    type= "submit"
                    text= "Adicionar" // passa por parametro o texto do botão
                />
            </form>
        )
    }
}
export default Form;