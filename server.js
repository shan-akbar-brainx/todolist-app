const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', (req, res) => {
  console.log("Login Request");
  res.send({
    token: 'test123'
  });
});

app.use('/signup', (req, res) => {
    console.log(req.body);
    console.log("Signup Request");
    res.send({
      token: req.body.fullname
    });
  });

app.listen(8080, () => console.log('API is running on http://localhost:8080'));