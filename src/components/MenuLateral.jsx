import './MenuLateral.css'
import { useNavigate } from 'react-router-dom'

function MenuLateral() {

{/* COMENTARIO: Adicionei a função sair para redirecionar o
usuário para a página de login ao clicar no botão de sair
*/ }

      const navegar = useNavigate()
      function sair() {
      navegar('/')
      }

      return (
         <aside className="menu-lateral">
          <h2>Menu</h2>
         <ul>
            <li>
                <a href="#">Dashboard</a>
               </li>
               <li>
                   <a href="/alunos">Alunos</a>
               </li>
               <li>
                    <a href="#">Professores</a>
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