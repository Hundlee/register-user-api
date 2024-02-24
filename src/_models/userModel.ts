import prisma from "../_prisma";
async function getUser(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (user.role === "ADMIN") {
            console.log("Usuário é um administrador");
        } else {
            console.log("Usuário não é um administrador");
        }
    } catch (error) {
        console.error("Erro ao obter usuário:", error);
    }
}

getUser("id-do-usuario");
