// require express and it's router component
const express = require('express');

const router = express.Router();

const { create, expenseById, read, update, remove, expenseByDate } = require('../controllers');

router.post('/expense/create', create);

router.get('/expense/:id', expenseById, read);

router.put('/expense/:id', expenseById, update);

router.delete('/expense/:id', remove);

router.get('/expense/list/:expenseDate', expenseByDate, read);

module.exports = router;
