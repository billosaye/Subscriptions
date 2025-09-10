import { PORT } from "./config/env.js";
import express from "express";


import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/subscription.route.js";
import authRouter from "./routes/auth.routes.js";

import connectDB from "./database/mongodb.js";



const app = express();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Subscriptions Tracker API!");
});

  

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
