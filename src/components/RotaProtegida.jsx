import { Navigate } 
from 'react-router-dom' 
function RotaProtegida({ children, sessao }) {   
    if (!sessao) {     
        return <Navigate to='/login' replace />   
    }   
    
    return children 
} 

export default RotaProtegida