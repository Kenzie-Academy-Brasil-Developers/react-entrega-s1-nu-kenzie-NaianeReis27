import "./ContainerValor.css";

const ContainerValor = ({ data }) => {
  let soma = 0;
  data.forEach((element) => {
    if(element.select==="Despesa"){
      soma = soma - Number(element.valor);
    }else{
      soma = soma + Number(element.valor);
    }
    
  });
 

  return (
    <div className="containerValor">
      <div>
        <p>Valor Total</p>
        <span>{`R$ ${soma.toFixed(2).replace(".",",")}`}</span>
      </div>
    </div>
  );
};
export default ContainerValor;
