const firebase = require('firebase');
const express = require('express');
const _ = require('lodash');

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSENGING_SENDER_ID
};

firebase.initializeApp(config);

const Router = express.Router;
const firebaseDB = Router();
const db = firebase.database();

firebaseDB.post('/create_challenge', (req, res) => {
  const challenge = req.body.challenge;
  const user = req.body.user;
  let challenges = [];

  db.ref('/users/' + user).on('value', snapshot => {
    challenges = (snapshot.val().challenges);
  });

  challenges = _.concat(challenges, challenge);

  db.ref('users/' + user).set({
    challenges: challenges
  })
  .then(() => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ success: 'true'}));
    }
  );
});

module.exports = firebaseDB;
