import { Request, Response, Router} from "express";
    import { AppDataSource } from "../ormconfig";
    import { User } from "../entities/User";


    const router = Router();

    router.post("/", async (req: Request, res: Response) => {
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

    router.delete("/:id", function(req: any, res: any) {
        try {
            const userId = Number(req.params.id);
            
            if (isNaN(userId)) {
                return res.status(400).json({ message: "Invalid user ID" });
            }
            
            const userRepository = AppDataSource.getRepository(User);
               
            userRepository.findOneBy({ id: userId })
                .then(function(user) {
                    if (!user) {
                        return res.status(404).json({ message: "User not found" });
                    }
                    
                    userRepository.remove(user)
                        .then(function() {
                            res.status(200).json({ message: "User deleted successfully" });
                        })
                        .catch(function(error) {
                            res.status(500).json({ message: "Error removing user", error });
                        });
                })
                .catch(function(error) {
                    res.status(500).json({ message: "Error finding user", error });
                });
        } catch (error) {
            res.status(500).json({ message: "Error processing request", error });
        }
    });

  

router.get("/", async (req, res) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = Number(req.params.id); // Convert ID to number

        if (isNaN(userId)) {
            res.status(400).json({ message: "Invalid user ID" });
            return;
        }

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { id: userId },
        });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user", error });
    }
});

router.put("/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = Number(req.params.id);
        if (isNaN(userId)) return res.status(400).json({ message: "Invalid user ID" });

        const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
        if (!user) return res.status(404).json({ message: "User not found" });

        AppDataSource.getRepository(User).merge(user, req.body);
        const updatedUser = await AppDataSource.getRepository(User).save(user);

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating user", error });
    }
});

export default router;
