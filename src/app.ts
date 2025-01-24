import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app = express();

// Parser
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Biker Zone is running");
});

// Global error handler
app.use(globalErrorHandler);

// API not fund handler
app.use(notFound);

export default app;
