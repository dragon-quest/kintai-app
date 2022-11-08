import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Vacation } from '../types/types'

const getVacations = async () => {
  const { data } = await axios.get<Vacation[]>(
    'http://127.0.0.1:8000/api/vacations/'
  )
  return data
}

export const useQueryVacations = () => {
  return useQuery<Vacation[], Error>({
    queryKey: ['vacations'],
    queryFn: getVacations,
    cacheTime: 10000,
    staleTime: 0,
  })
}
