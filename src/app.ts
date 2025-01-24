import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application routes
app.use("/biker-zone/api", router);

app.get("/", (req, res) => {
  res.send("Biker Zone is running");
});

// Global error handler
app.use(globalErrorHandler);

// API not fund handler
app.use(notFound);

export default app;
