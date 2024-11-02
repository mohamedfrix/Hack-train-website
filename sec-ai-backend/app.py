from flask import Flask, jsonify
from leaderboard import LeaderBoard
import json
from supabase_testing import SupaBase

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/api/leaderboard', methods=['GET'])
def leaderboard():
    leaderboard = LeaderBoard()
    return jsonify(leaderboard.get_kaggle_leaderboard())

@app.route('/api/auth', methods=['GET'])
def auth():
    supabase = SupaBase()
    response = supabase.sign_in()
    return jsonify(vars(response))

if __name__ == '__main__':
    app.run(debug=True)