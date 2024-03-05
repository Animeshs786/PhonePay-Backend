const express = require("express");
const dotenv = require("dotenv");
const paymentRoutes = require("./router/paymentRoutes");
const cors = require("cors");

dotenv.config({ path: "config.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});
//routes
app.use("/api/v1/payment", paymentRoutes);
app.use("*", (req, res, next) => {
  console.log("elsdflsf");
  next();
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
