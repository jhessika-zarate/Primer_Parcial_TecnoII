console.log('Correr el proyecto con "npm start" y "npm run dev " abrir en el navegador http://localhost:3000');
import express from 'express';
import DatabaseConnection from './db/mongo.js';
DatabaseConnection.connect();
import { Usuario , Producto, Contador } from './models/Estructuras.js';
import userRoutes from './routes/usuariosRoutes.js';
import productRoutes from './routes/productosRoutes.js';
import middleware from './middleware.js';


const app = express();

app.use(express.json());
app.use(middleware);

app.use('/usuario', userRoutes);
app.use('/producto', productRoutes);


app.get('/contadores', async (req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();
        res.json({ usuarios: totalUsuarios, productos: totalProductos });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contadores' });
    }
});


app.get('/operaciones', async (req, res) => {
    try {
        let contador = await Contador.findOne();
        if (!contador) {
            contador = new Contador({ contador: 0 });
            await contador.save();
        }
        res.json({ operaciones: contador.contador });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las operaciones' });
    }
});


app.post('/contador', async (req, res) => {
    const contador = new Contador();
    await contador.save();
    res.json(contador);
}
);


app.get('/', (req, res) => {
    res.send('Hola Mundo');
}
);


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
    console.log('http://localhost:3000');
});
export default app;