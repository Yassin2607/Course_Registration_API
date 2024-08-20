import express from 'express';
import RegistrationRoutes from './routes/RegistrationRoutes';
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/api/registrations', RegistrationRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const cleanup = () => {
  console.log("Cleaning up...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0); // Exit the process
  });
}

process.on('exit', cleanup);
