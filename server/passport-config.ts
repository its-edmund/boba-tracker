import * as passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import { PassportStatic } from 'passport';
const LocalStrategy = passportLocal.Strategy;

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const initialize = (
  passport: PassportStatic,
  getUserByEmail: (email: string) => User,
  getUserById: (id: string) => User
) => {
  const authenticateUser = async (
    email: string,
    password: string,
    done: any
  ) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: 'No user with that email' });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id: string, done) => {
    return done(null, getUserById(id));
  });
};
