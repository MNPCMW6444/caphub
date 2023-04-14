import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";
import VC from "./models/vcModel";

import founderRouter from "./routers/founderRouter";
import Lender from "@models/lenderModel";

const app = express();
const port = process.env.PORT || 6555;

dotenv.config();

let mainDbStatus = false;

const connectToDBs = () => {
  try {
    mongoose.connect("" + process.env.SAFE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    mainDbStatus = true;
  } catch (e) {
    console.error(e);
    mainDbStatus = false;
  }
  if (!mainDbStatus) setTimeout(connectToDBs, 180000);
  else console.log("connected to mongo");
};

connectToDBs();

app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? ["http://localhost:5999"]
        : ["https://app.caphub-funding.com"],
    credentials: true,
  })
);

app.use(cookieParser());

app.listen(port, () => console.log(`Server started on port: ${port}`));

app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));

app.use("/founder", founderRouter);

app.post("/savevc", async (req, res) => {
  try {
    const { data } = req.body;
    const newSurvey = new VC({ data });
    const mres = await newSurvey.save();
    res.json(mres);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
});

app.get("/api/lenders/suitable", async (req, res) => {
  try {
    const {
      minDryPowder,
      maxDryPowder,
      primaryInvestorType,
      hqCountry,
      sector,
    } = req.query;

    const filter: any = {};

    if (minDryPowder) filter.dryPowder = { $gte: Number(minDryPowder) };
    if (maxDryPowder)
      filter.dryPowder = { ...filter.dryPowder, $lte: Number(maxDryPowder) };
    if (primaryInvestorType) filter.primaryInvestorType = primaryInvestorType;
    if (hqCountry) filter.hqCountry = hqCountry;
    if (sector) filter.sector = sector;

    const suitableLendersCount = await Lender.countDocuments(filter);

    res.status(200).json({ suitableLendersCount });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing the request." });
  }
});
