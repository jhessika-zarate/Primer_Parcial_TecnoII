# 📌 Backend con Node.js, Express y MongoDB

Este es un backend construido con Node.js y Express que se conecta a una base de datos MongoDB utilizando Mongoose. Proporciona un CRUD para usuarios y productos, además de contadores de registros y operaciones.

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-repositorio.git
cd tu-repositorio
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y añade:
```env
MONGO_URI=mongodb://localhost:27017/Primer_Parcial
PORT=3000
```

### 4️⃣ Ejecutar el servidor
```bash
npm start
```
O en modo desarrollo con Nodemon:
```bash
npm run dev
```

## 📌 Endpoints

### 🔹 Usuarios
| Método | Ruta                          | Descripción |
|--------|-------------------------------|-------------|
| `POST` | `/usuario/nuevo`              | Crear usuario |
| `GET`  | `/usuario/obtener`            | Obtener todos los usuarios |
| `PUT`  | `/usuario/actualizar/:id`     | Actualizar usuario por ID |
| `DELETE` | `/usuario/eliminar/:id`     | Eliminar usuario por ID |

### 🔹 Productos
| Método | Ruta                          | Descripción |
|--------|-------------------------------|-------------|
| `POST` | `/producto/nuevo`              | Crear producto |
| `GET`  | `/producto/obtener`            | Obtener todos los productos |
| `PUT`  | `/producto/actualizar/:id`     | Actualizar producto por ID |
| `DELETE` | `/producto/eliminar/:id`     | Eliminar producto por ID |

### 🔹 Contadores
| Método | Ruta          | Descripción |
|--------|--------------|-------------|
| `GET`  | `/contadores` | Obtener el número total de usuarios y productos |

### 🔹 Middleware de operaciones
| Método | Ruta          | Descripción |
|--------|--------------|-------------|
| `GET`  | `/operaciones` | Obtener el número total de operaciones realizadas |

## 📌 Pruebas
Para probar los endpoints, puedes usar **Postman** o **Insomnia**. 

🔹 **Desarrollado por:** Jhessika Zarate 🚀
