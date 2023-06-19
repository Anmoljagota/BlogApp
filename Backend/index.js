const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./Config/db");
const { Signuproute } = require("./Routes/Signup.route");
const {Loginroute}=require("./Routes/Login.route")
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", Signuproute);
app.use("/",Loginroute);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(`something wrong with this type of error ${err}`);
  }
  console.log(`server is listening on port ${process.env.PORT}`);
});
