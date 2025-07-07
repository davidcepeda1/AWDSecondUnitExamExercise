port = 3003
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://dcepeda:dcepeda@cluster0.fvgdrtu.mongodb.net/ComputerStore?retryWrites=true&w=majority`
,  {useNewUrlParser: true});
const db = mongoose.connection;

db.on("Error", (error) => crossOriginIsolated.error(error));
db.once("Open", ()=> console.log("System connected to MongoDB Database"));

app.use(express.json());
const customerRouter = require("./routes/mouseRoutes");

app.use("/computerstore", customerRouter);
app.listen(port, () => console.log("My computers store server is running on port -->" + port));

