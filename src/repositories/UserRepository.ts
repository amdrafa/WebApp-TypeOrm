import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../model/userModel";
import { ICreateUserDTO, IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }
    async createUser(user: ICreateUserDTO): Promise<User> {
        const newUser = this.repository.create(user)

        await this.repository.save(newUser)

        return newUser
    }

    async list(): Promise<User[]> {

        const allUsers = this.repository.find()

        return allUsers
    }

}
