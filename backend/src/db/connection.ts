import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mama123"
});

con.connect(function(err: Error) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;