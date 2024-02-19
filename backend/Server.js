import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config({   //?dotenv configuration
  path: "./env",
});

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
