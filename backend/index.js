require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/build')));

const launches = require("./src/routes/launch.route");

app.use("/", launches);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/build/index.html'))
// });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});