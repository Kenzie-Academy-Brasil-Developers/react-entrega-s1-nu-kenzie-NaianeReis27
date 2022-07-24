import cartao from"../../assets/cartao.png"
import "./CardLogo2.css"
const LogoCard2 = () =>{
    return (
        <div className = "logoCards2">
            <div className ="logoCards_img2">
                <img src = {cartao} alt="icon cartão"></img>
            </div>
            <div className ="logoCards_text2">
                <div className ="firstBox2"></div>
                <div className ="secondBox2"></div>
            </div>
        </div>
    )
}

export default LogoCard2;