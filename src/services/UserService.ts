import { User } from "../model/userModel";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {

    async createUser(user: User): Promise<User> {
        try {
            const userRepository = new UserRepository()
            const newUser = await userRepository.createUser(user)

            return newUser
        } catch (err) {
            throw new Error("Error when adding user: " + err)
        }
    }

    async list(): Promise<User[]> {
        try {
            const userRepository = new UserRepository()
            const allUsers = await userRepository.list()

            return allUsers

        } catch (err) {
            throw new Error("Error when listing all users.")
        }
    }
}