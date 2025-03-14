import { Router } from "express";
import { Producto } from "../models/Estructuras.js";

const NuevoProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, cantidad } = req.body;
    const producto = new Producto({ nombre, descripcion, precio, cantidad });
    await producto.save();
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

const ObtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

const ActualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, cantidad } = req.body;
    const producto = await Producto.findByIdAndUpdate(id, {
      nombre,
      descripcion,
      precio,
      cantidad,
    });
    res.json({ message: "Producto actualizado" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

const EliminarProducto = async (req, res) => {
  try{
    const { id } = req.params;
  await Producto.findByIdAndDelete(id);
  res.json({ message: "Producto eliminado" });
  }catch(error){
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};

const router = Router();

router.post("/nuevo", NuevoProducto);
router.get("/obtener", ObtenerProductos);
router.put("/actualizar/:id", ActualizarProducto);
router.delete("/eliminar/:id", EliminarProducto);

export default router;
