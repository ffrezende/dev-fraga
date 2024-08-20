import { useEffect, useState } from 'react'
import UserService from '../service/user'
import { IUser } from '../components/table'

const useUser = () => {
  const [users, setUsers] = useState<Array<IUser>>([])
  const [isLoading, setIsLoading] = useState(false)
  const { getUsers, insertNewUser } = UserService()

  const getUserList = async () => {
    setIsLoading(true)
    const users = await getUsers()
    setIsLoading(false)
    setUsers(users)
  }

  const addNewUser = async (user: IUser) => {
    await insertNewUser(user)
  }

  useEffect(() => {
    getUserList()
  }, [])

  return { users, setUsers, addNewUser, isLoading }
}

export default useUser
