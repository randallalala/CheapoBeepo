## Introduction
SEI 23 - Project 2
Database is hosted here: https://https://cheapobeepo.herokuapp.com

#### Database Objectives
- Database can be populated with various items and respective prices 
- Items can be tagged to different shops and locations
- Users can search for shops/businesses, items and locations 

#### Project Objectives
**Technical Requirements**
- Have at least 2 models or more if required
- Utilize a data store (i.e. MongoDB) to create a database and interact with your data
- Run a Node.js / Express.js server from the command line
- Respond to at least one HTTP GET and POST request
- Use at least 1 HTML ejs template
- Make a FIND or SAVE to the MongoDB database on at least 1 route

**Required Deliverables**
- A working full-stack application, built by you, hosted somewhere on the internet (most likely Heroku)
- A link to your hosted working app in the URL section of your GitHub repo
- A git repository hosted on GitHub, with a link to your hosted project, and frequent commits dating back to the very beginning of the project. Commit early, commit often
- A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc
- Wireframes of your app, hosted somewhere & linked in your readme
- A link in your readme.md to the publically-accessible user stories you created
  
**Extras**
- MVC
- Include sign up/log in functionality with hashed passwords & an authorization flow
- Incorporate a CSS Framework like Bootstrap for styling
- Include API endpoints in your application, i.e. have some /api/ name-spaced routes that return JSON data
- Incorporate an External API such as Yelp, Tumblr, Facebook, and others on Mashape
- Allow uploaded images by using a package such as Multer or a service like Cloudinary

## Breakdown
#### Minimum Viable Product Features
- Item model 
- Start button
- Reset button
- Game generate sequence 
- Store player attempt sequence
- Compare sequences 
- Output Win/Lose state
- Continue on for at least 8 levels
- Minimal aesthetics

#### Additional Features
- Normal/extreme difficulty levels
- Player name and highscore storing
- Infinity levels as long as player can handle
- Level indicator and Moves counter
- Timer and progressbar
- Sound on square flash / click
- Not hardcoded
  
<!-- <img src="./patternmatching.gif"> -->

#### Game Design & Pseudo Code Planning
- Generate random sequence and store array (a)
- Listen and store player sequence array (b)
- Compare (a) and (b) 
  - Compare only when array lengths are same 
  - Compare a
- Win / lose functions
- Start / reset buttons and functions
- Timer and progressbar functions
- level and moves counter functions

#### Technologies used:
- Javascript
- Express
- Node
- Mongoose
- MongoDB
- Heroku
- Cheerio
- Axios
- HTML
- Bootstrap
- Jquery

#### Bugs & Issues Faced
- Overlapping timer after player win
    - Resolved: Reset intervals in between rounds
- Flashing glitch
    - Resolved: Remove mid-game win alerts
- Empty restart button if player keeps clicking
    - Resolved: Add a remove click listener function
- Blinker glitch which overlaps
    - Resolved: Add a remove click listener function
- Other issues/mistakes which took time to resolve
    - Resolved: Wrong symbols used that caused malfunctions = inplace of ()
- shop model tying name and location togather,to add location model (unsolved)


#### Further Possible Improvements
- Responsive screen size scaling
- Refactor code
- Stopwatch from beginning
- Modal at the end of game to reveal all stats
- Add more colored squares as the game progresses till infinity (non-hard coded)
  - **Pseudo code**
    1. after winning two levels - add three(x) boxes below
       - win counter (var 1) to count 
       - for loop side ++ (var 2)  
       - change grid style row (var 3)
       - function bottom() + three boxes
    2. after winning two levels - add three(x) boxes to side
       - win counter (var 3)  to count 
       - for loop (var 2)  
       - change grid style col (var 4)
       - function side() + three boxes
    3. x++ 
       - 4boxes bottom
       - 4boxes side
    4. x++
