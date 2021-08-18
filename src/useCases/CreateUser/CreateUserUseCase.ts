import { IUserRepository } from '../../repositories/IUserRepository'

export class CreateUserUseCase {
  private usersRepository: IUserRepository

  constructor(usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute() {}
}
