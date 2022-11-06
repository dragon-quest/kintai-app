from dotenv import dotenv_values
import mysql.connector
from mysql.connector import errorcode


class DatabaseManager:
    def __init__(self):
        self.result = []
        self.status_code = 200
        self.__connect()

    def __connect(self):
        config = dotenv_values(".env")

        try:
            # コネクション作成
            self.conn = mysql.connector.connect(
                host=config['DB_HOST'],
                port=config['DB_PORT'],
                user=config['DB_USER'],
                password=config['DB_PASSWORD'],
                database=config['DB_DATABASE']
            )
        except mysql.connector.Error as e:
            if e.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                self.result = "Something is wrong with the user name or password: {}".format(e)
                self.status_code = 500
            elif e.errno == errorcode.ER_BAD_DB_ERROR:
                self.result = "Database does not exist: {}".format(e)
                self.status_code = 500
            else:
                self.result = "Database failed: {}".format(e)
                self.status_code = 500
        else:
            if not self.conn.is_connected():
                self.result = 'Database connection failed.'
                self.status_code = 500

    def execute(self, sql, param, method):
        if self.status_code == 500:
            return self.result, self.status_code
        try:
            # 再接続を行うように設定
            self.conn.ping(reconnect=True)

            # カーソル作成
            cr = self.conn.cursor(dictionary=True)

            # クエリを作成
            cr.execute(sql, param)

            if method == 'GET':
                # 全データ取得
                self.result = cr.fetchall()
            else:
                self.result = {"rowCount": cr.rowcount}
                self.conn.commit()
            # クローズ
            cr.close()
        except mysql.connector.Error as e:
            self.result = "Something went wrong: {}".format(e)
            self.status_code = 400
        except Exception as e:
            self.result = "Unexpected: {}".format(e)
            self.status_code = 400
        finally:
            # クローズ
            if self.conn is not None and self.conn.is_connected():
                self.conn.close()
        return self.result, self.status_code

    def proc(self, procname, args=()):
        if self.status_code == 500:
            return self.result, self.status_code

        try:
            # 再接続を行うように設定
            self.conn.ping(reconnect=True)

            # カーソル作成
            cr = self.conn.cursor(dictionary=True)
            # cr = self.conn.cursor()

            # クエリを作成
            _result_args = cr.callproc(procname, args)
            print("result args: {}".format(_result_args))

            # 結果を取得
            self.result = []
            # for result in cr.stored_results():
            #     self.result.append(result.fetchall())

            # for result in cr.stored_results():
            #     self.result.append(result.fetchall())

            # for recordset in cr.stored_results():
            #     for row in recordset:
            #         self.result.append(dict(zip(recordset.column_names, row)))

            for result in cr.stored_results():
                self.result = result.fetchall()

            cr.close()
        except mysql.connector.Error as e:
            self.result = "Something went wrong: {}".format(e)
            self.status_code = 400
        except Exception as e:
            self.result = "Unexpected: {}".format(e)
            self.status_code = 400
        finally:
            # クローズ
            if self.conn is not None and self.conn.is_connected():
                self.conn.close()
        return self.result, self.status_code
