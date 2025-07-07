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

/*
router.get('/mouse/:id', async (req, res) => {
    console.log(req.params);

    try {
        const id = Number(req.params.id);
        const customerObject = await customer.findOne({ id: id });

        if (!customerObject) {
            return res.status(404).json({ message: "Customer not found" });
        }

        let calculatedValue = null;
        if (customerObject.moneySpent !== undefined) {
            calculatedValue = customerObject.moneySpent * 1.5;
        }

        res.json({
            customer: customerObject,
            calculatedMoney: calculatedValue !== null 
                ? `${calculatedValue.toFixed(2)} (moneySpent x 1.5)` 
                : "No 'moneySpent' data to calculate"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/*
router.get('/customer/:id', async (req, res) => {
    console.log(req.params); // DEBUG: ¿Qué trae aquí?

    try {
        const id = Number(req.params.id);
        const customerObject = await customer.findOne({ id: id });

        if (!customerObject) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.json(customerObject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.post('/mouse', async (req, res) => {
    const customerObject = new customer({
        id:req.body.id,
        name: req.body.name,
        age: req.body.age, 
        moneySpent: req.body.moneySpent
    });
    try{
        const customerToSave = await customerObject.save();
        res.status(200).json(customerToSave);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
*/

module.exports = router;
