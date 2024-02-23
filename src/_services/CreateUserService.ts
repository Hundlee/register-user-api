import prismaClient from "../prisma";

interface CreateUserProps {
    name: string;
    email: string;
    age: string;
    description: string;
}

class CreateUserService {
    async execute({ name, email, age, description }: CreateUserProps) {
        if (!name || !email || !age) {
            throw new Error("Name, email and age are required");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                age,
                description,
                status: true,
            },
        });

        return user;
    }
}

export { CreateUserService };
