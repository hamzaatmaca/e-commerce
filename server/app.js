const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const connetDB = require("./db/db");
const cors = require("cors");

//Route
const registerRouter = require("./router/registerRouter");
const signRouter = require("./router/signRouter");

//PORT
const PORT = process.env.PORT || 3030;

//Dotenv
require("dotenv").config({});

//Body- Parser
app.use(express.json());

//CORS
app.use(cors());

//DB
connetDB();

//Socket
io.on("connection", (socket) => {
  console.log("Bir kullanıcı bağlandı");

  socket.emit("mesaj", "Merhaba Dünya!");

  socket.on("mesaj-al", (data) => {
    console.log("Mesaj alındı: " + data);
  });
});

//Api
app.get("/", (req, res) => {
  res.send("hi");
});

app.use(`/ecommerce-api/v1/register`, registerRouter);
app.use(`/ecommerce-api/v1/sign`, signRouter);

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
