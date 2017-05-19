/**
* Botkit Storage Firebase Admin Driver Implementation
*
* Follow the instructions from Firebase Documentation to setup firebase-admin (https://firebase.google.com/docs/admin/setup).
* Replace the value of serviceAccount, databaseURL and databaseAuthVariableOverride.serverKey
* with your data.
*
* Don't forget to set up your server key on database rules.
*
* https://gist.github.com/gcfabri/67ab949190b9de2f311519b5e86acde9#file-botkit-storage-firebase-admin-js
*/

const firebase = require('firebase-admin');
const config = require('./config');

const { firebaseUri, firebaseServiceAccount } = config;

const firebaseConfig = {
  databaseURL: firebaseUri,
  credential: firebase.credential.cert(firebaseServiceAccount),
  databaseAuthVariableOverride: {
    serverKey: firebaseServiceAccount.privateKey,
  },
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();
const rootRef = database.ref();
const channelsRef = rootRef.child('channels');
const teamsRef = rootRef.child('teams');
const usersRef = rootRef.child('users');

module.exports = {
  teams: {
    get: (id, cb) => (teamsRef.child(id).once('value')).then(cb),
    save: (data, cb) => (teamsRef.child(data.id).update(data)).then(cb),
    delete: (id, cb) => (teamsRef.child(id).remove()).then(cb),
    all: cb => (teamsRef.once('value')).then(cb),
  },
  channels: {
    get: (id, cb) => (channelsRef.child(id).once('value')).then(cb),
    save: (data, cb) => (channelsRef.child(data.id).update(data)).then(cb),
    delete: (id, cb) => (channelsRef.child(id).remove()).then(cb),
    all: cb => (channelsRef.once('value')).then(cb),
  },
  users: {
    get: (id, cb) => (usersRef.child(id).once('value')).then(cb),
    save: (data, cb) => (usersRef.child(data.id).update(data)).then(cb),
    delete: (id, cb) => (usersRef.child(id).remove()).then(cb),
    all: cb => (usersRef.once('value')).then(cb),
  },
};
