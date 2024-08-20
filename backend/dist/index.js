import express from 'express';
import registrationRoutes from './routes/registrationRoutes.js'; // Zorg ervoor dat je de juiste extensie hebt als je JS-bestanden importeert
const app = express();
const PORT = 3000;
app.use('/api/registration', registrationRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map