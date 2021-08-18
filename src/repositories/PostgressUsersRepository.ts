import { User } from '../entities/User'
import { IUserRepository } from './IUserRepository'

export class PostreggUsersRepositories implements IUserRepository {
  private users: User[] = []

  async findByEmail(email: String): Promise<User> {
    const user = await this.users.find((user) => user.email === email)

    return user as User
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
