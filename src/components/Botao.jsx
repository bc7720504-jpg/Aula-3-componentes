import './Botao.css'

function Botao({ children, type = 'submit' }) {
    return (
        <button type={type}>
            {children}
        </button>
    )
}

export default Botao