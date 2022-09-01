require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(cors(corsOptions));
app.options("*", cors());

const port = 5000;

app.use("/api", require("./route"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
