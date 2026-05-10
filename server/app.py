from flask import request, session
from config import app, db
from models import User

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return {'error': 'Username and password are required.'}, 400
        
    if len(password) < 6:
        return {'error': 'Password must be at least 6 characters.'}, 400
        
    existing = User.query.filter_by(username=username).first()
    if existing is not None:
        return {'error': 'Username already exists'}, 409
        
    new_user = User(username=username)
    new_user.password_hash = password
    db.session.add(new_user)
    db.session.commit()

    session['user_id'] = new_user.id

    return {'id': new_user.id, 'username': new_user.username}, 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return {'error': 'Username and password required.'}, 400

    user = User.query.filter_by(username=username).first()

    if not user or not user.authenticate(password):
        return {'error': 'Username or Password incorrect.'}, 401
    
    session['user_id'] = user.id

    return {'id': user.id, 'username': user.username}, 200

@app.route('/api/me', methods=['GET'])
def me():
    user_id = session.get('user_id')
    if not user_id:
        return {'error': 'Not logged in.'}, 401
    
    user = User.query.get(user_id)

    if not user:
         return {'error': 'User no longer exists.'}, 401
    
    return {'id': user.id, 'username': user.username}, 200

@app.route('/api/logout', methods=['DELETE'])
def logout():
    session.clear()
    return {}, 200


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    
    app.run(debug=True, port=5555)