require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Use environment variables for port and Mongo URI
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3003;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("Error", (error) => console.error(error));
db.once("Open", () => console.log("System connected to MongoDB Database"));

app.use(express.json());
const customerRouter = require("./routes/mouseRoutes");

app.use("/computerstore", customerRouter);
app.listen(port, () => console.log(`My computers store server is running on port --> ${port}`));
