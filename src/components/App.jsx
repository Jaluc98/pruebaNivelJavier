import { Outlet  } from 'react-router-dom'
import { UsuariosProvider } from '../context/UsuariosProvider'

//Componente donde se muestran todos los componentes establecidos en las rutas
function App() {
  return (
    <UsuariosProvider>
        <Outlet />
    </UsuariosProvider>
  )
}
export default App
