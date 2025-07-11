import "./scheduler";
import express from "express";

const subscribeRoute = require("./routes/subscribe");
const getDailyHadithRoute = require("./routes/get-daily-hadith");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["POST"],
    credentials: false,
  }),
);

app.use(express.json());
app.use("/api", subscribeRoute);
app.use("/api", getDailyHadithRoute);

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
