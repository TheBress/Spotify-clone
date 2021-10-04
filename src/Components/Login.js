import React from 'react'
import { getTokenFromUrl, loginUrl } from '../spotify'
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>

            <a href={loginUrl}>Iniciar sesión con Spotify</a>
        </div>
    )
}

export default Login
