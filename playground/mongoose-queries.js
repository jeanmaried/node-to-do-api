const { ObjectID } = require("mongodb")
const { mongoose } = require("../server/db/mongoose")
const { Todo } = require("../server/models/todo")
const { User } = require("../server/models/user")

const id = "5c73e0816d1804d6ed85f7e4"
const userId =
  // if(!ObjectID.isValid(id)) {
  //   console.log("Id not valid")
  // }

  // Todo.find({
  //   _id: id
  // }).then(todos => {
  //   console.log("Todos", todos)
  // })

  // Todo.findOne({
  //   _id: id
  // }).then(todo => {
  //   console.log("Todo", todo)
  // })

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return console.log("Id not found")
      }
      console.log("Todo by id", todo)
    })
    .catch(e => console.log(e))

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log("User id not found")
    }
    console.log("User by id", JSON.stringify(user, undefined, 2))
  })
  .catch(e => console.log(e))
