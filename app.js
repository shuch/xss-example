const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const comments = {};

app.use(cookieParser());

// 反射型 http://localhost:3000/?xss=<script>alert(1)</script>
app.get('/', (req, res) => {
  // res.set('X-XSS-Protection', '1;mode=block');
  console.log(req.cookies);
  res.cookie('token', 'abcde', { 'httpOnly': true });
  res.cookie('name', 'shuch', { maxAge: 1000 * 60 * 60 });
  res.cookie('session', '123', { 'secure': true });
  res.render('index', {
    title: 'xss examle',
    xss: req.query.xss,
  });
})

app.get('/iframe', (req, res) => {
  res.render('iframe');
})

app.get('/setComment', (req, res) => {
  res.set('X-XSS-Protection', 0);
  comments.v = req.query.comment;
  console.log('set comment req received', comments.v);
  res.send({ type: 2, msg: 'success' });
});

app.get('/getComment', (req, res) => {
  // res.json({ type: 2, msg: comments.v });
  res.send({ type: 2, msg: comments.v });
});

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('app run on port 3000');
});