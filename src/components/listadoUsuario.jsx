import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'
import useUsuarios from '../hooks/useUsuarios'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

// Componente para listar los usuarios recevidos de la Api

const ListadoUsuario = () =>{

    //Para establecer la navegacion entre las distintas rutas establecidas en main
    const navigate = useNavigate()
    
    //Usuarios recogidos de la api
    const { usuarios } = useUsuarios()

    return(
    <> 
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
        >
            Listado Usuarios
        </Typography>
        
        {/* Tabla de los usuarios */}

        <TableContainer>
         <Table 
            sx={{ minWidth: 700 }} 
            aria-label="customized table" 
          >
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {usuarios.map((usuario) => (
                    
                    <TableRow key={usuario.name}>
                    <TableCell>{usuario.name}</TableCell>
                    <TableCell>{usuario.username}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>{usuario.phone}</TableCell>
                    <TableCell><Button 
                        onClick={()=> navigate(`/usuario/${usuario.id}`)}
                    >
                        Ver Datos
                    </Button>
                    </TableCell>
                    
                </TableRow>
                ))}
            </TableBody>
         </Table>
      </TableContainer>
    </>   
    )
}

export default ListadoUsuario



    