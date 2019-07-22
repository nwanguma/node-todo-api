const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  const db = client.db("TodoApp");
  if (err) {
    return "Unable to connect to the store";
  }
  console.log("Connected to store");
  db.collection("newtodos")
    .find()
    .count()
    .then(
      count => {
        console.log(`Todos count: ${count}`);
      },
      err => {
        console.log("Failed to get count", err);
      }
    );
});
