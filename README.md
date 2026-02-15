# Serverless Task Manager API (Local Development)

## Overview
This project is a lightweight REST API built with Node.js and Express following a clean layered architecture (Controller → Service → Repository). It simulates a serverless backend structure prepared for future migration to AWS Lambda and API Gateway. Authentication is handled using JWT (simulating Amazon Cognito), and data persistence is currently managed in-memory for local development and testing purposes.

## Technical Stack
- Runtime: Node.js
- Framework: Express
- Authentication: JSON Web Token (JWT)
- Data Storage: In-memory repository (mock database)
- Port: 3000
- Base URL: http://localhost:3000

## Authentication
All endpoints require a valid JWT token in the Authorization header. Format: `Authorization: Bearer <token>`. The token is generated using a development secret and contains a `userId` claim.

## API Documentation

### POST /tasks
Creates a new task associated with the authenticated user.

Request Body (application/json):
{
  "title": "Test task locally"
}

Successful Response (200 OK):
{
  "success": true,
  "data": {
    "taskId": "generated-uuid",
    "userId": "user-123",
    "title": "Test task locally",
    "status": "PENDING",
    "createdAt": "ISO-8601-timestamp"
  }
}

### GET /tasks
Retrieves all tasks associated with the authenticated user.

Successful Response (200 OK):
{
  "success": true,
  "data": [
    {
      "taskId": "generated-uuid",
      "userId": "user-123",
      "title": "Test task locally",
      "status": "PENDING",
      "createdAt": "ISO-8601-timestamp"
    }
  ]
}

## Data Model
- taskId: Unique identifier (UUID)
- userId: Owner of the task
- title: Task description
- status: Current state (default: PENDING)
- createdAt: ISO 8601 timestamp

## Notes
Data is stored in memory and will be cleared when the server restarts. The repository layer is abstracted to allow seamless replacement with DynamoDB or another persistent database. The structure is intentionally designed to facilitate migration to a full AWS serverless architecture.
