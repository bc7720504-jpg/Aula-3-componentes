import { useState } from 'react'
import reactLogo from '../assets/react.svg'
//import viteLogo from '../../public/vite.svg'
import './Dashboard.css'
import Cabecalho from '../components/Cabecalho'
import MenuLateral from '../components/MenuLateral'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import CartaoIndicador from '../components/CartaoIndicador'
import  PaginaLayout from '../components/PaginaLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaLayout>
                            <h2>Dashboard</h2>
                            <p>Bem-vindo ao sistema!</p>
                            
                            <div className="indicadores">
                              <CartaoIndicador
                              titulo="Total de alunos"
                              valor="323"
                            />

                            <CartaoIndicador
                              titulo="Total de professores"
                              valor="10"
                            />

                            <CartaoIndicador
                              titulo="Avaliações realizadas"
                              valor="75"
                            />

                              </div>
              </PaginaLayout>
        
        <div>
        <CampoTexto
            label="Cadastre seu E-mail para receber nossas novidades:"
            tipo="email"
        />
        <Botao>Cadastrar</Botao>
        
        <a href="https://vite.dev" target="_blank">
         
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App