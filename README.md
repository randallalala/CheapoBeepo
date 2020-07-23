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
- Shop model
- CRUD routes for items (name,qty,price,unit)
- CRUD routes for shops (name,location)
- Multi search function

#### Additional Features
- MVC
- Data scrape from websites
- Seed data from scrape into database
- Convert unit npm package
  
#### Database Design
<img src="./User Flow Diagram.png">
<img src="./Wireframe.png">

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
- hatchful shopify

#### Bugs & Issues Faced
- NTUC site was messy and scraping it resulted in huge time loss and only reaping 30% results
    - Resolved: Use Cold Storage or Sheng Siong site
- Didnt find resolution to multi search with - RegExp(req.query.search)
    - Resolved: use filter() and includes()
- Shop model ties "name" and "location" together,to add location model (unresolved)
- Units error (unresolved)
- Show previous selection for units / shop / location when editing (unresolved)

#### Further Possible Improvements
- Refactor code
- Geolocation
- Filter/sort based on: 
    - distance
    - price
    - shop name
- Title icon
- Ratings system:
    - to validate added items
    - shows rating numbers
    - shows rated by who
- Authentication and user login for item rating and editing
    - able to see user profile
- Standardized price vs qty calculation
- Date log for item added/edited/last endorsed