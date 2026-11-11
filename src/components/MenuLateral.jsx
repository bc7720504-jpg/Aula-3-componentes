import './MenuLateral.css' 
import { useNavigate } from 'react-router-dom' 

function MenuLateral() { 
    {/* COMENTARIO: Adicionei a função sair para redirecionar o usuário para a página de login ao clicar no botão de sair */ }    
    const navegar = useNavigate()    
    
    function sair() {    
        navegar('/')    
    }    
    function paginadashboard() {
  navegar('/dashboard')
}

function paginaalunos() {
  navegar('/alunos')
}

function paginaprofessores() {
  navegar('/professores')
}

    return (        
    <aside className="menu-lateral">            
    <h2>Menu</h2>            
   <ul>
  <li>
    <a onClick={paginadashboard}>Dashboard</a>
  </li>
  <li>
    <a onClick={paginaalunos}>Alunos</a>
  </li>
  <li>
    <a onClick={paginaprofessores}>Professores</a>
  </li>
</ul>

                    
                    {/* COMENTARIO: Adicionei um botão */}            
                    <br />            
                    <button onClick={sair}>                
                        Sair            
                        </button>        
                        
                        </aside>    
                        ) 
                    } 
                    
                    export default MenuLateral