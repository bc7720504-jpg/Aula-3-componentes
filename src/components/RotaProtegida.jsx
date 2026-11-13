import { Navigate } 
from 'react-router-dom' 
function RotaProtegida({ children, sessao }) {   
    if (!sessao) {     
        return <Navigate to='/' replace />   
    }   
    
    return children 
} 

export default RotaProtegida