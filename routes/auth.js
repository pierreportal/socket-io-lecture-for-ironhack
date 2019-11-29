const express = require('express')
const router = express.Router()
const User = require('../models/User')
// const bcrypt = require('bcrypt')

// router.post('/login', (req, res) => {
//     const { username, password } = req.body
//     if (!username || !password) return res.json('Both fields are required.')
//     User.findOne({ username }).then(match => {
//         if (!match || !bcrypt.compareSync(password, match.password)) return res.json('Invalid credentials.')
//         return res.json(match)
//     }).catch(err => res.json(err))
// })

router.post('/fastlogin', (req, res) => {
    const { username } = req.body
    User.findOne({ username }).then(match => {
        req.session.currentUser = match
        return res.json(match)
    }).catch(err => res.json(err))
})

router.get('/loggincheck', (req, res) => {
    return res.json(req.session.currentUser)
})

router.get('/logout', (req, res) => {
    req.session.currentUser = null
    return res.json('loggedout')
})

module.exports = router