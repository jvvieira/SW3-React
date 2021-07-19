import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.primary.light,
        color: '#FFF',
    } 
}))

const LoginForm = () => {
    const classes = useStyles()
    
    const fazLogin = async () => {
        // const response = await chamadaAPI()
        // if (response.status === 400) console.log('erro')
        
        // return null
    }

    return (
        <Grid direction="column" container spacing={2}>
            <TextField label='User' />
            <TextField label='Password' />
            <Button className={classes.button} onClick={fazLogin}>Save</Button>
        </Grid>
    )
}

export default LoginForm