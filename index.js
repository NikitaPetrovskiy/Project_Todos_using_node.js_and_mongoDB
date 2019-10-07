const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

async function start() {
  try {
      mongoose.connect('mongodb+srv://Nikita:1561@cluster0-fprxz.mongodb.net/todos', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
      });
      app.listen(PORT, () => {
          console.log('Server has been started');
      });
  }  catch (e) {
      console.log(e);
  };
};

start();
