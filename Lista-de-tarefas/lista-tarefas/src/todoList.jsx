import { useState } from "react";
import React from "react";
import "./todoList.css";
import Icone from './assets/Icone.jpg'

function TodoList() {

    const [lista, setLista] = useState([])
    const [novoItem, setNovoItem] = useState("");

    function adcionaItem(form){
        form.preventDefault(); //impedir que o comportamento padrão de um evento aconteça.
        if(!novoItem){
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted: false}])
        setNovoItem("");
        document.getElementById("input-entrada").focus()
    }

    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    return (
        <div>
            <h1>Lista de tarefas</h1>
            <form onSubmit={adcionaItem}>
                <input 
                id="input-entrada"
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}
                type="text"
                placeholder="Digite uma tarefa" 
                />
                <button className="add" type="submit">add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign: 'center'}}>
                    {
                        lista.length <1 
                        ? 
                        <img className="icone-central" width={150} height={150} src={Icone}/>
                        :
                        lista.map((item, index)=>(
                            <div 
                                key={index}
                                className={item.isCompleted ? "item-completo" : "item"}
                            >
                                <span onClick={()=>{clicou(index)}} >{item.text}</span>
                                <button className="del">Deletar</button>
                            </div>
                        ))
                    }
                    <button className="deleteAll">Deletar Todas</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;