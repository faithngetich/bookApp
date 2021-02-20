import firebase from 'firebase';

const auth = {
  registerUser(data) {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
  },
};

export default auth;
