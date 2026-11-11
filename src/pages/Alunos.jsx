import './Alunos.css' 
function Alunos() {  
    const alunos = [    
        { id: 1, nome: 'Ana Souza', email: 'ana@email.com' },    
        { id: 2, nome: 'Carlos Oliveira', email: 'carlos@email.com' },    
        { id: 3, nome: 'Mariana Santos', email: 'mariana@email.com' }  
        ]  
        
        
        return (    
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
                                {alunos.map((aluno) => (            
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
                                                ))}        
                                                </tbody>      
                                                </table>    
                                                </div>  
                                                ) 
                                            } 
                                            
                                            export default Alunos