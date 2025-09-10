import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({body: {title: 'Get all subscriptions'}}));
subscriptionRouter.get('/:id', (req, res) => res.send({body: {title: 'Get subscription details'}}));
subscriptionRouter.post('/', (req, res) => res.send({body: {title: 'Create a new subscription'}}));
subscriptionRouter.put('/:id', (req, res) => res.send({body: {title: 'Update a subscription'}}));
subscriptionRouter.delete('/:id', (req, res) => res.send({body: {title: 'Delete a subscription'}}));
subscriptionRouter.get('/user/:id', (req, res) => res.send({body: {title: 'Get all subscriptions for a user'}}));
subscriptionRouter.put(':id/cancel', (req, res) => res.send({body: {title: 'Cancel a subscription'}}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({body: {title: 'Renew a subscription'}}));


export default subscriptionRouter;



