import { DataSource } from "typeorm";
import { User } from "./entities/User"; // Ensure correct import

const databaseName = "user-management-api";

async function ensureDatabaseExists() {
    // Temporary connection to MySQL system database
    const tempDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "mysql", // Connect to MySQL default system database
    });

    await tempDataSource.initialize();
    console.log("Checking if database exists:", databaseName);

    await tempDataSource.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
    
    console.log(`Database '${databaseName}' is ensured.`);
    await tempDataSource.destroy();
}

// Main database connection
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

// Ensure database exists first, then connect
ensureDatabaseExists().then(() => {
    console.log("Initializing AppDataSource...");
    AppDataSource.initialize()
        .then(() => console.log("Database connected successfully!"))
        .catch(error => console.error("Database connection error:", error));
});
