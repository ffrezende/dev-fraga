import Table, { IUser } from './components/table'
import { Form } from './components'
import useUser from './hooks/useUser'

function App() {
  const { users, setUsers, addNewUser } = useUser()

  const handleSubmit = ({ name, lastName }: IUser) => {
    setUsers([...users, { name, lastName }])
    addNewUser({ name, lastName })
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='container mx-auto p-4'>
          <Form onSubmit={handleSubmit} />
          <Table users={users} />
        </div>
      </div>
    </>
  )
}

export default App
