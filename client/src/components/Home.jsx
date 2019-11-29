import React, { useState } from 'react';
import Navbar from './Navbar';
import Chat from './Chat';

function Home(props) {

    // let users = []

    // const getUsers = u => {
    //     users = u
    // }

    // const here = users && users.map(x => x.username)

    return (
        <div className='content'>
            <Navbar user={props.user} />
            <Chat user={props.user} />
        </div>
    );
}


export default Home