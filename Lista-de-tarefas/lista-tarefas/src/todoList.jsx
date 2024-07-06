import React from "react";
import "./todoList.css";

function TodoList() {
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form action="">
        <input 
        type="text"
        placeholder="Digite uma tarefa" 
        />
        <button className="add" type="submit">add</button>
      </form>
      <div className="listaTarefas">
        <div className="item">
            <span>Tarefa de exemplo</span>
            <button className="del">Deletar</button>
        </div>
        <div className="item-completo">
            <span>Tarefa de exemplo</span>
            <button className="del">Deletar</button>
        </div>
        <button className="deleteAll">Deletar Todas</button>
      </div>
    </div>
  );
}

export default TodoList;