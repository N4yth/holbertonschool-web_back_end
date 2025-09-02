import express from 'express';
import routes from './routes/index.js';

const app = express();
routes(app, process.argv[2]);
app.listen(1245, () => {});

export default app;
