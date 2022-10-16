import { FC } from 'react'
import { Layout } from './Layout'

export const Setting: FC = () => {
  return (
    <Layout>
      <div className="w-full lg:max-w-full ml-2 mr-2 mt-2 mb-2">
        <div className="border-t border-r border-b border-l border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-t lg:rounded-b lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex flex-col">
            <div className="text-center m-1 p-1">設定</div>
            <div className="border-t-2 m-1 p-1">
              <a
                href="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                パスワード変更
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
