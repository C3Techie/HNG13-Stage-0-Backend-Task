🧙‍♂️ Backend Wizards — Stage 0

Dynamic Profile Endpoint

Welcome to Stage 0! 🎯
Your task is to build a RESTful API endpoint that returns your profile information along with a dynamic cat fact fetched from an external API.

This challenge evaluates your ability to:

Consume and integrate third-party APIs

Produce clean, structured JSON responses

Return dynamic, non-static data

Handle errors and external API failures gracefully



---

🚀 Task: Build the /me Profile Endpoint

📌 Required Endpoint

GET /me

📌 Requirements

Must return JSON with
Content-Type: application/json

Must fetch a new cat fact from the Cat Facts API:

https://catfact.ninja/fact

Must include a dynamic timestamp in UTC (ISO 8601 format)

Response must follow the exact JSON schema below



---

🧾 Response Structure (Required Format)

{
  "status": "success",
  "user": {
    "email": "<your email>",
    "name": "<your full name>",
    "stack": "<your backend stack>"
  },
  "timestamp": "<current UTC time in ISO 8601 format>",
  "fact": "<random cat fact fetched from API>"
}


---

🔍 Field Specifications

status

Always the string "success"


user.email

Your personal email address


user.name

Your full name


user.stack

Examples:

"Node.js/Express"

"Python/Django"

"Go/Gin"

"Ruby on Rails"

"Java/Spring Boot"


timestamp

Current UTC time in ISO 8601 format
Example:

2025-10-15T12:34:56.789Z

Must be generated at the moment of request

Must update on every request


fact

A random cat fact retrieved from catfact.ninja

Must not be hardcoded



---

🛠️ Implementation Guidance

Dynamic Timestamp

Convert current server time to UTC

Format using ISO 8601

Should change on every request


Cat Facts API Integration

Endpoint:
https://catfact.ninja/fact

Fetch a new fact on every request

Handle:

timeouts

API downtime

invalid responses



Error Handling

If the cat fact API fails:

Return a fallback message
OR

Return a proper error response with correct HTTP status code


Handle:

network failures

unexpected payloads

slow responses



Best Practices

Store configuration in environment variables

Add basic logging for debugging

Add CORS headers if needed

Consider rate limiting if deployed publicly

Keep code structured and readable



---

✅ Acceptance Criteria

Your /me endpoint must:

Return 200 OK

Return JSON matching the exact schema

Include all required fields:

status

user.email

user.name

user.stack

timestamp

fact


Generate a new timestamp on each request

Fetch a new random cat fact each time
(no caching)

Return Content-Type: application/json

Be written using clean, maintainable code
