import { User, UserApi } from '../../domain/entities/user.entity';

export const UserAdapter = (user: UserApi): User => {
  return {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
  }
}
