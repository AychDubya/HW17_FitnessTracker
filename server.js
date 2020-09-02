const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const MONGODB_URI = 'mongodb+srv://aychdub:fordtempo@cluster0.evirm.mongodb.net/<dbname>?retryWrites=true&w=majority';

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
   });

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
