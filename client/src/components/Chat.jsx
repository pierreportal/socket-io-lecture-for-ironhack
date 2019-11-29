import React, { useState, useEffect, useCallback } from 'react';
import ChatForm from './ChatForm';
import ChatArea from './ChatArea';
import axios from 'axios';
import { SystemFeedback, socketIn, socketOut } from '../socket/socket-io';


function Chat(props) {

    const [feed, setFeed] = useState([])
    const [actionFeedback, setActionFeedback] = useState("");
    const [systemFeedback, setSystemFeedback] = useState([]);

    // const loggedUser = systemFeedback && systemFeedback.map(x => x.username)
    // props.getUsers(loggedUser || null)

    const getFeed = () => {
        axios.get('/chat/feed').then(response => {
            setFeed(response.data)
        })
    }

    socketIn({ setActionFeedback, setSystemFeedback, systemFeedback, getFeed });

    const isTyping = typing => {
        socketOut({ type: 'typing', message: typing ? `${props.user.firstName} is typing...` : '' })
    }

    const sendMessage = (message) => {
        socketOut({ type: 'typing', message: '' })
        axios.post('/chat/postmessage', { user: props.user, message }).then(response => {
            setFeed([...feed, response.data])
            socketOut({ type: 'message', message: response.data })
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        socketOut({ type: 'system', message: props.user })
        getFeed()
    }, [])


    return (
        <div className='chat-content'>

            <ChatArea feed={feed} user={props.user} />
            <div className='feedbacks'>
                {/* {SystemFeedback(systemFeedback, setSystemFeedback)} */}
                {/* {loggedUser} */}
                {actionFeedback && <p>{actionFeedback}</p>}
            </div>
            <ChatForm sendMessage={sendMessage} user={props.user} isTyping={isTyping} />
        </div>
    );
}

export default Chat;