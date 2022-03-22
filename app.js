const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;
const User = require("./models/User");

// const mongoose = require("mongoose");

app.use(express.json());

app.get("/api/get", (req, res) => {
  User.find()
    .then((data) => {
      res.json({ message: "success", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

mongoose
  .connect(
    "mongodb+srv://hrishgore111:utchK0sUppLPvO8t@cluster0.oatws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("connection is success");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/api/save", (req, res) => {
  const user = new User({
    name: req.body.name,

    age: req.body.age,

    place: req.body.place,
  });

  user.save().then((data) => {
    res.json({ message: "success", data: data });
  });
});

app.delete("/api/delete/:deleteage", (req, res) => {
  const { deleteage } = req.params;
  User.find({ age: deleteage })
    .remove()
    .then((data) => {
      res.json({ message: "success", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.delete("/api/delete/:id", (req, res) => {
//   const { id } = req.params;
//   User.find({ _id: id })
//     .remove()
//     .then((data) => {
//       res.json({ message: "success", data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(port, () => {
  console.log("server is running" + port);
});
