const { MongoClient, ObjectID } = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server")
  }
  console.log("Connected to MongoDB server")
  const db = client.db("TodoApp")

  //deleteMany
  db.collection("Todos")
    .deleteMany({ text: "Do stuff" })
    .then(result => {
      console.log(result)
    })

  //deleteMany
  db.collection("Todos")
    .deleteOne({ text: "Walk your dog" })
    .then(result => {
      console.log(result)
    })

  //findOneAndDelete
  db.collection("Todos")
    .findOneAndDelete({ completed: true })
    .then(result => {
      console.log(result)
    })

  // client.close()
})
