import { MailTrapMailProvider } from '../../providers/Implementations/MailTrapMailProvider'
import { PostreggUsersRepositories } from '../../repositories/PostgressUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const MailTrapProvider = new MailTrapMailProvider()

const PostgressUserRepository = new PostreggUsersRepositories()

const CreateUserUserCase = new CreateUserUseCase(PostgressUserRepository, MailTrapProvider)

const createUserController = new CreateUserController(CreateUserUserCase)

export { CreateUserUserCase, createUserController }
