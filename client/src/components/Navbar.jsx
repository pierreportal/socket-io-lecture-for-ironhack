import React, { useState } from 'react';
import axios from 'axios'
//import { Link } from 'react-router-dom'

function Navbar(props) {

    const handleLogout = () => {
        axios.get('/auth/logout').then(response => {
            console.log(response.data)
        }).catch(err => console.log(err))
    }

    return (
        <div className='navbar'>
            <button style={{ 'width': '100px', 'padding': '10px' }} onClick={handleLogout}>I'm out.</button>
        </div>
    );
}

export default Navbar;