const express = require('express');
const router = express.Router();


// simple render of an about page
router.get('/', (req, res) => {
    res.render('about');
});

module.exports = router;
