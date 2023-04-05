import { db } from "./connectDb.js";
const coll = db.collection("plants");

export async function getAllPlants (req, res) {
  const plants = await coll.find({}).toArray();
  res.send(plants);
}

export async function  addPlant (req, res) {
  const newPlant = req.body;
  await coll.insertOne(newPlant) // sending back json!
  res.status(201).send({message: "new plant added plant"})
}

