var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({
  secret: '1234567890',
  saveUninitialized: true,
  resave: false
}));

var Users = [];

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.post('/signup', function (req, res) {
  if (!req.body.id || !req.body.password) {
    res.status("400");
    res.send("Invalid userCredentials")
  } else {
    Users.filter(function (user) {
      if (user.id === req.body.id) {
        res.render('signup', {
          message: "User Already Exists! Login or Choose another user id"
        });
      }
    });
    var newUser = { id: req.body.id, password: req.body.password };
    Users.push(newUser);
    console.log(Users);
    req.session.user = newUser;
    res.redirect('/protected_page')
  }
});

function checkSignIn(req, res, next) {
  if (req.session.user) {
    next();     //If session exists, proceed to page
  } else {
    var err = new Error("Not logged in!");
    console.log(req.session.user);
    next(err);  //Error, trying to access unauthorized page!
  }
}

app.get('/protected_page', checkSignIn, function (req, res) {
  console.log(req.session);
  res.render('protected_page', { id: req.session.user.id })
});

app.get('/login', function (req, res) {
  res.render('login', { message: "Hello World!" });
})

app.post('/login', function (req, res) {
  if (!req.body.id || !req.body.password) {
    res.render('login', { message: "Please enter both id and password" });
  } else {
    const result = Users.filter(user => user.id === req.body.id && user.password === req.body.password)
    if (result.length > 0) {
      req.session.user = result[0]
      res.redirect('/protected_page')
    }
    else res.render('login', { message: "ID or password are not correct." })
  }
});

app.get('/logout', function (req, res) {
  req.session.destroy(function () {
    console.log("user logged out!")
  });
  res.redirect('/login');
});

app.use('/protected_page', function (req, res, next) {
  console.log(err);
  res.redirect('/login');
});

app.listen(8080, () => {
  console.log("your app is running on port 8080");
});