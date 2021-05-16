const express = require('express');
const router = express.Router();
let DateList = require('../models/date.model.js');

router.post('/', async (req, res) => {
	const { uid, date } = req.body;
	const doc = await DateList.findOneAndUpdate(
		{
			uid: uid,
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
			uid: uid,
			dates: [{ date }],
		});
		newDateList.save();
	}
	res.json({ doc });
});

module.exports = router;
