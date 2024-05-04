/* Required modules */
export const express = require('express');
export const app = express();

/* Set up the view engine */
app.set('views', './views');
app.set('view engine', 'hbs');

/* Middleware */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

/* Routes */
// TODO: Add routes here

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App listening on port ' + port);
});