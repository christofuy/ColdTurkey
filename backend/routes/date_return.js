const express = require('express');
const router = express.Router();
let DateList = require('../models/date.model.js');

router.get('/', async (req, res) => {
	const doc = await DateList.findOne({ uid: req.uid });
	res.json({ doc });
});

module.exports = router;
