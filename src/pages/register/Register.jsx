import React from 'react'
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import {useState} from "react";


const Register=()=>{
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Name' onChange={event => setName(event.target.value)} placeholder='Enter Name' fullWidth required/>
                <TextField label='Surname' onChange={event => setSurname(event.target.value)} placeholder='Enter Surname' fullWidth required/>
                <TextField label='Email' onChange={event => setEmail(event.target.value)} placeholder='Enter Email' type="email" fullWidth required/>
                <TextField label='Username' onChange={event => setUsername(event.target.value)} placeholder='Enter username' fullWidth required/>
                <TextField label='Password'  onChange={event => setPassword(event.target.value)} placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>
            </Paper>
        </Grid>
    )
}

export default Register