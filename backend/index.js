require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require('./routes/AuthRoute');
const User = require("./model/UserModel");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ Setup middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// ✅ Holdings & Positions
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ✅ Orders
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  try {
    let newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();  // ✅ Add await for safety
    res.send("Order placed");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error placing order");
  }
});

// ✅ Auth routes
app.use("/api/auth", authRoute);

// ✅ Connect DB and start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
