import express from 'express';
import bugRoutes from './routes/bug.routes';
import testCaseRoutes from './routes/testCase.routes';

const app = express();

app.use(express.json());

app.use('/api/bugs', bugRoutes);
app.use('/api/testcases', testCaseRoutes);

export default app;
