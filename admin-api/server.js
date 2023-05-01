import { crudParser } from "./crudParser/crudParser";
import ConnectDB from "./database/database";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8080;

//Import ENV
dotenv.config({});

//Connect DB
ConnectDB();

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === `${process.env.API}/login`) {
      return await crudParser(req, "login");
    }

    if (url.pathname === `${process.env.API}/register`) {
      return await crudParser(req, "register");
    }
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
