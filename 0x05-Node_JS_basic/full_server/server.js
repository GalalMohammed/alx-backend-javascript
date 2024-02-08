import express from 'express';
import routes from './routes';

const app = express();

// Set up routes
app.use('/', routes);

// Set up server
app.listen(1245);

export default app;
