import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Professores from './pages/Professores'
import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import RotaProtegida from './components/RotaProtegida'

function App() {
    const [sessao, setSessao] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessao(session)
      setCarregando(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessao(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (carregando) {
    return <p>Carregando...</p>
  }

  return (
    <BrowserRouter>
            <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <RotaProtegida sessao={sessao}>
              <Dashboard />
            </RotaProtegida>
          } 
        />
        <Route 
          path="/alunos" 
          element={
            <RotaProtegida sessao={sessao}>
              <Alunos />
            </RotaProtegida>
          } 
        />
        <Route 
          path="/professores" 
          element={
            <RotaProtegida sessao={sessao}>
              <Professores />
            </RotaProtegida>
          } 
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App