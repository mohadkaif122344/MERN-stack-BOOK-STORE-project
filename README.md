## 📚 MERN Book Store

A full-stack Book Store web application built with the MERN stack. The project includes book listing, user signup/login, protected course/book access, contact form, responsive UI, and light/dark mode.

### 🚀 Features

- User Signup & Login
- Logout functionality
- Book listing from MongoDB
- Protected "/course" route
- Book cards with price, category, image and title
- Search UI in navbar
- Light/Dark mode
- Contact form with toast notifications
- Responsive design
- React Hook Form validation
- MongoDB integration

### 🛠️ Tech Stack

Frontend

- React 18
- Vite
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- Tailwind CSS
- DaisyUI
- React Slick

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- CORS
- dotenv

### 📂 Project Structure
```
MERN-stack-BOOK-STORE-project-main/
├── Backend/
│   ├── controller/
│   │   ├── book.controller.js
│   │   └── user.controller.js
│   ├── model/
│   │   ├── book.model.js
│   │   └── user.model.js
│   ├── route/
│   │   ├── book.route.js
│   │   └── user.route.js
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── courses/
│   │   ├── home/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```
### 🧭 Frontend Routes

Route| Access
```
"/"| Public
"/course"| Login required
"/signup"| Public
"/about"| Public
"/contact"| Public
```
### 🌐 API Endpoints

Books
```
GET /book
```
Returns all books from MongoDB.

Users
```
POST /user/signup
POST /user/login
```
### 🔐 Authentication

The frontend stores the logged-in user in "localStorage" using the key:

Users

The "/course" route checks the authentication state and redirects unauthenticated users to "/signup".

Passwords are hashed using "bcryptjs" before being stored in MongoDB.

«Note: The current project uses frontend authentication state and does not implement JWT-based authentication.»

###⚙️ Environment Variables

Create:

Backend/.env

Example:
```
MongoDBURI=your_mongodb_connection_string
PORT=3000
```
### 💻 Setup

Backend
```
cd Backend
npm install
npm start
```
Backend runs on:
```
http://localhost:3000
```
Frontend

Open another terminal:
```
cd Frontend
npm install
npm run dev
```
Frontend normally runs on:

```
http://localhost:5173
```
### 🔄 Application Flow
```
Home
 │
 ├── Browse Books
 ├── About
 ├── Contact
 │
 └── Login / Signup
          │
          ▼
     Authenticated
          │
          ▼
       /course
          │
          ▼
      Book Listing
```
### 🔮 Future Improvements

- JWT authentication
- User-specific authorization
- Book search functionality
- Shopping cart
- Book details page
- Payment integration
- Admin dashboard
- Add/Edit/Delete books
- Order management
- Production deployment

### 👨‍💻 Author

Mohad Kaif
```
GitHub: https://github.com/mohadkaif122344
```
