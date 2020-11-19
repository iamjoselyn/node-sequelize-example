import { Request, Response} from 'express';

class UsersController {
    index (req: Request, res: Response) {
        res.send('OK')
    }

}
export const userController = new UsersController();