import express from "express";
const subscribeRoute = require("./routes/subscribe");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", subscribeRoute);

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
