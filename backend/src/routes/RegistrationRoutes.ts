import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Registration route is working!');
});

router.post('/', (req: Request, res: Response) => {
  res.send('post route is working!');
});

router.put('/', (req: Request, res: Response) => {
  res.send('put route is working!');
});

router.delete('/', (req: Request, res: Response) => {
  res.send('delete route is working!');
});

export default router;