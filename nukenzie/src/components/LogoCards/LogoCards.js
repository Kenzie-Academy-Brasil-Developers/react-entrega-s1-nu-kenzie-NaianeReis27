import cartao from"../../assets/cartao.png"
import "./LogoCards.css"
const LogoCards = () =>{
    return (
        <div className = "logoCards">
            <div className ="logoCards_img">
                <img src = {cartao} alt="icon cartão"></img>
            </div>
            <div className ="logoCards_text">
                <div className ="firstBox"></div>
                <div className ="secondBox"></div>
            </div>
        </div>
    )
}

export default LogoCards;