const express = require('express');
const router = express.Router();
const {Data} = require('../model/Data');


/* GET home page. */
router.get('/', (req, res, next) => {
    Data.findAll({raw: true})
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(next);
});

module.exports = router;
