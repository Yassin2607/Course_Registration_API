"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegistrationRoutes_1 = __importDefault(require("./routes/RegistrationRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/registrations', RegistrationRoutes_1.default);
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const cleanup = () => {
    console.log("Cleaning up...");
    server.close(() => {
        console.log("Server closed");
        process.exit(0); // Exit the process
    });
};
process.on('exit', cleanup);
