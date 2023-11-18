const express = require('express');
const mysql = require("mysql");

const app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.get('/', (req, res) => res.sendfile('./html/index.html'));

const bs = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bs",
    password: ""
});
bs.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log('Подключение к серверу MySQL успешно установлено');
    }
});

app.get('/qq', function (req, res) {
    let query;
    query = `SELECT * FROM logo`;
    bs.query(query, (err, result, field) => {
        console.log(result)
        res.send(result);
    })
});

app.listen(8080, () => console.log('Server started on port 8080'));
