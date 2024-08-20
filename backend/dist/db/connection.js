"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const con = mysql.createConnection({
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
