if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import passport from 'passport';
import express from 'express';
import bcrypt from 'bcrypt';
import flash from 'express-flash';
import session from 'express-session';

import { initialize, User } from './passport-config';
const app = express();

initialize(
  passport,
  (email: string) => users.find((user) => user.email === email),
  (id: string) => users.find((user) => user.id === id)
);

const users: User[] = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkAuthenticated, (req, res) => {
  const user = req.user as User;
  res.render('index.ejs', { name: user.name });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect('/login');
  } catch (e) {
    res.redirect('/register');
  }
  console.log(users);
});

function checkAuthenticated(req: any, res: any, next: any) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req: any, res: any, next: any) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }

  return next()
}

app.listen(8000);
