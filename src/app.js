import express from "express";
import userRoutes from "./routes/user.routes.js";
import requestRoutes from "./routes/request.routes.js";

export const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/request", requestRoutes);
