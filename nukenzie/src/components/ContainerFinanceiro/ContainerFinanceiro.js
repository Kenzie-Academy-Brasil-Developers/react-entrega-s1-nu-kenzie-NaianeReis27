import { useState } from "react";
import Cards from "../card/Cards";
import "./ContainerFinanceiro.css";
import BoxLance from "../BoxLance/BoxLance";
const ContainerFinanceiro = ({data, removeOperation}) => {
  let newArray = [...data]
  let ArrayEntradas = newArray.filter(element => element.select === "Entrada");
  let ArrayDespesas = newArray.filter(element => element.select === "Despesa");
  const filter =[
    "filterTodos", "filterEntradas", "filterDespesas"
  ]

  const [filterState, setFilterState] = useState(filter[0])
  function filterTodos(e){
    setFilterState("filterTodos")
  }

  function filterEntradas(){
    setFilterState("filterEntradas")
  }

  function filterDespesas(){
    setFilterState("filterDespesas")
  }
  return (
    <div className="containerFinanceiro">
      <div>
        <div className ="containerfiltros">
          <h5>Resumo Financeiro</h5>
          <div className="Btn_filtros">
           <button className="btn" onClick={filterTodos}>Todos</button>
           <button className="btn" onClick={filterEntradas}>Entradas</button>
           <button className="btn" onClick={filterDespesas}>Despesas</button>
          </div>
        </div>
      </div>
      <div className="containerOperacoes">
      {data.length === 0 &&  ( <><h5>Você não possui nenhum lançamento</h5><BoxLance/> <BoxLance/> <BoxLance/></>)}
      {data.length !== 0 && filterState === "filterTodos" &&(newArray.map(item => <Cards list = {item} descricao = {item.descricao} valor = {item.valor}  status = {item.select} removeOperation={removeOperation} />))}
      { filterState === "filterEntradas" && (ArrayEntradas.map(item => <Cards list = {item} descricao = {item.descricao} valor = {item.valor}  status = {item.select} removeOperation={removeOperation} />))}
      { filterState === "filterDespesas" && (ArrayDespesas.map(item => <Cards list = {item} descricao = {item.descricao} valor = {item.valor}  status = {item.select} removeOperation={removeOperation} />))}
      </div>
    </div>
  );
};

export default ContainerFinanceiro;
