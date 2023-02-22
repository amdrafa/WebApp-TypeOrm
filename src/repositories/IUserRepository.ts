import { User } from "../model/userModel";

export interface ICreateUserDTO {
    firstName: string;
    lastName: string;
    age: number;
}

export interface IUserRepository {
    createUser(user: ICreateUserDTO): Promise<User>

    list(): Promise<User[]>
}