export interface User {
  id: string,
  name: string,
  email: string,
  username: string,
}

export const UserEmptyState: User = {
  id: '',
  name: '',
  email: '',
  username: '',
}

export interface UserAuth {
  id: string | number,
  name: string,
  username: string,
  password?: string,
  auth: boolean,
  access_token: string | null,
}

export const UserAuthEmptyState: UserAuth = {
  id: '',
  name: '',
  username: '',
  password: '',
  auth: false,
  access_token: '',
}

export interface UserAuthApi {
  access_token: string | null,
  user: {
    id: number,
    name: string
    email: string
    username: string
    password: string
    deleteAt?: string | null
  }
}
