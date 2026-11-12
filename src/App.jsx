import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alunos" element={<Alunos />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
