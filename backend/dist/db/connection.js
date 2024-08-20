"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const con = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "mama123",
    database: "course_registration"
});
con.connect((err) => {
    if (err)
        throw err;
    console.log("Connected!");
});
exports.default = con;
