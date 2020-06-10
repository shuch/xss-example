const express = require('express');

const app = express();

// http://localhost:3000/?xss=%3Cscript%3Ealert(1)%3C/script%3E
app.get('/', (req, res) => {
  res.set('X-XSS-Protection', 0);
  res.render('index', {
    title: 'xss examle',
    xss: req.query.xss,
  });
})

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('app run on port 3000');
});

module.exports = app;