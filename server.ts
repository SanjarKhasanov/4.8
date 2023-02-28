import express, { Express } from "express";
const server: Express = express();

server.use(express.json());
server.use(express.urlencoded());

let count: number = 0;
let users: string[] = [];

server.get("/users", (req, res) => {
    res.status(200).send(`Users count: ${count}\nUsers list: [${users}]`);
})

server.post("/users", (req, res) => {
    const name:string = req.body.user
    users.push(name);
    count++;
    res.status(200).send("User saved!");
})

server.listen(5050, () => {
    console.log("Server is working...");
})