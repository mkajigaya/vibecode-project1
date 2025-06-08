import express from 'express';
import bugRoutes from './routes/bug.routes';
import testCaseRoutes from './routes/testCase.routes';
import healthRoute from './routes/health.routes'; // ✅ Import

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Routes
app.use('/api/bugs', bugRoutes);
app.use('/api/testcases', testCaseRoutes);
app.use('/health', healthRoute); // ✅ Register

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
