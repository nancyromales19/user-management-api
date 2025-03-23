import { DataSource } from "typeorm";
import { User } from "./entities/User"; 

const databaseName = "user-management-api";

async function ensureDatabaseExists() {
   
    const tempDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "mysql",
    });

    await tempDataSource.initialize();
    console.log("Checking if database exists:", databaseName);

    await tempDataSource.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
    
    console.log(`Database '${databaseName}' is ensured.`);
    await tempDataSource.destroy();
}


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: databaseName,
  synchronize: true,
  logging: true,
  entities: [User],
});


ensureDatabaseExists().then(() => {
    console.log("Initializing AppDataSource...");
    AppDataSource.initialize()
        .then(() => console.log("Database connected successfully!"))
        .catch(error => console.error("Database connection error:", error));
});

