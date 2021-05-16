const express = require('express');
const router = express.Router();
let DateList = require('../models/date.model.js');
let User = user.model.js;

router.post('/', (req, res) => {
	const { date } = req.body;

	const doc = await DateList.findOneAndUpdate(
		{
			uid: req.uid,
		},
		{
			$addToSet: {
				dates: { date },
			},
		},
		{ new: true }
	);
	if (!doc) {
		const newDateList = new DateList({
			uid: req.uid,
			dates: [{ date }],
		});
		newDateList.save();
	}
	res.json({ doc });
});

module.exports = router;
