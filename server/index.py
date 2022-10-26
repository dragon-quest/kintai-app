from flask import Flask, jsonify
from dotenv import dotenv_values
import mysql.connector
from db import DatabaseManager

config = dotenv_values(".env")

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World"


@app.route("/attendances")
def attendances():
    # コネクション作成
    conn = mysql.connector.connect(
        host=config['DB_HOST'],
        port=config['DB_PORT'],
        user=config['DB_USER'],
        password=config['DB_PASSWORD'],
        database=config['DB_DATABASE']
    )

    # 接続状況確認
    if conn.is_connected():
        try:
            # 再接続を行うように設定
            conn.ping(reconnect=True)

            # カーソル作成
            cr = conn.cursor()

            # クエリを作成
            sql = ('''
                SELECT * FROM attendances
            ''')

            # selectを実行
            cr.execute(sql)

            # 全データ取得
            rows = cr.fetchall()

            # 実行結果
            response = {
                'data': rows
            }
            return jsonify(response), 200

        except mysql.connector.Error as e:
            response = {
                'error': e
            }
            return jsonify(response), 400

        finally:
            # クローズ
            if cr is not None:
                cr.close()
            if conn is not None and conn.is_connected():
                conn.close()
    else:
        response = {
            'error': 'database connection failed.'
        }
        return jsonify(response), 500


@app.route("/get_attendance")
def get_attendance_table():
    # コネクション作成
    conn = mysql.connector.connect(
        host=config['DB_HOST'],
        port=config['DB_PORT'],
        user=config['DB_USER'],
        password=config['DB_PASSWORD'],
        database=config['DB_DATABASE']
    )

    # 接続状況確認
    if conn.is_connected():
        try:
            # 再接続を行うように設定
            conn.ping(reconnect=True)

            # カーソル作成
            cr = conn.cursor()

            # クエリを作成
            args = (1, '202210')
            cr.execute("call get_attendance_table(:a, :b)", [1, '202210'])
            results = list(cr.fetchall())

            # 実行結果
            response = {
                'data': results
            }
            return jsonify(response), 200

        except mysql.connector.Error as e:
            response = {
                'error': e
            }
            return jsonify(response), 400

        finally:
            # クローズ
            if cr is not None:
                cr.close()
            if conn is not None and conn.is_connected():
                conn.close()
    else:
        response = {
            'error': 'database connection failed.'
        }
        return jsonify(response), 500


@app.route("/attendance_table")
def attendance_table():
    res, status_code = DatabaseManager().proc('get_attendance_table', (1, '202211'))
    response = jsonify({'data': res}) if status_code == 200 else jsonify({'error': res})
    return response, status_code


if __name__ == "__main__":
    app.run(debug=True)
