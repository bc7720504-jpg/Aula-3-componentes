import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Professores from './pages/Professores'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/professores" element={<Professores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App