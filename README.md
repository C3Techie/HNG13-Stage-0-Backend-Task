# HNG13 Stage 0 Backend Task - Dynamic Profile Endpoint

A RESTful API endpoint that returns profile information along with a dynamic cat fact fetched from an external API.

## 🚀 Features

- **GET /me endpoint**: Returns user profile information with dynamic cat facts
- **External API integration**: Fetches random cat facts from Cat Facts API
- **Dynamic timestamps**: Returns current UTC time in ISO 8601 format
- **Error handling**: Graceful fallback when external API fails
- **CORS enabled**: Supports cross-origin requests
- **TypeScript**: Type-safe implementation
- **Logging**: Basic request/response logging

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/C3Techie/HNG13-Stage-0-Backend-Task.git
   cd HNG13-Stage-0-Backend-Task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running Locally

### Development Mode (with hot reload)
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### GET /me

Returns user profile information with a random cat fact.

**Response Format:**
```json
{
  "status": "success",
  "user": {
    "email": "<your email>",
    "name": "<your full name>",
    "stack": "<your backend stack>"
  },
  "timestamp": "<current UTC time in ISO 8601 format>",
  "fact": "<random cat fact from Cat Facts API>"
}
```

**Status Codes:**
- `200 OK`: Successful response (even with fallback cat fact)

### GET /

Health check endpoint.

**Response:**
```json
{
  "message": "HNG13 Stage 0 Backend Task - Dynamic Profile Endpoint",
  "endpoints": {
    "profile": "/me - Returns user profile with dynamic cat fact"
  },
  "status": "Server is running successfully",
  "timestamp": "2025-10-16T12:34:56.789Z"
}
```

## 🧪 Testing the API

### Using cURL
```bash
curl http://localhost:3000/me
```

### Using Browser
Simply navigate to: `http://localhost:3000/me`

### Using Postman
1. Create a new GET request
2. URL: `http://localhost:3000/me`
3. Send the request

## 📦 Dependencies

### Production Dependencies
- **express**: Web framework for Node.js
- **cors**: Enable CORS for cross-origin requests
- **axios**: HTTP client for external API calls

### Development Dependencies
- **typescript**: TypeScript language support
- **tsx**: TypeScript execution for Node.js
- **nodemon**: Auto-restart server on file changes
- **@types/node**: TypeScript definitions for Node.js
- **@types/express**: TypeScript definitions for Express
- **@types/cors**: TypeScript definitions for CORS

## 📁 Project Structure

```
HNG13-Stage-0-Backend-Task/
├── src/
│   └── index.ts          # Main application file
├── dist/                 # Compiled JavaScript (after build)
├── node_modules/         # Dependencies
├── nodemon.json          # Nodemon configuration
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🔧 Configuration

The user information is hardcoded in the source code as requested:

```typescript
const USER_INFO = {
  email: "<your email>",
  name: "<your full name>", 
  stack: "<your backend stack>"
};
```

## 🌐 Deployment

This API can be deployed to various platforms:

- **Railway**: [railway.app](https://railway.app)
- **Heroku**: [heroku.com](https://heroku.com)
- **AWS**: Amazon Web Services
- **Digital Ocean**: [digitalocean.com](https://digitalocean.com)
- **Fly.io**: [fly.io](https://fly.io)


## 🐛 Error Handling

The API includes robust error handling:

- **External API timeout**: 5-second timeout for Cat Facts API
- **Network errors**: Graceful fallback with a default cat fact
- **404 handling**: Proper response for undefined routes
- **500 errors**: Comprehensive error middleware

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled production server |

## 🎯 Task Completion Checklist

- [x] GET /me endpoint implemented
- [x] Returns 200 OK status
- [x] Response follows required JSON schema
- [x] All required fields present (status, user, timestamp, fact)
- [x] User object contains email, name, and stack
- [x] Timestamp in ISO 8601 format
- [x] Timestamp updates dynamically
- [x] Cat fact fetched from external API
- [x] New cat fact on every request (not cached)
- [x] Content-Type: application/json
- [x] CORS enabled
- [x] Error handling implemented
- [x] Well-structured code with TypeScript
- [x] README with setup instructions
- [x] Dependencies documented

## 🔗 External APIs Used

- **Cat Facts API**: [catfact.ninja/fact](https://catfact.ninja/fact)

## 👨‍💻 Author

**Christian Chibuike**
- Email: c3techie@gmail.com
- GitHub: [@C3Techie](https://github.com/C3Techie)
- Stack: Node.js/Express/TypeScript

## 📄 License

This project is created for the HNG Internship Stage 0 Backend Task.

## 🔗 Links

- [Cat Facts API](https://catfact.ninja/)
- [HNG Internship](https://hng.tech/)

---

**Built with ❤️ for HNG Internship Stage 0**