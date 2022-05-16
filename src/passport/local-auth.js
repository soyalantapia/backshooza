const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/Register');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({'email': email});
  if(user) {
    console.log("Error 110")
    return done(null, false, { message: 'Email repetido' });
  } else {
    const newUser = new User();
    newUser.name = req.param('name');
    newUser.rol = req.param('rol');
    newUser.phone = req.param('phone');
    newUser.partiesTypeOfPartyUser = req.param('partiesTypeOfPartyUser');
    newUser.drinkTypeOfPartyUser = req.param('drinkTypeOfPartyUser');
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
  
    console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({email: email});
  if(!user) {
    return done(null, false, { message: 'Incorrect username or password.' });
    }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
  }
  return done(null, user);
}));