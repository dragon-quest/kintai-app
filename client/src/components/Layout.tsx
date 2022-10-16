import { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/solid'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link className="hover:bg-gray-700 px-3 py-2 rounded" to="/home">
                <HomeIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
              </Link>
              <Link
                className="text-sm text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                to="/attendance"
              >
                出勤簿
              </Link>
              <Link
                className="text-sm text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                to="/vacation"
              >
                休暇登録
              </Link>
              <Link
                className="text-sm text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                to="/setting"
              >
                設定
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-xol justify-center w-screen">
        {children}
      </main>
    </div>
  )
}
