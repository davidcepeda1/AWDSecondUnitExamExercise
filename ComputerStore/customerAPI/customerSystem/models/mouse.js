const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
{
    SerialNumber: { type: String},
    Brand: { type: String},
    Model: { type: String},
    Color: { type: String},
    Type: { type: String},
    ItIsNew: { type: String},
    Price: { type: Number}
},
{ collection: "Mouse"}
);

module.exports = mongoose.model("Mouse", customerSchema);