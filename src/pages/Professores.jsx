import PaginaLayout from '../components/PaginaLayout'
import './Professores.css'

function Professores() {
        const professores = [
            { id: 1, nome: 'João Silva', email: 'joao@email.com', area: 'Programação' },
            { id: 2, nome: 'Maria Souza', email: 'maria@email.com', area: 'Matemática' },
            { id: 3, nome: 'Pedro Santos', email: 'pedro@email.com', area: 'Web Design' }
]

return (
    <div className="pagina-professores">
      <div className="cabecalho-professores">
        <h1>Professores cadastrados</h1>
        <button className="botao-novo-aluno">
        Novo professor
        </button>
    </div>

    <table className="tabela-professores">
      <thead>
        <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Área de atuação</th>
            <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {professores.map((professor) => (
            <tr key={professor.id}>
                <td>{professor.nome}</td>
                <td>{professor.email}</td>
                <td>{professor.area}</td>
                <td>
                    <button className="botao-acao">
                    Editar
                    </button>
        
                    <button className="botao-acao botao-excluir">
                     Excluir
                    </button>
                </td>
            </tr>
        ))}
        </tbody>
       </table>
      </div>
     )
  }
  
export default Professores