import { Container, Grid, Typography} from '@mui/material'
import Filtro from '../components/Filtro'
import ListadoUsario from '../components/listadoUsuario'

//Pagina principal de nuestra página donde mostramos las listas y el filtrado de los usuarios
const Home = ()=>{
    return (
        <Container>

            <header>
                <Typography align='center' marginY={5} sx={{fontWeight: 'Bold'}} variant='h2'>
                    Filtro Usuarios
                </Typography>
            </header>
        
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignContent="center"
            >

                <Grid 
                    item xs={12} 
                    md={4}
                >
                    <Filtro />
                </Grid>
                
            </Grid>

            <ListadoUsario />

        </Container>
    )
}

export default Home