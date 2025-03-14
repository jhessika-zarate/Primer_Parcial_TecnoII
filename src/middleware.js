import {Contador} from "./models/Estructuras.js";

const Middleware = async (req, res, next) => {
    try {
        let contador = await Contador.findOne();
        if (!contador) {
            contador = new Contador({ contador: 1 });
            await contador.save();
        } else {
            contador.contador++;
            await contador.save();
        }
        next(); // Continuar con la siguiente función en la cadena de middlewares
    } catch (error) {
        res.status(500).json({ error: "Error en el middleware" });
    }
};

export default Middleware;
