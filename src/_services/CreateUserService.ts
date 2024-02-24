import { error } from "console";
import prismaClient from "../_prisma";
import { Role } from "@prisma/client";

interface CreateUserProps {
    name: string;
    email: string;
    age: string;
    description: string;
    address: { street: string; number: number };
    role: Role;
}

class CreateUserService {
    async execute({
        name,
        email,
        age,
        description,
        address,
        role,
    }: CreateUserProps) {
        if (!name || !email || !age || !address) {
            throw new Error("Name, email, age, and address are required");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                age,
                address,
                description,
                status: true,
                role,
            },
        });

        return user;
    }
}

export { CreateUserService };
