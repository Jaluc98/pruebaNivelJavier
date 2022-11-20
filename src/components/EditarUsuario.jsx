import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField,Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Error from '../components/Error'

//Estilos para Modal
const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px grooves #000',
  boxShadow: 24,
  p: 4,
};

//Componente Para editar los campos phone y email del usuario
  
  const editarUsuario = ({usuario}) =>{
    const [errores, setError] = useState('')
    const navigate = useNavigate();

    //Estates para controlar abrir y cerrar modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Almacenar los datos introducidos en los input en el state editar
    const [editar,setEditar] = useState({
      email: usuario.email,
      phone: usuario.phone
    });

    /* metodo para añadir los datos en el state editar */
    const handleChange = e =>{
      
      setEditar({
          ...editar,
          [e.target.name] : e.target.value
      });

    }

    //Metodo para editar los datos del usuario 
    const peticionPut =  ()=>{

      // Validación Email
      let email = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
      
      //Comprobar campos antes de editar los campos del  usuario
      if(editar.email == "" || editar.phone=="") {

        setError('Todos los campos son obligatorios')
        
      }else if(!email.test(editar.email)){

        setError('Email formato incorrecto')

      }else{

        usuario.email = editar.email 
        usuario.phone = editar.phone
        navigate('/')
      }
    }
    
    return(
      <div>
        <Button  variant="contained"  onClick={handleOpen}>Editar</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              {errores ? <Error mensaje ={errores}/> : null}
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignContent="center"
                >  
                  <Typography sx={{mb: 3}} align='center' id="modal-modal-title" variant="h4" component="h2">
                    Editar usuario
                  </Typography>
                  <TextField type="text" onChange={handleChange} name="email" label={'Email'}  id="Email" sx={{mb: 2}} defaultValue={usuario.email} />
                  <TextField type="text" onChange={handleChange} name="phone" label={'Phone'}  id="Phone" sx={{mb: 3}} defaultValue={usuario.phone}/>
                  <Button 
                     variant="contained" 
                     onClick={peticionPut}
                    >
                        Editar
                    </Button>
                </Grid>
              </Box>
            </Modal>
      </div>
    )
  }

export default editarUsuario