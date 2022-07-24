// react
import {useState} from "react";
// css
import "./App.css";
//components
import Form from "./components/Form/Form";
import ContainerFinanceiro from "./components/ContainerFinanceiro/ContainerFinanceiro";
import ContainerValor from "./components/ContainerValor/ContainerValor";
import Animation from "./components/Animation/Animation";
import Login from "./components/Login/Login";
//img
import Logo from "./assets/logo.png";


const stage = [
  { id: 1, name: "Login" },
  { id: 2, name: "Index" },
];

function App() {
  const [list, setList] = useState([])
  const [AppStage, setAppStage] = useState(stage[0].name);

  const saveOperation = (data)=>{
    let newArray = [...list]
    newArray.push(data)
    setList(newArray)
  }

  const removeOperation = (data)=>{
    let newArray =[...list]
    newArray.splice(newArray.indexOf(data),1)
    setList(newArray)
  }

  const startApp = () =>{
    setAppStage(stage[1].name)
  }

  return (
    <div className="App">
      {AppStage === "Login" && (
        <main className="PageIndex">
          <Login startApp={startApp}/>
          <Animation />
        </main>
      )}
      {AppStage === "Index" && (
        <>
          <header>
            <div>
              <img src={Logo} alt="Logo nuKenzie" />
              <button className="btn_sair" onClick={()=>{window.location.reload()}}>Sair</button>
            </div>
          </header>
          <main>
            <div className="containerFormValor">
              <Form addOperation={saveOperation}/>
              <ContainerValor data={list} />
            </div>
            <ContainerFinanceiro data = {list} removeOperation={removeOperation}/>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
