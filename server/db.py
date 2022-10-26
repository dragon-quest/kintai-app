from dotenv import dotenv_values
import mysql.connector


class DatabaseManager:
    def __init__(self):
        self.res = []
        self.status_code = 200
        self.__connect()

    def __connect(self):
        config = dotenv_values(".env")
        # コネクション作成
        self.conn = mysql.connector.connect(
            host=config['DB_HOST'],
            port=config['DB_PORT'],
            user=config['DB_USER'],
            password=config['DB_PASSWORD'],
            database=config['DB_DATABASE']
        )
        if not self.conn.is_connected():
            self.res = 'Database connection failed.'
            self.status_code = 500

    def execute(self):
        pass

    def proc(self, procname, args=()):
        try:
            # 再接続を行うように設定
            self.conn.ping(reconnect=True)

            # カーソル作成
            cr = self.conn.cursor(dictionary=True)

            # クエリを作成
            _result_args = cr.callproc(procname, args)

            # 結果を取得
            for result in cr.stored_results():
                self.res = result.fetchall()

        except mysql.connector.Error as e:
            self.res = "Something went wrong: {}".format(e)
            self.status_code = 400
        except Exception as e:
            self.res = "Unexpected: {}".format(e)
            self.status_code = 400
        finally:
            # クローズ
            if cr is not None:
                cr.close()
            if self.conn is not None and self.conn.is_connected():
                self.conn.close()
        return self.res, self.status_code
