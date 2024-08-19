import { useState } from 'react'
import Table, { IUser } from './components/table'
import { Form } from './components'

function App() {
  const [users, setUsers] = useState<Array<IUser>>([])

  const handleSubmit = ({ name, lastName }: IUser) => {
    setUsers([...users, { name, lastName }])
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
