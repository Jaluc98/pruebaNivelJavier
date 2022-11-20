import { FormControl} from "@mui/material";
import Input from '@mui/material/Input';
import useUsuarios from "../hooks/useUsuarios";

//Componente Formulario donde encontramos los componentes necesarios para filtrar los usuarios
const Formulario = () =>{

    //Campos para filtrar segun lo introducido por el usuario
    const { filtroUsuario, cambiarFiltro } = useUsuarios()
    
    return(

        <form>

            <FormControl fullWidth>

                <Input  type="text" placeholder="Filtra Usuario" value={filtroUsuario} onChange={cambiarFiltro}></Input>
          
            </FormControl>

        </form>
    )
}

export default Formulario