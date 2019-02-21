const { MongoClient, ObjectID } = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server")
  }
  console.log("Connected to MongoDB server")
  const db = client.db("TodoApp")

  // db.collection("Todos")
  //   .find({
  //     _id: ObjectID("5c6e53363cbe2fa9a4e513df")
  //   })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos")
  //       console.log(JSON.stringify(docs, undefined, 2))
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err)
  //     }
  //   )

  // db.collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     docs => {
  //       console.log("Todos")
  //       console.log(JSON.stringify(docs, undefined, 2))
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err)
  //     }
  //   )

  db.collection("Users")
    .find({ name: "Jack" })
    .toArray()
    .then(
      docs => {
        console.log("Users")
        console.log(JSON.stringify(docs, undefined, 2))
      },
      err => {
        console.log("Unable to fetch todos", err)
      }
    )

  // client.close()
})
