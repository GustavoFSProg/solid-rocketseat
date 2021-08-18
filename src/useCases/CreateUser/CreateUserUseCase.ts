import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUserRepository } from '../../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository, private mailProvaider: IMailProvider) {}

  async execute(data: ICreateUserRequestDTO) {
    const UserAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (UserAlreadyExists) {
      throw new Error('User already Exists')
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    this.mailProvaider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'João',
        email: 'joao@gmail.com',
      },
      subject: 'Seja ben vindo a plataforma!',
      body: '<p>VocÇe ja pode fazer login na nossa plataforma</p>',
    })
  }
}
