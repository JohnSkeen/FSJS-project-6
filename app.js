const express = require('express');

const app = express();

// setting up static for public files
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

// setting up routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');


// about and index could've easily just been placed in this file, but I feel like it is good habit to get used to pulling out the routes!
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

// Error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log("You shall not pass! Well, at least not to this URL.")
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

// App start with a console log
app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
