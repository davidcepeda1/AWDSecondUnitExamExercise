const express = require("express");
const customer = require("../models/mouse");
const router = express.Router();

router.get("/mouse", async (req, res) => {
    try{
        const customers = await customer.find();
        res.json(customers);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

module.exports = router;
