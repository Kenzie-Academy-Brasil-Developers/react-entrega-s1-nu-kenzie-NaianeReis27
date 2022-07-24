import React, { useState } from "react";
import "./Form.css";

const Form = ({addOperation}) => {
  const [form, setForm] = useState({ descricao: "", valor: "", select: "Entrada", id:""});
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.getAttribute("name") === "descricao") {
      setForm({
        descricao: event.target.value,
        valor: form.valor,
        select: form.select,
      });
    } else if (event.target.getAttribute("name") === "valor") {
      setForm({
        descricao: form.descricao,
        valor: event.target.value,
        select: form.select,
      });
    } else if (event.target.getAttribute("name") === "select") {
      setForm({
        descricao: form.descricao,
        valor: form.valor,
        select: event.target.value,
      });
    }
  };

  const operacao = (e) =>{
    e.preventDefault()
    addOperation(form)
  }
 
  return (
    <form>
      <label>Descrição</label>
      <input
        name="descricao"
        placeholder="Digite aqui sua descrição"
        value={form.descricao}
        onChange={(e) => handleSubmit(e)}
      ></input>
      <p>Ex: Compra de roupas</p>
      <div className="container">
        <div className="containerInterno">
          <label>Valor</label>
          <input
            type={"number"}
            name="valor"
            value={form.valor}
            placeholder="R$ 00,00"
            onChange={(e) => handleSubmit(e)}
          ></input>
        </div>
        <div className="containerInterno">
          <label>Tipo do valor</label>
          <select name="select" onChange={(e) => handleSubmit(e)}>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button name="btn" onClick={(e) => operacao(e)}>
        Inserir valor
      </button>
    </form>
  );
};
export default Form;
