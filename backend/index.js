const express = require("express");
require('dotenv').config()
const app = express();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);


const run = async () => {
  try {
    await client.connect();
    const users = client.db("carDoctor").collection("users");
    const services = client.db("carDoctor").collection("services");

    //manege service
    app.get('/services', async (req, res) => {
      const service = services.find()
      const sendServices = await service.toArray()
      res.send(sendServices)
    })

    app.post('/services', async (req, res) => {
      
    })

    // manege user 
    app.get('/user', async (req, res) => {
        const user =  users.find()
        const sendData = await user.toArray()
        res.send(sendData)
    })

    app.post("/user", async (req, res) => {
      const user = await req.body;
      const result = await users.insertOne(user);
      res.send(result)
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {

  }
};
run().catch(console.dir)

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("server is live");
});
