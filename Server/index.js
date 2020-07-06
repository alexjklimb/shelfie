const express = require('express');
require("dotenv").config();
const app = express();
app.use(express.json());
const mc = require("./contoller");
const massive = require("massive");
massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
    .then(dbInstance => {
        app.set("db", dbInstance);
        console.log('RUNNING')
      })
      .catch(err => console.log(err));
    
    app.use(express.json());
app.post("/api/inventory", mc.create);
app.get("/api/inventory", mc.getAll);
app.delete("api/inventory/:id", mc.delete);


app.listen(process.env.SERVER_PORT, ()=> console.log(`server is running on ${process.env.SERVER_PORT}`));