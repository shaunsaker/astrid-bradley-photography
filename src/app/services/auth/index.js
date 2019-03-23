import signInAnonymously from './signInAnonymously';
import signInWithEmail from './signInWithEmail';
import signOut from './signOut';

const auth = {
  signInAnonymously,
  signInWithEmail,
  signOut,
};

export { signInAnonymously, signInWithEmail, signOut };

export default auth;
