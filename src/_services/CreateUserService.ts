class CreateUserService {
    async execute() {
        console.log("rota foi chamada");

        return { ok: true };
    }
}

export { CreateUserService };
