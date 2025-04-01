# Event Management System (Backend)

## Overview

This is the backend system for an Event Management System built using Node.js. It provides APIs for managing events, users, and bookings.

## Features

- User authentication (JWT-based)
- Create, update, and delete events
- Book and manage event registrations
- Retrieve event details
- Admin panel for event management

## Tech Stack

- **Node.js** (Runtime environment)
- **Express.js** (Web framework)
- **MongoDB** (Database, using Mongoose ORM)
- **JWT** (Authentication)
- **Dotenv** (Environment variables management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/event-management-backend.git
   cd event-management-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Events

- `POST /api/events` - Create a new event
- `GET /api/events` - Retrieve all events
- `GET /api/events/:id` - Get details of a specific event
- `PUT /api/events/:id` - Update an event (Admin only)
- `DELETE /api/events/:id` - Delete an event (Admin only)

### Bookings

- `POST /api/bookings` - Book an event
- `GET /api/bookings` - Retrieve user bookings
- `DELETE /api/bookings/:id` - Cancel a booking

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License.
