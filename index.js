const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes =require('./routers/todos');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
    defautLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(todoRoutes);
app.use(express.static(path.join(__dirname, 'public')));

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
