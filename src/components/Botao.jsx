import './Botao.css'

function Botao({ children, type = "submit" }) {
  return (
    <button type={type} className="botao">
      {children}
    </button>
  )
}

export default Botao