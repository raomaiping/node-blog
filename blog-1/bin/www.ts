const http = require("http");

const PORT:number = 8000;

const serverHandle = require("../app");

const server = http.createServer(serverHandle);

server.listen(PORT);
