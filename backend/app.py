from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# -----------------------------
# Dummy Database
# -----------------------------

users = []

restaurants = [
    {
        "id": 1,
        "name": "Pizza Hut",
        "rating": 4.3,
        "location": "Nagpur"
    },
    {
        "id": 2,
        "name": "Domino's",
        "rating": 4.5,
        "location": "Nagpur"
    },
    {
        "id": 3,
        "name": "Burger King",
        "rating": 4.1,
        "location": "Nagpur"
    },
    {
        "id": 4,
        "name": "KFC",
        "rating": 4.4,
        "location": "Nagpur"
    }
]

orders = []

# -----------------------------
# Home
# -----------------------------

@app.route("/")
def home():
    return "Food Website Backend Running Successfully!"

# -----------------------------
# Signup
# -----------------------------

@app.route("/signup", methods=["POST"])
def signup():

    data = request.json

    users.append({
        "name": data["name"],
        "email": data["email"],
        "password": data["password"]
    })

    return jsonify({
        "status": "success",
        "message": "Signup Successful"
    })

# -----------------------------
# Login
# -----------------------------

@app.route("/login", methods=["POST"])
def login():

    data = request.json

    for user in users:

        if user["email"] == data["email"] and user["password"] == data["password"]:

            return jsonify({
                "status": "success",
                "message": "Login Successful"
            })

    return jsonify({
        "status": "failed",
        "message": "Invalid Email or Password"
    })

# -----------------------------
# Restaurants
# -----------------------------

@app.route("/restaurants", methods=["GET"])
def get_restaurants():

    return jsonify(restaurants)

# -----------------------------
# Place Order
# -----------------------------

@app.route("/order", methods=["POST"])
def place_order():

    data = request.json

    orders.append(data)

    return jsonify({
        "status": "success",
        "message": "Order Placed Successfully",
        "order": data
    })

# -----------------------------
# View Orders
# -----------------------------

@app.route("/orders", methods=["GET"])
def view_orders():

    return jsonify(orders)

# -----------------------------

if __name__ == "__main__":
    app.run(debug=True)