const { ObjectID } = require("mongodb")

const { mongoose } = require("../server/db/mongoose")
const { Todo } = require("../server/models/todo")
const { User } = require("../server/models/user")

// Todo.deleteMany({}).then(result => {
//   console.log(result)
// })

// Todo.findOneAndRemove()

Todo.findByIdAndDelete("5c763da23cbe2fa9a4e536ad").then(todo => {
  console.log(todo)
})
