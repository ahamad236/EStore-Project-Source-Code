const express = require('express');
const productCategories = express.Router();
const pool = require('../shared/pool');

productCategories.get('/', (req, res) => {
  pool.query('select * from categories', (error, categories) => {
    if (error) {
      res.status(500).send({
        error: error.code,
        message: error.message,
      });
    } else {
      res.status(200).send(categories);
    }
  });
});

module.exports = productCategories;
