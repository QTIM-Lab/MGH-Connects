import pdb, datetime as dt

from app import models
from app import db


def recreate_db():
    User = models.User
    Post = models.Post
    Review = models.Review

    db.drop_all()
    db.create_all()
    
    user1 = User(id=1, name='Ben Bearce', partnersID='bbearce@gmail.com', email='bbearce@gmail.com')
    user2 = User(id=2, name='Cloud Bearce', partnersID='bbearce@bu.edu', email='bbearce@bu.edu')
    
    post1 = Post(userId=user1.id, 
                 post="Toilet paper is out in my area", 
                 requestType='neighborhood-connection', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 1),
                 address='23 Aldie St. Allston, MA 02134',
                 lat=42.359002,
                 lng=-71.1358664
                 )
    
    post2 = Post(userId=user1.id, 
                 post="Baby formula is out of stock here.", 
                 requestType='neighborhood-connection', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 5),
                 address='Boston, MA', 
                 lat=42.3601, 
                 lng=-71.0589)
    
    post3 = Post(userId=user2.id, 
                 post="If anyone needs help in person, let me know.", 
                 requestType='family-connection', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 10),
                 address='West Roxbury, Boston, MA', 
                 lat=42.2797554, 
                 lng=-71.1626756)
    
    post4 = Post(userId=user2.id, 
                 post="Can someone watch my dog?", 
                 requestType='family-connection', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 12),
                 address='Fenway, Boston, MA', 
                 lat=42.3428653,
                 lng=-71.1002881)
    
    post5 = Post(userId=user2.id, 
                 post="I can give people rides here every other day.", 
                 requestType='transportation', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 15),
                 address='Watertown, MA', 
                 lat=42.3709299, 
                 lng=	-71.1828321)
    
    post6 = Post(userId=user1.id, 
                 post="	I can watch pets for people, but they need to bring them to me.", 
                 requestType='pet-care', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 17),
                 address='Weston, MA', 
                 lat=42.3667625, 
                 lng=-71.3031132)
    
    post7 = Post(userId=user1.id, 
                 post="I drive by here everyday going to Charlestown. Let me know if anyone needs a car pool from the city.", 
                 requestType='transportation', 
                #  helpType="canHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 20),
                 address='Central Rock, Boston, MA', 
                 lat=42.3651607, 
                 lng=-71.0589878)
    
    post8 = Post(userId=user1.id, 
                 post="Flour is out of stock everywhere I go. Does anyone have extra?", 
                 requestType='family-connection', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 3, 27),
                 address='Medford, MA', 
                 lat=42.2797554, 
                 lng=-71.1061639)
    
    post9 = Post(userId=user1.id, 
                 post="We are totally out of eggs. Can anyone spare 3-6? I'm trying to make a couple cakes and would be willing to share! :)", 
                 requestType='family-connection', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime(2020, 4, 1),
                 address='Newton, MA', 
                 lat=42.3370413, 
                 lng=-71.2092214)
    
    post10 = Post(userId=user2.id, 
                 post="Can I get a one time ride out to Dorchester. I need to make a pickup and don't want to get a ride share at the moment with everything going on. Am willing to car pool with other MGH employees who don't have symptoms.", 
                 requestType='transportation', 
                #  helpType="needHelp", 
                 status='un-resolved',
                 date=dt.datetime.now(),
                 address='Dorchester, MA', 
                 lat=42.3016305, 
                 lng=-71.067605)
    
    review1 = Review(userId=user1.id, 
                 review="Cloud is being so amazing this quarantine.", 
                 date=dt.datetime(2020, 3, 1),
                 )
    
    db.session.add_all([user1,user2,post1,post2,post3,post4,post5,post6,post7,post8,post9,post10,review1])
    db.session.commit()

if __name__ == "__main__":
    recreate_db()