import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CampoTexto from '../components/CampoTexto'
import Botao from '../components/Botao'
import { supabase } from '../supabase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navegar = useNavigate()

 useEffect(() => {
    async function testarConexao() {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.log('Erro ao consultar o Supabase:', error.message)
      } else {
        console.log('Cliente Supabase inicializado!')
        console.log('Sessao atual:', data.session)
      }
    }

    testarConexao()
  }, [])

    async function entrar(evento) {
evento.preventDefault()

const { data, error } = await
supabase.auth.signInWithPassword({
email: email,
password: senha
})

if (error) {
alert('E-mail ou senha incorretos!')
  return
}

navegar('/dashboard')
}

    return (
    <div className="pagina-login">  
        <form className="formulario-login" onSubmit={entrar}>
        <h1>Sistema de Qualidade do Ensino</h1>
        <h2>Entrar no sistema</h2>

        <CampoTexto
        label="E-mail"
        tipo="text"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
    />

        <CampoTexto
        label="Senha"
        tipo="password"
        value={senha}
        onChange={(evento) => setSenha(evento.target.value)}
    />

       <Botao type="submit">Entrar</Botao>
     </form>
    </div>
   )
}

export default Login