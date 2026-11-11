import './CartaoIndicador.css' 
function CartaoIndicador({ titulo, valor }) {  
    return (    
        <div className="cartao-indicador">      
        <h3>{titulo}</h3>      
        <p>{valor}</p>    
    </div>  
    ) 
} 
    export default CartaoIndicador