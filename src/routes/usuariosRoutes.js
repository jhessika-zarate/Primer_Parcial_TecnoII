import { Router } from 'express';
import { Usuario } from '../models/Estructuras.js';

const NuevoUsuario = async (req, res) => {
   try{
    const { nombre, apellido, correo, contrasena, tipo } = req.body;
    const usuario = new Usuario({ nombre, apellido, correo, contrasena, tipo });
    await usuario.save();
    res.json(usuario);
   }catch(error){
    res.status(500).json({ error: "Error al crear el usuario" });
   }

}

const ObtenerUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }catch(error){
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
}


const ActualizarUsuario = async (req, res) => {
   try{
    const { id } = req.params;
    const { nombre, apellido, correo, contrasena, tipo } = req.body;
    await Usuario.findByIdAndUpdate(id, { nombre, apellido, correo, contrasena, tipo });
    res.json({ message: "Usuario actualizado" });
    
   }
    catch(error){
     res.status(500).json({ error: "Error al actualizar el usuario" });
    }
    

}

const EliminarUsuario = async (req, res) => {
  try{  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.json({ message: "Usuario eliminado" });}
    catch(error){
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
}


const router = Router();

router.post('/nuevo', NuevoUsuario);
router.get('/obtener', ObtenerUsuarios);
router.put('/actualizar/:id', ActualizarUsuario);
router.delete('/eliminar/:id', EliminarUsuario);


export default router;
