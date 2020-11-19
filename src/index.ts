import express from 'express';
import { userRoutes } from './routes/users.routes';

// Instance the express framework
const app  = express();

//Setting the port of aplication server
app.set('port', 3000);

// Start the server, using the port defined
app.listen(app.get('port'), ()=> {
    console.log(`The srever is runing on port ${app.get('port')}`);
 
});

// Load the file routes users 
app.use('/users', userRoutes.router);