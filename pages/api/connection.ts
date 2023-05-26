import { MongoClient } from "mongodb";

// const uri = "mongodb://localhost:27017"

const getDB = async () => {
  const uri =
    "mongodb+srv://hiteshpawar682000:Hitesh%40123@cluster0.fzj2jtf.mongodb.net/";

  const options: any = { useUnifiedTopology: true, useNewUrlParser: true, };

  let client;

  let db;

  if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  client = new MongoClient(uri, options);

  await client.connect();

  db = client.db("NextJS_Demo");

  return db;
};

// Export a module-scoped MongoClient promise. By doing this in a

// separate module, the client can be shared across functions.

export default getDB;
