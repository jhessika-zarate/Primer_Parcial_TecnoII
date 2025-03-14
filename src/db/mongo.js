import mongoose from "mongoose";

const Url_Mongo_DB = "mongodb://localhost:27017/Primer_Parcial";


class DatabaseConnection {
    static async connect() {
     const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

      try {
        await mongoose.connect(Url_Mongo_DB, options);
        console.log("Conexión exitosa con la base de datos");
        return true;
      } catch (error) {
        console.error("Error al conectar con la base de datos:", error.message);
        return false;
      }
    }
  }

  export default DatabaseConnection;
