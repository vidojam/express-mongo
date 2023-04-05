import { db } from "./connectDb.js";
import { ObjectId } from "mongodb"; // OjectId is a class/must a new ObjectId as in the bottom

const coll = db.collection("plants");

// CRUD GET
export async function getAllPlants (req, res) {
  const plants = await coll.find({}).toArray();
  res.send(plants);
}

// CRUD: POST
export async function  addPlant (req, res) {
  const newPlant = req.body;
  await coll.insertOne(newPlant) // sending back json!
  res.status(201).send({message: "new plant added plant"});
}

// CRUD DELETE
export async function deletePlant (req, res) {
  const docId = {"_id": new ObjectId(req.params.docId )};

  await coll.deleteOne( docId );
  res.status(201).send( { message: "plant has been sadly deleted"});
}

export async function updatePlant(req, res) {
  const docId = { "_id": new ObjectId(req.params.docId) };
  const updatePlant = req.body;

  await coll.findOneAndUpdate(
    { "_id": docId },
    {$set: {"species": "Buggy"}}
  )
  res.status(201).send( {mesaage: "plant has been updated"});
}

