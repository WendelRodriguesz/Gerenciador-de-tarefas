import React from "react";
import style from "./button.module.scss";

class Button extends React.Component <{ 
    text: string, type?: "button" | "submit" | "reset"}>{
    render(){
        const {type = "button"} = this.props; // deixando um tipo padrão para o botão
        return (
            <button type={type} className={style.button}>
                {this.props.text} 
                {/* pega o texto do botão por parametro */}
            </button>
        )
    }
}
export default Button;