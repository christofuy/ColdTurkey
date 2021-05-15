const mongoose = require('mongoose');

//model for dates where user completes their goal
const dateSchema = mongoose.Schema({
	date: { type: String, required: true },
});

const Date = mongoose.model('Date', dateSchema);

module.exports = Date;
