## 📚 MERN Book Store

<img width="1902" height="827" alt="Screenshot 2026-09-29 141623" src="https://github.com/user-attachments/assets/4f87c0bd-a6ff-421f-a449-7327e1d3b4f0" />


A full-stack Book Store web application built with the **MERN stack**. The project includes book listing, user signup/login, protected course access, contact form, responsive UI, and light/dark mode.

## 🚀 Features

* User Signup & Login
* Logout functionality
* User authentication using Context API
* Logged-in user persistence using localStorage
* Book listing from MongoDB
* Protected `/course` route
* Book cards with price, category, image and title
* Light/Dark mode
* Contact form with toast notifications
* Responsive design
* React Hook Form validation
* MongoDB integration
* REST API with Express.js

## 🛠️ Tech Stack

### Frontend

* React 18
* Vite
* React Router DOM
* Axios
* React Hook Form
* React Hot Toast
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* CORS
* dotenv

## 📂 Project Structure

```text
MERN-stack-BOOK-STORE-project/
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

## 🧭 Frontend Routes

| Route      | Access         |
| ---------- | -------------- |
| `/`        | Public         |
| `/course`  | Login required |
| `/signup`  | Public         |
| `/login`   | Public         |
| `/about`   | Public         |
| `/contact` | Public         |

## 🌐 API Endpoints

### Books

```http
GET /book
```

Returns all books from MongoDB.

### Users

```http
POST /user/signup
POST /user/login
```

Used for user registration and login.

## 🔐 Authentication

The application uses **React Context API** to manage the logged-in user's authentication state.

The authenticated user is stored in `localStorage` using the key:

```text
authUser
```

The `/course` route is protected. If a user is not logged in, they are redirected to the `/login` page.

Passwords are hashed using **bcryptjs** before being stored in MongoDB.

> Note: The current project uses frontend authentication state and localStorage persistence. JWT-based authentication is not currently implemented.

## ⚙️ Environment Variables

Create a `.env` file inside the `Backend` folder:

```env
MongoDBURI=your_mongodb_connection_string
PORT=3000
```

For the frontend, create a `.env` file inside the `Frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:3000
```

## 💻 Setup

### Backend

```bash
cd Backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:3000
```

### Frontend

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Frontend normally runs on:

```text
http://localhost:5173
```

## 🔄 Application Flow

```text
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

## 🔮 Future Improvements

* JWT authentication
* User-specific authorization
* Book search functionality
* Shopping cart
* Book details page
* Payment integration
* Admin dashboard
* Add/Edit/Delete books
* Order management
* Production deployment

## 👨‍💻 Author

**Mohad Kaif**

GitHub: https://github.com/mohadkaif122344

