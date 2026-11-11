import LinhaAluno from './LinhaAluno' 
function TabelaAlunos() {  
    const alunos = [    
        { id: 1, nome: 'Ana Souza', email: 'ana@email.com', turma: 'React A' },    
        { id: 2, nome: 'Carlos Oliveira', email: 'carlos@email.com', turma: 'React B' },    
        { id: 3, nome: 'Mariana Santos', email: 'mariana@email.com', turma: 'React A' }  
        ]
                 
         return (    
         <table>      
            <thead>        
                <tr>
                    <th>Nome</th>          
                    <th>E-mail</th>          
                    <th>Turma</th>        
                    </tr>      
                    </thead>      
                    <tbody>       
                        {alunos.map((aluno) => (          
                            <LinhaAluno key={aluno.id} aluno={aluno} />        
                            ))}      
                            </tbody>    
                            </table>
                             ) 
                            } 
                            
                            export default TabelaAlunos