const express = require('express');
const router = express.Router();
let DateList = require('../models/date.model.js');

router.post('/', async (req, res) => {
  const {date} = req.body;

  const doc = await DateList.findOneAndUpdate(
    {
      uid: req.uid
    },
    {
      $addToSet: {
        dates: {date},
      },
    },
    {new: true}
  );
  if (!doc) {
    const newDateList = new DateList({
      uid: req.uid,
      dates: [{date}],
    });
    newDateList.save();
  }
  res.json({doc});
});

router.get('/', async (req, res) => {
  const doc = await DateList.findOne({uid: req.uid});
  res.json({doc});
});

module.exports = router;
