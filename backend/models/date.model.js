const mongoose = require('mongoose');

//model for dates where user completes their goal
const dateSchema = mongoose.Schema({
	date: { type: Date, required: true },
});

const dateListSchema = new mongoose.Schema({
	uid: { type: String, required: true },
	dates: [dateSchema],
});

const DateList = mongoose.model('Date', dateListSchema, 'dateList');

module.exports = DateList;
