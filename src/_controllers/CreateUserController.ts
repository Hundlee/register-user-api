import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../_services/CreateUserService";
import { Role } from "@prisma/client";

class CreateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, age, description, address } = request.body as {
            name: string;
            email: string;
            age: string;
            description: string;
            address: {
                street: string;
                number: number;
            };
        };

        let role: Role = Role.USER;

        if (email === "admin@gmail.com") {
            role = Role.ADMIN;
        }

        const userService = new CreateUserService();

        const user = await userService.execute({
            name,
            email,
            age,
            description,
            address,
            role,
        });

        reply.send(user);
    }
}

export { CreateUserController };
