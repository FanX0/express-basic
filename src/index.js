import express from "express";
import userRoutes from "./routes/user.routes.js";
import requestRoutes from "./routes/request.routes.js";

export const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/request", requestRoutes);

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
