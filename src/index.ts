import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again later.',
    timestamp: new Date().toISOString()
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(limiter);
app.use(cors());
app.use(express.json());

// Your personal information
const USER_INFO = {
  email: "christianchibuike14@gmail.com",
  name: "Christian Chibuike",
  stack: "Node.js/Express/TypeScript"
};

// Interface for Cat Fact API response
interface CatFactResponse {
  fact: string;
  length: number;
}

// Interface for API response
interface ProfileResponse {
  status: string;
  user: {
    email: string;
    name: string;
    stack: string;
  };
  timestamp: string;
  fact: string;
}

// GET /me endpoint
app.get('/me', async (req: Request, res: Response) => {
  try {
    console.log(`[${new Date().toISOString()}] Request received for /me endpoint`);
    
    // Fetch cat fact from external API with timeout
    const catFactResponse = await axios.get<CatFactResponse>(
      'https://catfact.ninja/fact',
      {
        timeout: 5000
      }
    );

    console.log(`[${new Date().toISOString()}] Cat fact fetched successfully`);

    // Get current UTC timestamp in ISO 8601 format
    const timestamp = new Date().toISOString();

    // Response
    const response: ProfileResponse = {
      status: 'success',
      user: {
        email: USER_INFO.email,
        name: USER_INFO.name,
        stack: USER_INFO.stack,
      },
      timestamp: timestamp,
      fact: catFactResponse.data.fact,
    };
    
    console.log(`[${new Date().toISOString()}] Response sent successfully`);
    
    // Return response with 200 status
    return res.status(200).json(response);
    
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error fetching cat fact:`, error);

    const timestamp = new Date().toISOString();
    
    const errorResponse: ProfileResponse = {
      status: 'success',
      user: {
        email: USER_INFO.email,
        name: USER_INFO.name,
        stack: USER_INFO.stack,
      },
      timestamp: timestamp,
      fact: 'Unable to fetch cat fact at this time. Here\'s a default: Cats sleep 70% of their lives!',
    };

    console.log(`[${new Date().toISOString()}] Fallback response sent`);
    
    return res.status(200).json(errorResponse);
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(` Profile endpoint: http://localhost:${PORT}/me`);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  console.log('🎯 HNG13 Stage 0 Backend Task - Ready for testing!');
});

export default app;
