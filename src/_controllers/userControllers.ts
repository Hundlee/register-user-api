import prisma from "../_prisma";

async function createAdminUser() {
    try {
        const adminUser = await prisma.user.create({
            data: {
                name: "Admin User",
                email: "admin@example.com",
                address: {
                    street: "Main Street",
                    number: 10,
                },
                age: "20",
                status: true,
                role: "ADMIN",
            },
        });

        console.log("Usuário administrador criado:", adminUser);
    } catch (error) {
        console.error("Erro ao criar usuário administrador:", error);
    }
}

createAdminUser();
