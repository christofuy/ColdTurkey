const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//middleware
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(require('./middleware/authjwt'));

//routes
app.use('/api/user', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/date', require('./routes/date'))

app.listen(port, () => console.log('listening on port ' + port));
