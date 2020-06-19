import pdb, datetime as dt

from app import models
from app import db


def recreate_db():
    User = models.User
    Post = models.Post
    Review = models.Review

    db.drop_all()
    db.create_all()
    
    user1 = User(id=1, name='Test_User_1', partnersID='bbearce', email='bbearce@gmail.com')
    user2 = User(id=2, name='Test_User_2', partnersID='bbearce@bu.edu', email='bbearce@bu.edu')
    user3 = User(id=3, name='Test_User_3', partnersID='test123', email='test@test.com')
    
    # Transportation
    post1 = Post(userId=user1.id, 
                 post="(test) I am looking for someone to carpool to MGH. My shift starts at 7 am and I am leaving around 4 pm.", 
                 requestType='transportation', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 1),
                 address='23 Aldie St. Allston, MA 02134',
                 lat=42.359002,
                 lng=-71.1358664
                 )
    
    post2 = Post(userId=user3.id, 
                 post="(test) Could someone give me a ride to the Navy yard in the morning? My times are flexible.", 
                 requestType='transportation', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 5),
                 address='Boston, MA', 
                 lat=42.3601, 
                 lng=-71.0589)
    # Family connections
    post3 = Post(userId=user3.id, 
                 post="(test) Anyone with a toddler who would like to get together?", 
                 requestType='family-connection', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 10),
                 address='West Roxbury, Boston, MA', 
                 lat=42.2797554, 
                 lng=-71.1626756)
    
    post4 = Post(userId=user3.id, 
                 post="(test) Would anyone like to get together and do outside activities? I have an 8 year-old son.", 
                 requestType='family-connection', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 12),
                 address='Fenway, Boston, MA', 
                 lat=42.3428653,
                 lng=-71.1002881)
    
    post5 = Post(userId=user2.id, 
                 post="(test) Any ideas for summer camps?", 
                 requestType='family-connection', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 15),
                 address='Watertown, MA', 
                 lat=42.3709299, 
                 lng=	-71.1828321)
    # Neighborhood Connections
    post6 = Post(userId=user3.id, 
                 post="(test) I am trying to find out what is open in our neighborhood? Any info?", 
                 requestType='neighborhood-connection', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 17),
                 address='Weston, MA', 
                 lat=42.3667625, 
                 lng=-71.3031132)
    
    post7 = Post(userId=user3.id, 
                 post="(test) What can we do in our neighborhood during the summer?", 
                 requestType='neighborhood-connection', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 20),
                 address='Central Rock, Boston, MA', 
                 lat=42.3651607, 
                 lng=-71.0589878)
    
    # Dog walking/Pet care

    
    post8 = Post(userId=user3.id, 
                 post="(test) Would anyone like to get together to walk our dogs?", 
                 requestType='pet-care', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 27),
                 address='Medford, MA', 
                 lat=42.2797554, 
                 lng=-71.1061639)
    
    post9 = Post(userId=user3.id, 
                 post="(test) Happy to watch someone's cat. If you have a vacation coming up or need to be away for a couple days.",
                 requestType='pet-care',
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 4, 1),
                 address='Newton, MA', 
                 lat=42.3370413, 
                 lng=-71.2092214)
    

    
    review1 = Review(userId=user1.id, 
                 review="Cloud is being so amazing this quarantine.", 
                 date=dt.datetime(2020, 3, 1),
                 )
    
    db.session.add_all([user1,user2,user3,post1,post2,post3,post4,post5,post6,post7,post8,post9,review1])
    db.session.commit()

if __name__ == "__main__":
    recreate_db()