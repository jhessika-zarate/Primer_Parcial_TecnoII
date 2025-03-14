console.log('Correr el proyecto con "npm start" y "npm run dev " abrir en el navegador http://localhost:3000');
import express from 'express';



const app = express();


app.get('/', (req, res) => {
    res.send('Hola Mundo');
}
);


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
    console.log('http://localhost:3000');
}

);
export default app;