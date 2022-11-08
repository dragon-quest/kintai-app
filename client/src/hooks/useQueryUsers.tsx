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

const login = async () => {
  const { data } = await axios.get<User>('http://127.0.0.1:8000/api/login/')
  return data
}

export const useQueryLogin = () => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: login,
    cacheTime: 10000,
    staleTime: 0,
  })
}
