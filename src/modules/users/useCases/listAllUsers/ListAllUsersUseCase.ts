import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {
    /*  */
  }

  execute({ user_id }: IRequest): User[] {
    const savedUser = this.usersRepository.findById(user_id);

    if (!savedUser) {
      throw new Error("User don't exist");
    }

    if (!savedUser.admin) {
      throw new Error("User not allowed. User must be an admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
