import "./Cards.css";
import {useState} from "react";
import Lixeira from "../../assets/lixeira.png"
const Cards = ({list, descricao, valor, status, removeOperation}) => {
  
  const [classDetalhe] = useState(()=>{if(status==="Despesa"){return "detalhe_vermelho"}else{return "detalhe"}});

  const handleRemove = () =>{
    removeOperation(list)
  }

  return (
    <div className="cards">
      <div className="boxDetalhe">
      <div className ={classDetalhe}></div>
      <div>
        <p>{descricao}</p>
        <p className= "status">{status}</p>
      </div>
      </div>
      <span className ="spanValor">{`R$ ${valor.replace(".",",")}`}</span>
      <button className ="btn_lixeira" onClick={handleRemove}>
        <img src= {Lixeira} alt="icon Lixeira"/>
      </button>
    </div>
  );
};

export default Cards;
