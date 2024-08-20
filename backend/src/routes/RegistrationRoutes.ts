import { Router, Request, Response } from 'express';
import connection from '../db/connection.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  connection.query('SELECT * FROM registrations', (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving registrations.');
    }
    res.json(results);
  });
});

router.post('/', (req: Request, res: Response) => {
  const { childName, age, course, email, tel } = req.body;
  const query = 'INSERT INTO registrations (childName, age, course, email, tel) VALUES (?, ?, ?, ?, ?)';

  connection.query(query, [childName, age, course, email, tel], (err, results) => {
    if (err) {
      return res.status(500).send('Error creating registration.');
    }
    res.status(201).send('Registration created successfully!');
  });
});

router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { childName, age, course, email, tel } = req.body;
  const query = 'UPDATE registrations SET childName = ?, age = ?, course = ?, email = ?, tel = ? WHERE id = ?';

  connection.query(query, [childName, age, course, email, tel, id], (err, results) => {
    if (err) {
      return res.status(500).send('Error updating registration.');
    }
    res.send('Registration updated successfully!');
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'DELETE FROM registrations WHERE id = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send('Error deleting registration.');
    }
    res.send('Registration deleted successfully!');
  });
});

export default router;