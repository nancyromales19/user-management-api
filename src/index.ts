import express from "express";
import { AppDataSource } from "./ormconfig";
import userRoutes from "./routes/user";

const app = express();
app.use(express.json());


AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        app.use("/users", userRoutes);

        app.listen(3000, () => console.log("Server running on port 3000"));
    })
    .catch((error) => console.log(error));
