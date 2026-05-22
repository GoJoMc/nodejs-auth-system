# Node.js JWT Authentication System

Simple authentication system using:

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt password hashing

## Features

- User Register
- User Login
- JWT Authentication
- Protected Routes
- Auto Login
- Logout System
- Dashboard Page

## Installation

Clone repository:

```bash
git clone https://github.com/USERNAME/REPO.git
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=yourdatabase

JWT_SECRET=yoursecret
```

Run server:

```bash
npm run dev
```

## Project Structure

```txt
controllers/
middleware/
routes/
database/
public/
```

## API Endpoints

### Register

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

### Profile

```http
GET /auth/profile
```

## Technologies

- Express.js
- PostgreSQL
- bcrypt
- JSON Web Token

## Author

GoJo
