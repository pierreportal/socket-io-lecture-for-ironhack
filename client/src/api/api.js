import axios from 'axios'

export const postMessage = (message, by) => {
    axios.post('/chat/postmessage', { user: by, message }).then(response => {
        // setFeed([...feed, response.data])
        // socketOut({ type: 'message', message: response.data })
        return response.data
    }).catch(err => err)
}