import { Router, Request, Response } from 'express';
import connection from '../db/connection.js';
import { MysqlError, FieldInfo } from 'mysql';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  connection.query('SELECT * FROM registrations', (err: MysqlError | null, results: any, fields: FieldInfo[] | undefined) => {
    if (err) {
      return res.status(500).send('Error retrieving registrations.');
    }
    res.json(results);
  });
});

router.post('/', (req: Request, res: Response) => {

  const { name, age, course, email, tel } = req.body;
  if (!name || !age || !course || !email || !tel) {
    return res.status(400).send('Bad request, missing fields');
  }

  const query = 'INSERT INTO registrations (name, age, course, email, tel) VALUES (?, ?, ?, ?, ?)';

  connection.query(query, [name, age, course, email, tel], (err: MysqlError | null, results: any) => {
    if (err) {
      return res.status(500).send('Error creating registration.');
    }
    res.status(201).send('Registration created successfully!');
  });
});


router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, course, email, tel } = req.body;
  const query = 'UPDATE registrations SET name = ?, age = ?, course = ?, email = ?, tel = ? WHERE id = ?';

  connection.query(query, [name, age, course, email, tel, id], (err: MysqlError | null, results: any) => {
    if (err) {
      return res.status(500).send('Error updating registration.');
    }
    res.send('Registration updated successfully!');
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const query = 'DELETE FROM registrations WHERE id = ?';

  connection.query(query, [id], (err: MysqlError | null, results: any) => {
    if (err) {
      return res.status(500).send('Error deleting registration.');
    }
    res.send('Registration deleted successfully!');
  });
});

export default router;
