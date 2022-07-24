import Logo2 from "../../assets/nuKenzieLogo2.png"
import "./Login.css"

const Login = ({startApp}) =>{
    return(
        <div className = "containerLogin">
            <figure>
                <img src ={Logo2} alt="logo Nu Kenzie"/>
            </figure>
            <h3>Centralize o controle das suas finanças</h3>
            <p>de forma rapida e segura</p>
            <button onClick={startApp}>Iniciar</button>
        </div>
    )

}

export default Login;

