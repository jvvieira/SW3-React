import React from 'react'
import LoginForm from './Login.Form'
import LoginNSPForm from './NSP/Login.NSP.Form'

const LoginPage = () => {
    console.log()

    const getForm = client => {
        if (client === 'nsp')
            return <LoginNSPForm />
        else
            return <LoginForm />

    }

    return getForm(process.env.REACT_APP_CLIENTID)
}

export default LoginPage