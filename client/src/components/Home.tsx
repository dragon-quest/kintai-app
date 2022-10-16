import { FC } from 'react'
import { Layout } from './Layout'

export const Home: FC = () => {
  return (
    <Layout>
      <div className="w-full lg:max-w-full ml-2 mr-2 mt-2 mb-2">
        <div className="border-t border-r border-b border-l border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-t lg:rounded-b lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex flex-row">
            <div className="basis-1/4 w-64 m-1 p-1">
              <a
                href="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                9月
              </a>
            </div>
            <div className="basis-1/2 w-64 m-1 p-1 text-center">
              こんにちは！〇〇〇〇〇〇〇〇〇〇さん
            </div>
            <div className="basis-1/4 w-64 m-1 p-1 text-right">
              <a
                href="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                11月
              </a>
            </div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">年月</div>
            <div className="flex-1 w-64 m-1 p-1">2022年10月</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">実労働時間</div>
            <div className="flex-1 w-64 m-1 p-1">144時間0分</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">実働日数</div>
            <div className="flex-1 w-64 m-1 p-1">18日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">欠勤日数</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">遅刻日数</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">早退日数</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">代休日数</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">特別休暇日数</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">休業</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">残有給</div>
            <div className="flex-1 w-64 m-1 p-1">10日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">消化有給(全休)</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">消化有給(午前休)</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
          <div className="flex flex-row border-t-2">
            <div className="flex-1 w-64 m-1 p-1">消化有給(午後休)</div>
            <div className="flex-1 w-64 m-1 p-1">0日</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
