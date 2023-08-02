import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import swaggerDocs from "./config/swagger.js";
import { serve, setup } from "swagger-ui-express";

//Todo : Add cors middleware

app.use("/api-docs", serve, setup(swaggerDocs));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
