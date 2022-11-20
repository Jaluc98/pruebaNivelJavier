import { useContext } from "react";
import Usuarios from "../context/UsuariosProvider";

//Hooks para coger las propiedades de nuestro context(usuarioProvider)
const useUsuarios = () =>{
    return useContext(Usuarios)
}

export default useUsuarios