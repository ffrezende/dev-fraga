import { IUser } from '../components/table'

const BASE_URL = 'http://127.0.0.1:3000/'

const UserService = () => {
  const getUsers = async () => {
    try {
      const data = fetch(`${BASE_URL}users`)

      return (await data).json()
    } catch (error) {
      console.log(error)
    }
  }

  const insertNewUser = async (user: IUser) => {
    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
    await fetch(`${BASE_URL}user`, postRequest)
  }

  return { getUsers, insertNewUser }
}

export default UserService
