const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  const db = client.db("TodoApp");
  if (err) {
    return "Unable to connect to the store";
  }
  console.log("Connected to store");
  db.collection("newtodos").insertOne(
    {
      text: "Todo two",
      completed: false,
      _id: new ObjectID()
    },
    (err, result) => {
      if (err) {
        return console.log("Error adding data to the database", err);
      }
      console.log(
        JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2)
      );
    }
  );
  client.close();
});

//Currently unclear about what the digits that make up the id actually represent
//I  know the first 4 digits represent the time stamp
//I think this is possible because the long ass timestamp is converted to the 4 digits with base 36
//////////////To be investigated
