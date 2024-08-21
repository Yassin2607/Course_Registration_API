const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mama123",
    database: "course_registration"
});

con.connect((err: any) => {
    if (err) throw err;
    console.log("Connected!");
});

export default con;