import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { User } from '../types/types'

const getUsers = async () => {
  const { data } = await axios.get<User[]>('http://127.0.0.1:8000/api/users/')
  return data
}

export const useQueryUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: getUsers,
    cacheTime: 10000,
    staleTime: 0,
  })
}

const login = async (params: any) => {
  const { data } = await axios.get<User>('http://127.0.0.1:5000/api/login')
  return data
}

export const useQueryLogin = (params: any) => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: (): Promise<User> => {
      return login(params)
    },
    cacheTime: 10000,
    staleTime: 0,
  })
}
