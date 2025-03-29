# Authentication with Clerk

This repository contains an authentication system using [Clerk](https://clerk.com/), a modern authentication and user management platform. It provides seamless authentication flows for your application.

## Features
- User authentication and management with Clerk
- Email and social login support
- Session handling and security measures
- Easy integration with frontend frameworks

## Technologies Used
- **Frontend**: React / Next.js
- **Authentication**: Clerk
- **Deployment**: Vercel (optional)

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- Clerk account ([Sign up here](https://clerk.com/))

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/altomizawa/authentication-clerk.git
   cd authentication-clerk
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up your Clerk project:
   - Go to [Clerk Dashboard](https://dashboard.clerk.com/)
   - Create a new application and copy the API keys

4. Create an `.env.local` file in the root of your project and add the following environment variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
   CLERK_API_KEY=<your_clerk_api_key>
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Deployment
You can deploy your application easily with Vercel:
```bash
vercel
```
Make sure to set up the environment variables in Vercel's dashboard.

## Contributing
Feel free to open an issue or submit a pull request for improvements.

## License
This project is licensed under the MIT License.

## Contact
For any questions, reach out to [Alysson Tomizawa](https://github.com/altomizawa).

