from flask import Flask, jsonify, request
from flask_cors import CORS
from db import DatabaseManager

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World"


@app.route("/login", methods=["GET"])
def login():
    if request.method == "GET":
        login_id = request.args.get("login_id")
        password = request.args.get("password")
        sql = """
            SELECT 
                id, login_id, name
            FROM 
                users 
            WHERE 
                login_id = %s AND 
                password = %s
        """
        result, status_code = DatabaseManager().execute(sql, (login_id, password), request.method)
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    else:
        response = jsonify({'error': "not found"})
        return response, 404


@app.route("/attendances", methods=["GET", "PUT"])
def attendances():
    if request.method == "GET":
        user_id = request.args.get("user_id")
        calendar = request.args.get("calendar")
        result, status_code = DatabaseManager().proc('get_attendance_table', (user_id, calendar))
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    elif request.method == "PUT":
        attendance_id = request.args.get("attendance_id")
        day = request.args.get("id")
        join = request.args.get("join")
        leave = request.args.get("leave")
        rest = request.args.get("rest")
        cate = request.args.get("cate")
        result, status_code = DatabaseManager().proc(
            'update_attendance_table', (attendance_id, day, join, leave, rest, cate))
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    else:
        response = jsonify({'error': "not found"})
        return response, 404


@app.route("/vacations", methods=["GET", "POST", "DELETE"])
def vacations():
    if request.method == "GET":
        user_id = request.args.get("user_id")
        leave_date = request.args.get("leave_date")
        sql = """
            SELECT 
                id, 
                user_id, 
                DATE_FORMAT(leave_date, '%Y-%m-%d') AS leave_date, 
                vacation_category_id, 
                remarks 
            FROM 
                vacations 
            WHERE 
                user_id=%s AND 
                leave_date=%s AND 
                deleted_at IS NULL
        """
        result, status_code = DatabaseManager().execute(
            sql, (user_id, leave_date), request.method)
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    elif request.method == "POST":
        user_id = request.args.get("user_id")
        leave_date = request.args.get("leave_date")
        vacation_category_id = request.args.get("vacation_category_id")
        remarks = request.args.get("remarks")
        sql = """
            INSERT INTO vacations 
                (user_id, leave_date, vacation_category_id, remarks) 
            VALUES 
                (%s, %s, %s, %s)
        """
        result, status_code = DatabaseManager().execute(
            sql, (user_id, leave_date, vacation_category_id, remarks), request.method)
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    elif request.method == "DELETE":
        id = request.args.get("id")
        sql = "UPDATE vacations SET deleted_at=NOW() WHERE id=%s"
        result, status_code = DatabaseManager().execute(sql, (id, ), request.method)
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    else:
        response = jsonify({'error': "not found"})
        return response, 404


@app.route("/api/vacation_categories", methods=["GET"])
def vacation_categories():
    if request.method == "GET":
        sql = """
            SELECT 
                id, 
                name, 
                created_at, 
                updated_at, 
                deleted_at 
            FROM 
                vacation_categories
            WHERE 
                deleted_at IS NULL
        """
        result, status_code = DatabaseManager().execute(sql, (), request.method)
        response = jsonify({'data': result}) if status_code == 200 else jsonify({'error': result})
        return response, status_code
    else:
        response = jsonify({'error': "not found"})
        return response, 404


if __name__ == "__main__":
    app.run(debug=True)
