const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Data = require("../models/data");
const User = require("../models/user");

// router.get("/create", (req, res) => {
//   console.log("req");
// })

router.post("/create", (req, res) => {
  var num = req.body.questionNo
  for (let i = 1; i <= num; i++) {
    var correct = req.body['group' + i];
    Data.create({
      questionNo: req.body['number' + i],
      question: req.body['question' + i],
      answers: [
        req.body['option1' + i],
        req.body['option2' + i],
        req.body['option3' + i],
        req.body['option4' + i],
      ],
      correct: correct,
      set: req.body.setNO,
    }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved question(s) to database");
        res.redirect(`/share/${req.body.setNO}`);
      }
    })
  }

})

router.post('/init_create', (req, res) => {
  User.create({
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
        req.url = req.url;
        // res.redirect('/create/quiz');  
      }
    }
  );
});

router.get('/quiz/:set', async (req, res) => {
  try {
    quiz_data = await Data.find({ set: req.params.set });
    user_data = await User.find({ set: req.params.set });
    res.json({
      user_data: user_data,
      quiz_data: quiz_data
    });
    // console.log(req.body['title']);
    // req.body.title = user_data.title;
    // req.body.master = user_data.name;
    // req.body.question = quiz_data.question;
  } catch {
    res.status(400, { message: "Unknown error" });
  }
})

module.exports = router;
