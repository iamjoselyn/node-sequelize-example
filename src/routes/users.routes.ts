import { Router } from 'express';
import { userController } from '../controllers/users.controllers';

class UsersRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', userController.index);
        this.router.get('/info', );
    }
}

export const userRoutes = new UsersRoutes();

// COMO TESTAR LAS RUTAS http://localhost:3000/users/info
// COMO TESTAR LAS RUTAS http://localhost:3000/users