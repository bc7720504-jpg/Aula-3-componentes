import './Alunos.css'
import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import CartaoIndicador from '../components/CartaoIndicador'
import PaginaLayout from '../components/PaginaLayout'
import { supabase } from '../supabase'

function Alunos() {
      const [alunos, setAlunos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function buscarAlunos() {
      const { data, error } = await supabase
        .from('alunos')
        .select('*')
        .order('nome')

      if (error) {
        alert('Erro ao consultar alunos: ' + error.message)
      } else {
        setAlunos(data)
      }

      setCarregando(false)
    }

    buscarAlunos()
  }, [])

    return (
    <>
        <PaginaLayout>


            <div className="pagina-alunos">
                    <div className="cabecalho-alunos">
                            <h1>Alunos cadastrados</h1>

                            <button className="botao-novo-aluno">
                                Novo aluno
                            </button>
                    </div>

                    <table className="tabela-alunos">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                                <tbody>
  {carregando ? (
    <tr>
      <td colSpan="3">
        Carregando alunos...
      </td>
    </tr>
  ) : alunos.length === 0 ? (
    <tr>
      <td colSpan="3">
        Nenhum aluno cadastrado.
      </td>
    </tr>
  ) : (
    alunos.map((aluno) => (
      <tr key={aluno.id}>
        <td>{aluno.nome}</td>
        <td>{aluno.email}</td>
        <td>
          <button className="botao-acao">
            Editar
          </button>
          <button className="botao-acao botao-excluir">
            Excluir
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

                    </table>
            </div>

            
        </PaginaLayout>


    </>
 )
}
export default Alunos

/*
*/

