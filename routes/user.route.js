import { Router } from "express";

const userRouter = Router();

userRouter.get('/users', (req, res) => res.send({body: {title: 'Get all users'}}));
userRouter.get('/:id', (req, res) => res.send({body: {title: 'Get user details'}}));
userRouter.post('/', (req, res) => res.send({body: {title: 'Create a new user'}}));
userRouter.put('/:id', (req, res) => res.send({body: {title: 'Update a user '}}));
userRouter.delete('/:id', (req, res) => res.send({body: {title: 'Delete a user'}}));


export default userRouter;

