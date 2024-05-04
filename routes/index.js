/* Routes for managing TODO-list operations */
export const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Welcome to the TODO List App!');
});

// TODO: Add more routes here
