import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mama123",
    database: "course_registration"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

export default con;