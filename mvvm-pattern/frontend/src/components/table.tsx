export interface IUser {
  name: string
  lastName: string
}

interface TableProps {
  users: Array<IUser>
}

interface UserProps {
  users: Array<IUser>
}

const Users = (props: UserProps) => {
  const { users } = props

  if (!users?.length) return <tr></tr>

  return users.map((user, index) => {
    const { name, lastName } = user
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{lastName}</td>
      </tr>
    )
  })
}

const Table = ({ users }: TableProps) => {
  return (
    <div className='mt-4'>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <Users users={users} />
        </tbody>
      </table>
    </div>
  )
}

export default Table
