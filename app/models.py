
from app import db

from flask_login import UserMixin
from app import login_manager

@login_manager.user_loader
def load_user(user_id):
    return User_SAML(user_id)

# Think this could be tied to the actual db and would be cleaner
class User_SAML(UserMixin):
    def __init__(self, user_id):
        user = {}
        self.id = None
        self.first_name = None
        self.last_name = None
        try:
            user = user_store[user_id]
            self.id = unicode(user_id)
            self.first_name = user['first_name']
            self.last_name = user['last_name']
        except:
            pass


class User(db.Model, UserMixin): #UserMixin, when ready
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(64), index=True)
    partnersID = db.Column(db.String(64), unique=True, index=True)
    email = db.Column(db.String(64), index=True)
    
    # Relatoinships
    post = db.relationship('Post', backref='user', cascade="all, delete-orphan" , lazy='dynamic')
    review = db.relationship('Review', backref='user', cascade="all, delete-orphan" , lazy='dynamic')

    def __repr__(self):
        return '<User: %r>' % self.name

    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           'id' : self.id, # native property
           'name': self.name, # native property
           'partnersID': self.partnersID, # native property
           'email': self.email, # native property
       }


class Post(db.Model):
    __tablename__ = 'posts'
    # Columns
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    post = db.Column(db.Text())
    address = db.Column(db.String(64), index=True)
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)
    date=db.Column(db.DateTime())
    requestType = db.Column(db.String(64))
    # helpType = db.Column(db.String(64))
    status = db.Column(db.String(64))

    def __repr__(self):
        return '<Post: %r>' % self.id

    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           'id' : self.id, # native property
           'userId': self.userId, # native property
           'name': User.query.filter_by(id=self.userId).first().name,
           'partnersID': User.query.filter_by(id=self.userId).first().partnersID,
           'email': User.query.filter_by(id=self.userId).first().email,
           'address': self.address,
           'lat': self.lat, # native property
           'lng': self.lng, # native property
           'date': self.date, # self.date.strftime('%x'), # If you want to format it going in. Currently letting JS handle formatting
           'post': self.post, # native property
           'requestType': self.requestType, # native property
        #    'helpType': self.helpType, # native property
           'status': self.status, # native property
       }


class Review(db.Model):
    __tablename__ = 'reviews'
    # Columns
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    review = db.Column(db.Text())
    date=db.Column(db.DateTime())
    
    
    def __repr__(self):
        return '<Review: %r>' % self.id

    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           'id' : self.id, # native property
           'userId': self.userId, # native property
           'name': User.query.filter_by(id=self.userId).first().name,
           'review': self.review, # native property
           'date': self.date, # self.date.strftime('%x'), # If you want to format it going in. Currently letting JS handle formatting
       }