import { useState, useEffect, createContext } from "react";

/* Almacenar propiedades context */
const UsuarioContext = createContext()

const UsuariosProvider = ({children}) => {
    
    /* Filtrado por la eleccion del usuario */
    const [filtroUsuario, setFiltroUsuario] = useState('')

    /* Añadir los usuarios  según los filtros introrducidos*/
    const [usuarios, setUsuarios] = useState([])

    /* Tabla de todos usuarios en total*/
    const [tablausuario, setTablaUsuario] = useState([])
    
    //Recoger los datos introcidos por pantalla en el input de filtrar
    const cambiarFiltro = e => {
        setFiltroUsuario(e.target.value)
        filtrar(e.target.value)
    }

    //Filtrar los usuarios segun lo introducido en el input
    const filtrar = (terminoBusqueda)=>{
        var resultadoBusqueda = tablausuario.filter(elemento =>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
               elemento.username.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
               elemento.email.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
               elemento.phone.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return elemento;
            }
        });
        
        setUsuarios(resultadoBusqueda)
    }

    /* Recoger los datos de aquellos usuarios almacenados en la api proporcionada */
    useEffect(()=>{

        const consultarApi = async() =>{
            const URL = "https://jsonplaceholder.typicode.com/users"
            const response = await fetch(URL)
            const data = await response.json()
            setUsuarios(data)
            setTablaUsuario(data)
        }

        consultarApi();

    }, [])

    return(
        <UsuarioContext.Provider  
            value={{
                filtroUsuario,
                cambiarFiltro,
                usuarios
            }}
        >
           {children}
        </UsuarioContext.Provider>
    )
}

export{
    UsuariosProvider
}

export default UsuarioContext