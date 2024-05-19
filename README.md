Here's the updated README.md based on the provided directory structure and existing routes:

```markdown
# University Management System Backend

Welcome to the backend repository of the University Management System! This repository contains the server-side code for managing the backend functionalities of the system.

## Project Structure

```
backend
├── controllers
│   ├── authController.js
│   ├── fieldController.js
│   ├── studentController.js
│   └── subjectController.js
├── models
│   ├── Field.js
│   ├── Mark.js
│   ├── Student.js
│   └── Subject.js
├── routes
│   ├── authRoutes.js
│   ├── fieldRoutes.js
│   ├── studentRoutes.js
│   └── subjectRoutes.js
├── config
│   ├── db.js
│   └── university.db
├── middlewares
│   └── authMiddleware.js
├── seeders
│   └── seed.js
├── .env
├── package.json
└── server.js
```

## Routes

### Authentication Routes

- **POST /auth/admin/login**: Login route for administrators.
- **POST /auth/student/login**: Login route for students.
- **POST /auth/student/signup**: Signup route for students.
- **GET /auth/current-user**: Fetch current user details.
- **POST /auth/logout**: Logout route.

### Field Routes

- **GET /fields**: Get all fields.
- **GET /fields/:id**: Get a field by ID.
- **POST /fields**: Create a new field.
- **PUT /fields/:id**: Update a field by ID.
- **DELETE /fields/:id**: Delete a field by ID.

### Student Routes

- **GET /students**: Get all students.
- **GET /students/:id**: Get a student by ID.
- **PUT /students/:id**: Update a student by ID.
- **DELETE /students/:id**: Delete a student by ID.

### Subject Routes

- **GET /subjects**: Get all subjects.
- **GET /subjects/:id**: Get a subject by ID.
- **POST /subjects**: Create a new subject.
- **PUT /subjects/:id**: Update a subject by ID.
- **DELETE /subjects/:id**: Delete a subject by ID.

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/university-management-system-backend.git
   ```

2. Navigate to the project directory:

   ```
   cd university-management-system-backend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define environment variables such as database connection URI and JWT secret.

5. Start the server:

   ```
   node server.js
   ```

6. The server will start running at the specified port (default: 3000).


