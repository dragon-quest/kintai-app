import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { VacationCategory } from '../types/types'

const getVacationCategories = async () => {
  const { data } = await axios.get<VacationCategory[]>(
    'http://127.0.0.1:5000/api/vacation_categories'
  )
  return data
}

export const useQueryVacationCategories = () => {
  return useQuery<VacationCategory[], Error>({
    queryKey: ['vacation_categories'],
    queryFn: getVacationCategories,
    cacheTime: 10000,
    staleTime: 0,
  })
}
