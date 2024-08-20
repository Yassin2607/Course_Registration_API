"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_js_1 = __importDefault(require("../db/connection.js"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    connection_js_1.default.query('SELECT * FROM registrations', (err, results, fields) => {
        if (err) {
            return res.status(500).send('Error retrieving registrations.');
        }
        res.json(results);
    });
});
router.post('/', (req, res) => {
    const { childName, age, course, email, tel } = req.body;
    if (!childName || !age || !course || !email || !tel) {
        return res.status(400).send('Bad request, missing fields');
    }
    const query = 'INSERT INTO registrations (name, age, course, email, tel) VALUES (?, ?, ?, ?, ?)';
    connection_js_1.default.query(query, [childName, age, course, email, tel], (err, results) => {
        if (err) {
            return res.status(500).send('Error creating registration.');
        }
        res.status(201).send('Registration created successfully!');
    });
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { childName, age, course, email, tel } = req.body;
    const query = 'UPDATE registrations SET name = ?, age = ?, course = ?, email = ?, tel = ? WHERE id = ?';
    connection_js_1.default.query(query, [childName, age, course, email, tel, id], (err, results) => {
        if (err) {
            return res.status(500).send('Error updating registration.');
        }
        res.send('Registration updated successfully!');
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM registrations WHERE id = ?';
    connection_js_1.default.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error deleting registration.');
        }
        res.send('Registration deleted successfully!');
    });
});
exports.default = router;
