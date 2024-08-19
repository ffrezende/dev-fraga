import { useState } from 'react'
import { IUser } from './table'

interface Props {
  onSubmit: (e: IUser) => void
}

const Form = ({ onSubmit }: Props) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const clearInput = () => {
    setName('')
    setLastName('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ name, lastName })
    clearInput()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'
      />
      <input
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className='border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'
      >
        Add User
      </button>
    </form>
  )
}

export default Form
