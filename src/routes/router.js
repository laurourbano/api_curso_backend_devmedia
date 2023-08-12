const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'get em json!'
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: 'getById em json!'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        message: 'post em json!'
    });
});

router.put('/:id', (req, res) => {
    res.status(202).json({
        message: 'put em json!'
    });
});

router.delete('/:id', (req, res) => {
    res.status(204).json({
        message: 'delete em json!'
    });
});

module.exports = router;