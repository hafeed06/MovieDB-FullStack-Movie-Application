import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const bigInput = {width:'95%', marginBottom:1, marginTop:1}
const smallInput = {width:'46%', marginBottom:1, marginTop:1, marginRight:1, marginLeft:1}


const Signup = () => {


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
    <Box sx={{ flexGrow: 1 }} mt={10} >
      <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={4} ml="auto" mr="auto">
          <Typography variant="h6" sx={{textAlign:'center'}} color="primary">Create your account </Typography>
          <Item>
          <Box>
          <TextField id="outlined-basic" label="First Name" variant="outlined" sx={smallInput}/>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={smallInput}/>
          </Box>
          <TextField id="outlined-basic" label="Username" variant="outlined" sx={bigInput}/>
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" sx={bigInput}/>



          <TextField id="outlined-basic" label="Hobbies" variant="outlined" sx={bigInput}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Signup
