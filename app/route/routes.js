/**
 * All routes are to be written in this source file
 */

const express = require('express')
const routes = express.Router()
const message = require('../message/message')
routes
    .route('/').get((req, res) => {

        const { favoriteTree } = req.query
            /**
             * If query string contains favoriteTree
             * then it will print
             * It's nice to know that your favorite tree is a <value of "favoriteTree" from the url>
             * otherwise it will ask for your favorite tree
             */
        if (favoriteTree)
            res.send(`<h3>${message.favoriteTreeAnswer} ${favoriteTree}</h3>`)
        else
            res.send(`<h3>${message.favoriteTreeQuestion}</h3>`)
    })

module.exports = routes;