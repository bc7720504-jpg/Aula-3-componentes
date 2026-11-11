import Cabecalho from './Cabecalho' 
import MenuLateral from './MenuLateral' 
import './PaginaLayout.css' 

function PaginaLayout({ children }) {  
    return (    
    <>      
    <Cabecalho />      
    <div className="layout">        
        <MenuLateral />          
        
        <main className="conteudo">          
            {children}        
            </main>      
            </div>    
            </> 
            ) 
        }
            export default PaginaLayout 