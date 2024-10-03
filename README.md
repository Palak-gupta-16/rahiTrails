<div align="center">

# 🏞️ **Rahi Trails** 🌲  
### - Development Process -  
https://rahitrails.onrender.com

</div>


## Initial Setup
- Add Landing Page
- Add Trails Listing Page that displays all Trails
  - Each Trail has:
    - Name
    - Image
    - Description
    - reviews
- Layout and Basic Styling
  - Create header and footer partials
  - Integrate Bootstrap

## Creating New Trails
- Set up new Trail POST route
- Add body-parser
- Set up route to show the form
- Add basic styled form
- Style the Trails Listing Page
  - Add a better header/title
  - Display Trails in a grid format
- Style the Navbar and Form
  - Add a navbar to all templates
  - Style the new Trail form

## Add Mongoose
- Install and configure Mongoose
- Set up Trail model
- Use Trail model in routes

## Show Page
- Review RESTful routes seen so far
- Add description to Trail model
- Add a show route/template

## Refactor Mongoose Code
- Create a models directory
- Use module.exports
- Require everything correctly

## Add Seeds File
- Add seeds.js file
- Run the seeds file on server start

## Add Review Model
- Fix errors related to reviews
- Display reviews on Trail show page

## Review New/Create
- Discuss nested routes
- Add review new and create routes
- Add new review form

## Style Show Page
- Add sidebar to show page
- Display comments in a user-friendly manner

## Finish Styling Show Page
- Add public directory
- Include custom stylesheet

## Auth Pt. 1 - Add User Model
- Install necessary packages for authentication
- Define User model

## Auth Pt. 2 - Register
- Configure Passport
- Add register routes
- Create register template

## Auth Pt. 3 - Login
- Add login routes
- Create login template

## Auth Pt. 4 - Logout/Navbar
- Add logout route
- Prevent review submission if user is not signed in
- Update navbar links

## Auth Pt. 5 - Show/Hide Links
- Show/hide authentication links in navbar

## Refactor The Routes
- Use Express router to reorganize routes

## Users + Reviews
- Associate users with reviews
- Save author's name to each reviews

## Users + Trails
- Prevent unauthenticated users from creating a Trail
- Save username and ID with each new Trail

## Editing Trails
- Add method override
- Add edit route for Trails
- Create link to edit page
- Add update route

## Deleting Trails
- Add destroy route
- Create delete button

## Authorization (Permissions)
- Users can only edit their own Trails
- Users can only delete their own Trails
- Show/hide edit and delete buttons accordingly

## Deleting Reviews
- Add destroy route
- Create delete button

## Authorization Part 2: Reviews
- Users can only edit their own reviews
- Users can only delete their own reviews
- Show/hide edit and delete buttons accordingly

## Adding in Flash Messages
- Install and configure connect-flash
- Add Bootstrap alerts to header

## Features
- Responsive web design (RWD)
- User authentication (Login/Register/Logout) and authorization (Post/Edit)
- Integration with Mapbox for displaying trail locations on the Trails and Show pages
- Flash messages responding to user interactions
- Refactored with ES6 and ES7 syntax (e.g., async/await)
- RESTful API

---

### Normal Routes

| Method | Route                       | Description  | 
|--------|-----------------------------|--------------|
| GET    | /                           | Landing page |
| GET    | /login                      | User login page |
| GET    | /register                   | User registration page |

### Users Route

| Method | Route                       | Discription     |
|--------|-----------------------------|-----------------|
| GET    | /users                      | Fetch all users |
| POST   | /users                      | Create new user |
| GET    | /users/new                  | User registration page |
| GET    | /users/:id                  | Show user information |
| PATCH  | /users/:id                  | Update user information |
| DELETE | /users/:id                  | Delete user |
| GET    | /users/:id/edit             | User edit page |


### Trails Route

| Method | Route                       | Description   |
|--------|-----------------------------|---------------------|
| GET    | /campgrounds                   | Fetch all Trails |
| POST   | /campgrounds                    | Create a new Trail |
| GET    | /campgrounds/new                 | Trail adding page |
| GET    | /campgrounds/:id                 | Show Trail information |
| PUT    | /campgrounds/:id                 | Update Trail information (all) |
| PATCH  | /campgrounds/:id                 | Update Trail information (part) |
| DELETE | /campgrounds/:id                 | Delete a Trail |
| GET    | /campgrounds/:id/edit            | Trail editing page |

### Review Route

| Method | Route                       | Description    |
|--------|-----------------------------|----------------|
| POST   | /campgrounds/:id/reviews    | Create a new comment |
| PATCH  | /campgrounds/:id/reviews/:reviewId   | Update comment |
| DELETE | /tcampgrounds/:id/reviews/:reviewId   | Delete comment |

---

## Technologies

### Frontend
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for responsive design.
- [EJS](https://ejs.co/) - A templating engine that lets you generate HTML with plain JavaScript.

### Backend
- [Express](https://expressjs.com/) - A web application framework for Node.js, designed for building web applications and APIs.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database that stores data in flexible, JSON-like documents.

Check the `package.json` file for more information on the dependencies and versions used.


## Getting Started

Follow the instructions below to set up the environment and run this project on your local machine.

## Clone Repository

To clone the repository, run the following command:

```bash
#clone Repository
$ git@github.com:Palak-gupta-16/rahiTrails.git

```
### Install dependencies via NPM or Yarn
```bash
# Install dependencies via npm
$ npm install

# Install dependencies via yarn
$ yarn install
```
### Setup .env file using example.env
### Run the server with nodemon and open a browser to visit http://localhost:3000/.
```bash
# Run server
$ npm run start
```
