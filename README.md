# PrimeTrade Backend Assignment

## Overview
This project is a backend REST API built as part of the PrimeTrade Backend Developer Intern assignment.  
It includes secure authentication, role-ready architecture, and CRUD APIs.

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Swagger (OpenAPI)

## Features
- User Registration & Login
- Password hashing
- JWT-based authentication
- Protected CRUD APIs for Tasks
- Ownership-based authorization
- API documentation using Swagger

## API Endpoints
- POST /api/v1/auth/register
- POST /api/v1/auth/login
- GET /api/v1/tasks
- POST /api/v1/tasks
- PUT /api/v1/tasks/:id
- DELETE /api/v1/tasks/:id

## API Documentation
Swagger UI available at: http://localhost:5000/api-docs

## Setup Instructions
1. Clone the repository
2. Install dependencies  
   `npm install`
3. Create a `.env` file with required variables
4. Run the server  
   `npm run dev`

## Status
- Backend APIs: Completed
- Swagger Documentation: Added
- Frontend: Planned / In Progress
