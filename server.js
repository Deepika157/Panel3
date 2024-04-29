const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Prsubmission = require('./routes/PrSubmit');
const package = require('./routes/packageDetails');
const payment = require('./routes/paymentDetails');

const app = express();

mongoose.connect('mongodb://localhost:27017/panel3')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/Prsubmit', Prsubmission);
app.use('/package2', package);
app.use('/payment2', payment);

app.get('/', (req, res) => {
    res.send('Panel3');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
