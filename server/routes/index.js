const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Data = require("../models/data");
const User = require("../models/user");

router.post("/create", (req, res) => {
  var correct = req.body.group1;
  Data.create(
    {
      question_no: req.body.number,
      question: req.body.question,
      options: [
        req.body.option1,
        req.body.option2,
        req.body.option3,
        req.body.option4,
      ],
      correct: correct,
      set: req.body.set,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        req.body.hidden = "done";
        console.log("Successfully saved to database");
      }
    }
  );
});

router.post("/submit", (req, res) => {
  console.log(req.body.name);
  User.create(
    {
      name: req.body.name,
      title: req.body.title,
      set: req.body.set,
    },
    (err, result) => {
      if (err) {
        if (req.body.number <= 1) {
          console.log(err);
        }
      } else {
        console.log("Successfully saved user to database");
      }
    }
  );
});

router.get("/quiz", async (req, res) => {
  try {
    var quiz = await Data.find({ set: req.query.set });
    // res.json(quiz);
    // res.json(quiz[3].question);
    // res.json(quiz[3].options);
    quiz.forEach((question) => {
      var input = document.createElement("input");
      input.setAttribute("class", "question");
      input.setAttribute("name", "question");
      document.body.appendChild(input);
      req.body.question = question.question;
    });
  } catch {
    console.log("error");
  }
});

// router.get("/quiz", async (req, res) => {
//   try {
//     quiz = await Data.find({ set: req.query.set });
//     // req.body.title = quiz.title;
//     // req.body.master_name = quiz.name;
//     // res.json(quiz);
//     // for (let i = 0; i < quiz.length; i++) {
//     //   const element = quiz[i];
//     // }
//     console.log(req.body.question);
//     quiz.forEach((question) => {
//       question.map((data) => {
//         var input = document.createElement("input");
//         input.setAttribute("class", "question");
//         input.setAttribute("name", "question");
//         req.body.question = data;
//       });
//     });
//   } catch {
//     res.send("error");
//   }
// });

router.post("/result", (req, res) => {
  res.send("<h2>Result<h2>");
});
// router.get("/edit", (req, res) => {
//   var option = ["option1", "option2", "option3", "option4"];
//   req.body.question = "";
//   for (let i = 0; i < 3; i++) {
//     element = option[i];
//     req.body.element = "";
//   }
//   set = Data.findOne({ set: req.body.set });
//   console.log(set);
//   req.body.set = set;
//   res.redirect("localhost:5000/create");
// });

module.exports = router;
