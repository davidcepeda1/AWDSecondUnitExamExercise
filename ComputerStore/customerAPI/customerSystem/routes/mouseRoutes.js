const express = require("express");
const mouse = require("../models/mouse");
const router = express.Router();

router.get("/mouse", async (req, res) => {
    try{
        const mouses = await mouse.find();
        res.json(mouses);
    } catch (err){
        res.status(500).json({message: err.message})
    }
});

// PUT route to update an existing mouse record
router.put("/mouse/:id", async (req, res) => {
    try {
        // Get the ID from the URL parameters and updated data from the request body
        const { id } = req.params;
        const updatedData = req.body;

        // Find the mouse record by ID and update it
        const updatedMouse = await mouse.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedMouse) {
            return res.status(404).json({
                status: "error",
                message: `Mouse with ID ${id} not found`
            });
        }

        res.status(200).json({
            status: "success",
            message: "Mouse record updated successfully",
            data: updatedMouse
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            details: err.message
        });
    }
});


module.exports = router;
