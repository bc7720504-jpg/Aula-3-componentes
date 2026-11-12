import './CampoTexto.css'

function CampoTexto({ label, tipo, value, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input
                type={tipo}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default CampoTexto