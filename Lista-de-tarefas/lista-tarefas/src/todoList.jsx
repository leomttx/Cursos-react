import { useState, useEffect } from "react";
import React from "react";
import "./todoList.css";
import Icone from './assets/Icone.jpg'

function TodoList() {

    const listaStorage = localStorage.getItem("lista");

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState("");

    useEffect(()=>{
        localStorage.setItem("lista", JSON.stringify(lista));
    }, [lista])

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

    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index, 1); // deleta um item da lista no index
        setLista(listaAux);
    }

    function deletaTudo(){
        setLista([]); // Lista vai ficar fazia
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
                <div style={{ textAlign: 'center', display: 'flex', flexDirection:'column'}}>
                    {
                        lista.length <1 
                        ? 
                        <img className="icone-central" src={Icone}/>
                        :
                        lista.map((item, index)=>(
                            <div 
                                key={index}
                                className={item.isCompleted ? "item-completo" : "item"}
                            >
                                <span onClick={()=>{clicou(index)}} >{item.text}</span>
                                <button onClick={()=>{deleta(index)}} className="del">Deletar</button>
                            </div>
                        ))
                    }
                    {
                        lista.length > 0 &&
                        <button onClick={() => {deletaTudo()}} className="deleteAll">Deletar Todas</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default TodoList;