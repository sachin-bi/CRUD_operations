const express = require("express");
// const fs = require("fs");
// const mongoose = require("mongoose");
const { connectMondoDb } = require('./connection');
const {logReqRes} = require("./middlewares")
const userRouter = require("./routes/user");

// const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Connection - mongoose
connectMondoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=> console.log("MongoDB Connected!"));
//connection
// mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
//     .then(()=> console.log("MongoDB Connected!"))
//     .catch((err) => console.log("Mongo Error :(", err));


// Middleware - Plugin 

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// app.use((req, res, next) => {
//     console.log("Hello from middleware 1");
//     fs.appendFile('log.txt', `${Date.now()}: -${req.ip}- :${req.method}: ${req.path}\n`, (err, data) => {
//         next();
//     });
// });
//REST API
// app.get("/api/users")
//

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT 8000 :)`))
