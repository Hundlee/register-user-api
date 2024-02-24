import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../_services/CreateUserService";

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

        const userService = new CreateUserService();

        const user = await userService.execute({
            name,
            email,
            age,
            description,
            address,
        });

        reply.send(user);
    }
}

export { CreateUserController };
