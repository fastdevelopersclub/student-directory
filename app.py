from flask import Flask, request, jsonify
import psycopg2
import psycopg2.extras

app = Flask(__name__)

DATABASE_URL = 'postgresql://admin:admin@localhost/sp_db'
conn = psycopg2.connect(DATABASE_URL)

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form['email']
    # Additional signup data processing...

    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        cur.execute('SELECT * FROM allowed_emails WHERE email = %s', (email,))
        if cur.fetchone():
            # Proceed with creating the user account
            # Remember to hash the password before storing it
            return jsonify({"message": "Signup successful!"}), 200
        else:
            return jsonify({"error": "Email address not authorized for signup."}), 403

if __name__ == '__main__':
    app.run(debug=True)
