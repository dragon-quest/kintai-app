import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Layout } from './Layout'

export const Vacation: FC = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (d: any) => alert(d)

  return (
    <Layout>
      <div className="w-full lg:max-w-full ml-2 mr-2 mt-2 mb-2">
        <div className="border-t border-r border-b border-l border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-t lg:rounded-b lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex flex-col">
            <div className="text-center m-1 p-1">休暇登録</div>
            <div className="m-1 p-1">
              <form
                className="px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    休暇取得日
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    placeholder="年/月/日"
                    {...register('id')}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    休暇区分
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    {...register('id')}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    備考（欠勤や遅刻・早退の場合は理由を入力してください）
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    {...register('id')}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <input
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="submit"
                  />
                </div>
              </form>
              <div className="flex flex-col mt-2">
                <div className="flex flex-row border-t-2">
                  <div className="flex-1 w-64 m-1 p-1">残有給</div>
                  <div className="flex-1 w-64 m-1 p-1">16日</div>
                </div>
              </div>
              <div className="flex flex-col mt-10">有給休暇付与履歴</div>
              <div className="flex flex-col mt-2">
                <div className="flex flex-row">
                  <div className="flex-1 w-64 m-1 p-1">有効期間</div>
                  <div className="flex-1 w-64 m-1 p-1">残</div>
                </div>
                <div className="flex flex-row border-t-2">
                  <div className="flex-1 w-64 m-1 p-1">
                    2022-02-01 〜 2024-02-01
                  </div>
                  <div className="flex-1 w-64 m-1 p-1">9日</div>
                </div>
                <div className="flex flex-row border-t-2">
                  <div className="flex-1 w-64 m-1 p-1">
                    2021-02-01 〜 2023-02-01
                  </div>
                  <div className="flex-1 w-64 m-1 p-1">7日</div>
                </div>
                <div className="flex flex-row border-t-2">
                  <div className="flex-1 w-64 m-1 p-1">
                    2020-02-01 〜 2022-02-01
                  </div>
                  <div className="flex-1 w-64 m-1 p-1">0日</div>
                </div>

                <div className="flex flex-col mt-10">
                  有給使用履歴（過去10回分）
                </div>
                <div className="flex flex-col mt-2">
                  <div className="flex flex-row">
                    <div className="flex-1 w-64 m-1 p-1">日付</div>
                    <div className="flex-1 w-64 m-1 p-1">有給区分</div>
                    <div className="flex-1 w-64 m-1 p-1">備考</div>
                  </div>
                  <div className="flex flex-row border-t-2">
                    <div className="flex-1 w-64 m-1 p-1">2022-02-01</div>
                    <div className="flex-1 w-64 m-1 p-1">有給(全休)</div>
                    <div className="flex-1 w-64 m-1 p-1"></div>
                  </div>
                  <div className="flex flex-row border-t-2">
                    <div className="flex-1 w-64 m-1 p-1">2022-02-01</div>
                    <div className="flex-1 w-64 m-1 p-1">有給(全休)</div>
                    <div className="flex-1 w-64 m-1 p-1"></div>
                  </div>
                  <div className="flex flex-row border-t-2">
                    <div className="flex-1 w-64 m-1 p-1">2022-02-01</div>
                    <div className="flex-1 w-64 m-1 p-1">有給(全休)</div>
                    <div className="flex-1 w-64 m-1 p-1"></div>
                  </div>
                </div>

                <div className="flex flex-col mt-10">
                  欠勤履歴 （過去10回分）
                </div>
                <div className="flex flex-col mt-2">
                  <div className="flex flex-row">
                    <div className="flex-1 w-64 m-1 p-1">日付</div>
                    <div className="flex-1 w-64 m-1 p-1">区分</div>
                    <div className="flex-1 w-64 m-1 p-1">備考</div>
                  </div>
                  <div className="flex flex-row border-t-2">
                    <div className="flex-1 w-64 m-1 p-1">2022-02-01</div>
                    <div className="flex-1 w-64 m-1 p-1">特別休暇</div>
                    <div className="flex-1 w-64 m-1 p-1">夏休み</div>
                  </div>
                  <div className="flex flex-row border-t-2">
                    <div className="flex-1 w-64 m-1 p-1">2022-02-01</div>
                    <div className="flex-1 w-64 m-1 p-1">早退</div>
                    <div className="flex-1 w-64 m-1 p-1">私用のため</div>
                  </div>
                  <div className="flex flex-row border-t-2">
                    <div className="flex-1 w-64 m-1 p-1">2022-02-01</div>
                    <div className="flex-1 w-64 m-1 p-1">休業</div>
                    <div className="flex-1 w-64 m-1 p-1">会社都合</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
