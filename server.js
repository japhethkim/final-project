const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./db');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/addLoan', (req, res) => {
    const { borrower, amount, dueDate } = req.body;
    const sql = `INSERT INTO loans (borrower, amount, dueDate) VALUES (?, ?, ?)`;
    connection.query(sql, [borrower, amount, dueDate], (err, result) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

app.get('/getLoans', (req, res) => {
    const sql = 'SELECT * FROM loans';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
