import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import notFound from "./middleware/notFound.middleware";
import errorHandler from "./middleware/error.middleware";
const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);
export default app;