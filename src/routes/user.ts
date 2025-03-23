import { Router } from "express";
import { AppDataSource } from "../ormconfig";
import { User } from "../entities/User";

    const router = Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);

            const newUser = userRepository.create({ name, email, password });
            await userRepository.save(newUser);

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});

export default router;

router.get("/", async (req, res) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

