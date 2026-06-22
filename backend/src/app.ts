// import express = require("express")
// import globalErrorHandler = require("./middleware/globalErrorHandler")
// import noteRoute = require("./note/noteRoutes")

// const app =  express()


// app.use("/api/notes", noteRoute)
// //complete localhost:4000/api/notes
// app.use(globalErrorHandler)
// export = app
// import type { Request, Response, NextFunction } from "express";
// import cors = require("cors");

// import express = require("express");
// import globalErrorHandler = require("./middleware/globalErrorHandler");
// import noteRoutes = require("./note/noteRoutes");
// import envConfig = require("./config/config");
// import path= require("path")

// //cors configuration


// const app = express();

// // IMPORTANT: parse JSON body
// app.use(express.json());

// // support both CommonJS (module.exports = router) and ES default export (export default router)

// app.use("/api/notes", noteRoutes);

// app.use(express.json())

// //imgae puvlic
// app.use(express.static("./src/uploads/"))

// // optional 404 handler
// app.use((req:Request, res:Response) => {
//   res.status(404).json({ message: "Route not found" });
// });

// // global error handler (must be last)
// app.use(globalErrorHandler);

// //cors configuration
// app.use(cors({
//   origin: envConfig.frontendurl
// }))

// export = app;

import type { Request, Response } from "express";
import express = require("express");
import cors = require("cors");
import path = require("path");

import globalErrorHandler = require("./middleware/globalErrorHandler");
import noteRoutes = require("./note/noteRoutes");
import envConfig = require("./config/config");

const app = express();

/* ------------------ MIDDLEWARE ORDER (IMPORTANT) ------------------ */

// 1. CORS FIRST
app.use(
  cors({
    origin: envConfig.frontendurl,
  })
);

// 2. JSON parser
app.use(express.json());

/* ------------------ ROUTES ------------------ */
app.use("/api/notes", noteRoutes);

/* ------------------ STATIC FILES (FIX FOR IMAGES) ------------------ */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ------------------ 404 HANDLER ------------------ */
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

/* ------------------ ERROR HANDLER ------------------ */
app.use(globalErrorHandler);

export = app;



