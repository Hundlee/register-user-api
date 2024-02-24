import prismaClient from "../prisma";

interface DeleteUserProps {
    id: string;
}

class DeleteUserService {
    async execute({ id }: DeleteUserProps) {
        if (!id) {
            throw new Error("Solicitação Invalida.");
        }

        const findUser = await prismaClient.user.findFirst({
            where: {
                id: id,
            },
        });

        if (!findUser) {
            throw new Error("Usuário não encontrado.");
        }

        await prismaClient.user.delete({
            where: {
                id: findUser.id,
            },
        });

        return { message: "Deletado com sucesso!" };
    }
}

export { DeleteUserService };
