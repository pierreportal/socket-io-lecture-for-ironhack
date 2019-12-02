import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

function Login(props) {

    let [loggedIn, setLoggedIn] = useState(null)

    // const attempt = props.location.attempt

    const [username, setUsername] = useState("")

    const handleChange = e => {
        const { value } = e.target;
        setUsername(value)
    }
    const redirect = user => {
        setLoggedIn(user)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('/auth/fastlogin', { username }).then(response => {

            return redirect(response.data)

        }).catch(err => console.log(err))
    }

    let btnDisplay = username ? 'visible' : 'hidden'

    return loggedIn || props.user ? <Redirect to="/" /> : (
        <div className='auth-container'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your username ?' value={username} onChange={handleChange} name='username' />
                <button style={{ 'visibility': btnDisplay }}>I'm back!</button>
            </form>
        </div>
    )
}

export default Login;