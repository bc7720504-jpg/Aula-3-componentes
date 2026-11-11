import './CampoTexto.css'

function CampoTexto({ label, type, value, onChange }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default CampoTexto