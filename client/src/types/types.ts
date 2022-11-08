export interface User {
  id: number
  name: string
  login_id: string
  password: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface Attendance {
  id: number
  user_id: number
  calendar: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface AttendanceRecord {
  id: number
  join: string
  leave: string
  rest: string
  cate: string
}

export interface PaidPeriod {
  id: number
  user_id: number
  start_date: string
  end_date: string
  number: number
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface Vacation {
  id: number
  user_id: number
  leave_date: string
  vacation_category_id: number
  remarks: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface VacationCategory {
  id: number
  name: string
  created_at: string
  updated_at: string
  deleted_at: string
}
