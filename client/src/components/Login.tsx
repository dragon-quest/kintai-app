import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useQueryLogin } from '../hooks/useQueryUsers'

export const Login: FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const { status, data } = useQueryLogin({ login_id: 'test', password: 'test' })
  const onSubmit = (d: any) => {
    navigate('/home')
  }

  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>

  return (
    <main className="flex justify-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              {...register('id')}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              {...register('password')}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="submit"
            />
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </main>
  )
}
