from config import app, db
from models import User

with app.app_context():
    u = User(username='test2')
    u.password_hash = 'mypassword'
    db.session.add(u)
    db.session.commit()
    print(User.query.all())