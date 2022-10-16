import { FC } from 'react'
import { Layout } from './Layout'
import { useForm } from 'react-hook-form'

export const Attendance: FC = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (d: any) => alert(d)

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
            <div className="basis-1/2 w-64 m-1 p-1 text-center">2022年10月</div>
            <div className="basis-1/4 w-64 m-1 p-1 text-right">
              <a
                href="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                11月
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row border-t-2">
              <div className="flex-1 w-64 m-1 p-1"></div>
              <div className="flex-1 w-64 m-1 p-1">日付</div>
              <div className="flex-1 w-64 m-1 p-1">出勤</div>
              <div className="flex-1 w-64 m-1 p-1">退勤</div>
              <div className="flex-1 w-64 m-1 p-1">休(分)</div>
              <div className="flex-1 w-64 m-1 p-1">休(区分)</div>
              <div className="flex-1 w-64 m-1 p-1"></div>
            </div>
            <div className="flex flex-row border-t-2 items-center">
              <div className="flex-1 w-64 m-1 p-1">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 px-5 py-1 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  取消
                </button>
              </div>
              <div className="flex-1 w-64 m-1 p-1">1(土)</div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  placeholder="--:--"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  placeholder="--:--"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1"></div>
              <div className="flex-1 w-64 m-1 p-1">
                <button
                  type="button"
                  className="bg-sky-500 hover:bg-sky-700 px-5 py-1 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  保存
                </button>
              </div>
            </div>
            <div className="flex flex-row border-t-2 items-center">
              <div className="flex-1 w-64 m-1 p-1">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 px-5 py-1 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  取消
                </button>
              </div>
              <div className="flex-1 w-64 m-1 p-1">2(日)</div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  placeholder="--:--"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  placeholder="--:--"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1"></div>
              <div className="flex-1 w-64 m-1 p-1">
                <button
                  type="button"
                  className="bg-sky-500 hover:bg-sky-700 px-5 py-1 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  保存
                </button>
              </div>
            </div>
            <div className="flex flex-row border-t-2 items-center">
              <div className="flex-1 w-64 m-1 p-1">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 px-5 py-1 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  取消
                </button>
              </div>
              <div className="flex-1 w-64 m-1 p-1">3(月)</div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  placeholder="--:--"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  placeholder="--:--"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="id"
                  type="text"
                  {...register('id')}
                />
              </div>
              <div className="flex-1 w-64 m-1 p-1"></div>
              <div className="flex-1 w-64 m-1 p-1">
                <button
                  type="button"
                  className="bg-sky-500 hover:bg-sky-700 px-5 py-1 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  保存
                </button>
              </div>
            </div>
            <div className="flex flex-row border-t-2 items-center">
              <div className="m-1 p-1">
                <button
                  type="button"
                  className="bg-sky-500 hover:bg-sky-700 px-20 py-2 text-sm leading-5 rounded-full font-semibold text-white"
                >
                  提出
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
