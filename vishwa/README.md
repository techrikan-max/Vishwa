# Vishwa - Sacred Spiritual Jewelry

A Next.js e-commerce application for authentic Rudraksha beads and spiritual jewelry with user authentication, profile photo upload, and an AI-powered FAQ chatbot.

## Features

- 🔐 **User Authentication**: Complete signup/login system with JWT tokens
- 📸 **Profile Photo Upload**: Optional profile photos stored in Cloudinary
- 🤖 **FAQ Chatbot**: Interactive button-navigated FAQ system for customer support
- 🛡️ **Secure Password**: Bcrypt password hashing for security
- 📱 **Responsive Design**: Beautiful UI with consistent theming
- 🎨 **Modern UI**: Tailwind CSS with custom Rudraksha-themed design

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Cinzel font (Google Fonts)
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens, bcryptjs for password hashing
- **File Upload**: Cloudinary for profile images
- **Deployment**: Vercel-ready


## Configuration

The `next.config.ts` file is configured to allow Cloudinary images:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
```

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration with optional profile photo
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Chatbot
- `GET /api/chatbot` - Get all FAQ data organized by categories
- `POST /api/chatbot` - Search FAQs by query

## Features Overview

### User Authentication
- **Signup**: Users can create accounts with name, email, password, and optional profile photo
- **Login**: Secure login with email and password
- **Profile Photos**: Optional image upload to Cloudinary with automatic resizing
- **Password Security**: Bcrypt hashing with salt rounds for maximum security

### FAQ Chatbot
- **Category-based Navigation**: Questions organized by categories (General, Selection, Usage, etc.)
- **Interactive UI**: Button-driven navigation for easy user experience
- **Comprehensive Answers**: Detailed responses about Rudraksha beads and spiritual jewelry
- **Thank You Messages**: Polite closing after each interaction

### UI/UX
- **Consistent Theme**: Gold (#D4AF37) and black color scheme throughout
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Typography**: Cinzel font for headings, Times New Roman for body text

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   └── logout/route.ts
│   │   └── chatbot/route.ts
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatBot.tsx
│   ├── ChatButton.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── context/
│   └── AuthContext.tsx
├── data/
│   └── faqData.ts
├── lib/
│   ├── auth.ts
│   ├── cloudinary.ts
│   └── mongodb.ts
├── models/
│   └── User.ts
└── types/
    └── index.ts
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Deployment

The app is ready for deployment on Vercel. Simply connect your GitHub repository to Vercel and add the environment variables in the Vercel dashboard.

```bash
npm run build
```

## Support

For support, email support@vishwa.com or open an issue on GitHub.
