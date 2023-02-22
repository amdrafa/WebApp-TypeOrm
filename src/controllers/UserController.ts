import { Request, Response } from "express";
import { User } from "../model/userModel";
import { UserService } from "../services/UserService";

export class UserController {



    async create(request: Request, response: Response) {

        const userService = new UserService()

        const user = new User()

        user.firstName = request.body.firstName
        user.lastName = request.body.lastName
        user.age = request.body.age

        const newUser = await userService.createUser(user)

        if (!newUser) {
            return response.status(400).json({ message: "Error when creating user." })
        }

        return response.status(200).json(newUser)
    }

    async list(request: Request, response: Response) {

        const userService = new UserService()

        const allUsers = await userService.list()

        if (!allUsers) {
            return response.status(400).json({ message: "Error when listing all users." })
        }

        return response.status(200).json(allUsers)
    }
}