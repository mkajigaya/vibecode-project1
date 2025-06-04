import express from 'express';
import bugRoutes from './routes/bugs';
import testCaseRoutes from './routes/testcases';
import healthRoute from './routes/health'; // ✅ Import

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
