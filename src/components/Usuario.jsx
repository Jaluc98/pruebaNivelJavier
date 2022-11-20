import React from 'react'
import useUsuarios from '../hooks/useUsuarios'
import { useParams } from 'react-router-dom'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography,Container} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import EditarUsuario from './EditarUsuario'

//Componente para enseñar los usuarios de forma independiente
const Usuario = () =>{

    //Para establecer la navegacion entre las distintas rutas establecidas en main
    const navigate = useNavigate()

    //Usuarios recogidos de la api 
    const { usuarios } = useUsuarios()

    //Propiedad para coger el parametro establecido en la ruta 
    const {id} = useParams()

    //Filtrado por id de los usuarios componentes de la api
    const usuario = usuarios.filter(elemento => elemento.id == parseInt(id))
  
    return (
    <>
       <Grid    
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
        >
            <Grid>
                <Card sx={{ maxWidth:300, p:4 }} >
                <Button 
                        onClick={()=> navigate(`/`)}
                    >
                        Volver
                    </Button>
                    <CardContent>
                        
                        {usuario.map((user) => (
                            <Container key={user.name}>
                                <Typography sx={{ fontSize: 20, mb: 3  }} color="text.secondary">Name: {user.name}</Typography>
                                <Typography sx={{mb: 2}}>Username: {user.username}</Typography>
                                <Typography sx={{mb: 2}}>Email: {user.email}</Typography>
                                <Typography>Phone: {user.phone}</Typography>
                                <Container  sx={{m: 6}}> <EditarUsuario usuario={user}/> </Container>
                            </Container>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>   
    </>
    )
}

export default Usuario


