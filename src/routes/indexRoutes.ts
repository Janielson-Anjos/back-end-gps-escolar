import express from 'express';
import escolaRoutes from './escolaRoutes';


const indexRouter = express.Router();

indexRouter.use('/escola', escolaRoutes);

export default indexRouter;