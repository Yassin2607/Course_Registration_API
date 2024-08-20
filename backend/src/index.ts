import express from 'express';
import RegistrationRoutes from './routes/RegistrationRoutes';

const app = express();
const PORT = 3000;

app.use('/api/registrations', RegistrationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
