import mongoose from "mongoose";

const EstructuraUsuario = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    tipo: { type: String, required: true }
}, { timestamps: true });

const EstructuraProducto = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true }
}, { timestamps: true });

const EstructuraContador = new mongoose.Schema({
    contador: { type: Number, default: 0 }},
    { timestamps: true }
);

const Usuario = mongoose.model("Usuario", EstructuraUsuario);
const Producto = mongoose.model("Producto", EstructuraProducto);
const Contador = mongoose.model("Contador", EstructuraContador);

export { Usuario, Producto, Contador };