# Project-2-Group-7
Project 2 Description
## Project 2 Proposal
### OverView

The project is about visualizing timelines with charts and graphs. Users will have the ability to create and track certain goals that they want to archieve, money that other people owe them and for how long, or what the people in power had promised them.

The app will display a chart starting from a chosen day by the user and will keep monitoring that chart everyday until the user select "Completed".  Other users can also choose to vote on certain events of the timelines, and also add in their own events to the timeline with the owner's permission. 

For example, I create a timeline for my dog Fire Cannon, and on his timeline I create different events of when I feed him, take him for walks and telling him what a good boy he is. My roommate, who's also a member of the app could potentially go to my dog's timeline and add in what the my dog does when I was away at work with my permission.

### Table Structure

1. User accounts:
   * Id
   * Name
   * Email Address
   * CreatedAt
2. Timelines:
    * Title
    * Editable
    * Privacy: Default of True BOOLEAN
    * Events
    * CreatedAt
    * Id
    * Description
3. Event:
    * Event ID
    * CreatedAt
    * Editable
    * Text
4. Comments:
    * Id
    * Event ID
    * Text

### New Technologies Used
* vue.js
* passport.js