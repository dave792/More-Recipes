import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/routes';

// Set up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

router(app);

// Setup a default catch-all route that sends back a welcome message in JSON format
app.all('*', (req, res) => {
  res.status(404).send('The api route you requested does not exist');
});

export default app;

