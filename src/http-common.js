import axios from 'axios'

export default axios.create({
    baseURL: 'https://duellinks.joanlaw.repl.co/',
    headers: {
        'Content-type': 'application/json'
    }
})