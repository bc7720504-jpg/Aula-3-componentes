function FormularioAluno()  { 
    return (    
    <form>      
        <h2>Cadastro de aluno</h2>      
        
        <label>Nome</label>      
        <input type="text" placeholder="Digite o nome" />      
        
        <label>E-mail</label>      
        <input type="email" placeholder="Digite o e-mail" />      
        
        <label>Turma</label>      
        <input type="text" placeholder="Digite a turma" />      
        
        <button type="button">Salvar aluno</button>    
        </form>  
        ) 
    } 
    
    export default FormularioAluno