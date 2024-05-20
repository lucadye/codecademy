const express = require('express');
router = express.Router();

const { create, read, removeTodo } = require('../controller');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.post('/todo/create', create);

router.get('/todos', read);

router.delete('/todo/:id', removeTodo);

module.exports = router;
