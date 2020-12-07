const express = require("express");
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    res.send("Here are all the products")
});

//Get
router.get('/:productId', async (req, res) => {
    res.send(`Here is product ${req.params.productId}`);
});

// Post
router.post('/', async (req, res) => {
    res.send(req.body);
});

//Delete
router.delete('/:productId', async (req, res) => {
    res.send(`Delete product ${req.params.productId}`);
});

//Patch
router.patch('/:productId', async (req, res) => {
    res.send(`Update product ${req.params.productId}`);
});

module.exports = router;