function LinhaAluno({ nome, email, turma }) {
      return (    
      <tr>      
        <td>{nome}</td>      
        <td>{email}</td>      
        <td>{turma}</td>    
        </tr>  
        ); 
    } 
    
    export default LinhaAluno;