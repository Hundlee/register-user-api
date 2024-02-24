import prismaClient from "../_prisma";

interface CreateUserProps {
    name: string;
    email: string;
    age: string;
    description: string;
    address: { street: string; number: number };
}

class CreateUserService {
    async execute({ name, email, age, description, address }: CreateUserProps) {
        if (!name || !email || !age || !address) {
            throw new Error("Name, email and age are required");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                age,
                address,
                description,
                status: true,
            },
        });

        return user;
    }
}

export { CreateUserService };
