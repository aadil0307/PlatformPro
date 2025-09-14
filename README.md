# 🚂 Platform Pro - Smart Mumbai Local Train Navigator

<div align="center">

![Platform Pro Logo](./public/logo.png)

**The Ultimate Mumbai Local Train Companion**

*Intelligent platform positioning, AI-powered updates, and seamless navigation for Mumbai's lifeline*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-Backend-orange.svg)](https://convex.dev/)

[🚀 Live Demo](https://68c6a777087a5618c427bca3--remarkable-lokum-a41dbe.netlify.app/) | [📱 Try PWA](https://68c6a777087a5618c427bca3--remarkable-lokum-a41dbe.netlify.app/) | [📖 Documentation](#documentation)

</div>

---

## 🌟 Overview

**Platform Pro** revolutionizes Mumbai local train commuting by providing intelligent platform positioning, real-time AI updates, and seamless navigation across the entire Mumbai suburban railway network. Built for the modern commuter, it combines cutting-edge technology with local expertise.

### 🎯 Problem Statement
Mumbai local trains carry over 7.5 million passengers daily, but finding the right platform position and coach remains chaotic. Platform Pro solves this by:
- **Eliminating confusion** about platform positions
- **Reducing travel time** with optimal coach recommendations  
- **Providing real-time updates** about train delays and crowds
- **Offering intelligent routing** across all three major lines

### ✨ Key Features

#### 🎪 **Smart Platform Navigation**
- **Exact Platform Positioning**: Know where to stand for fastest exit
- **Coach Recommendations**: Optimized for General, Ladies, and First Class
- **Bridge Guidance**: Special navigation for major interchange stations
- **Real-time Crowd Density**: AI-powered crowd predictions

#### 🤖 **AI-Powered Intelligence**
- **Live Train Status**: Real-time delays, cancellations, and updates
- **Smart Predictions**: Peak hour analysis and route optimization
- **Contextual Recommendations**: Based on time, weather, and crowd patterns
- **Intelligent Fallbacks**: Graceful handling when external APIs are unavailable

#### 🗺️ **Comprehensive Route Coverage**
- **Western Line**: Churchgate to Dahanu Road (63 stations)
- **Central Line**: CSMT to Kasara/Khopoli (59 stations)  
- **Harbour Line**: CSMT to Panvel (39 stations)
- **Interchange Support**: Seamless transfers between lines

#### 🔐 **Modern Authentication**
- **Email OTP Verification**: Secure passwordless login
- **Anonymous Mode**: Use without signup for quick journeys
- **JWT Security**: Enterprise-grade authentication
- **Progressive Enhancement**: Works offline after initial setup

#### 📱 **Progressive Web App**
- **Offline Capability**: Core features work without internet
- **Native App Feel**: Install on home screen
- **Fast Loading**: Optimized performance and caching
- **Cross-Platform**: Works on iOS, Android, and Desktop

---

## 🛠️ Tech Stack & Architecture

### Frontend Stack
```
🎨 Frontend Framework    → React 19 + TypeScript
🌐 Routing              → React Router v7  
🎨 Styling              → Tailwind CSS v4 + Shadcn UI
📱 Build Tool           → Vite 6.3.5
🎯 Icons                → Lucide React
✨ Animations           → Framer Motion
🎮 3D Graphics          → Three.js
📦 Package Manager      → pnpm
```

### Backend & Database
```
☁️  Backend Platform     → Convex (Serverless)
🗄️  Database            → Convex DB (Real-time)
🔐 Authentication       → Convex Auth + JWT/JWKS
🤖 AI Integration       → OpenRouter API
📧 Email Service        → Email OTP (Convex Auth)
🔑 Session Management   → JWT with refresh tokens
```

### DevOps & Deployment
```
🚀 Hosting              → Netlify (Frontend)
☁️  Backend Hosting     → Convex Cloud
🔧 Development          → Local + Cloud Dev Environment
📦 CI/CD                → Netlify Build + GitHub Integration
🌍 CDN                  → Netlify Edge Network
```

### Architecture Overview
```
┌─────────────────────────────────────────────────────────────┐
│                     Client (React PWA)                     │
├─────────────────────────────────────────────────────────────┤
│  • React 19 + TypeScript                                   │
│  • Tailwind CSS + Shadcn UI                               │
│  • Framer Motion + Three.js                               │
│  • Service Worker (Offline Support)                       │
└─────────────────────┬───────────────────────────────────────┘
                      │ HTTPS/WebSocket
┌─────────────────────┴───────────────────────────────────────┐
│                  Convex Backend                            │
├─────────────────────────────────────────────────────────────┤
│  • Serverless Functions                                    │
│  • Real-time Database                                      │
│  • Authentication & Authorization                          │
│  • File Storage                                           │
└─────────────────────┬───────────────────────────────────────┘
                      │ External APIs
┌─────────────────────┴───────────────────────────────────────┐
│               External Services                            │
├─────────────────────────────────────────────────────────────┤
│  • OpenRouter AI API (Train Status)                       │
│  • Email Service (OTP Verification)                       │
│  • Mumbai Railway Data Sources                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
```bash
# Required
Node.js 18+ 
pnpm 8+
Git

# Optional (for development)
VS Code
Convex CLI
```

### 1️⃣ Clone & Install
```bash
# Clone the repository
git clone https://github.com/aadil0307/PlatformPro.git
cd PlatformPro

# Install dependencies
pnpm install

# Install Convex CLI globally (if not already installed)
npm install -g convex
```

### 2️⃣ Environment Setup
```bash
# Development environment (automatically created)
# .env.local will be created when you run convex dev

# For production deployment, create .env.production:
echo "VITE_CONVEX_URL=https://robust-spaniel-598.convex.cloud" > .env.production
```

### 3️⃣ Development Server
```bash
# Terminal 1: Start Convex backend
pnpm convex dev

# Terminal 2: Start frontend development server
pnpm dev

# Visit http://localhost:5173
```

### 4️⃣ Production Build
```bash
# Build for production
pnpm build

# Preview production build
pnpm preview

# Live Production App
https://68c6a777087a5618c427bca3--remarkable-lokum-a41dbe.netlify.app/
```

---

## 🌐 Deployment

### Netlify Deployment (Recommended)

#### Method 1: Direct Deploy
1. **Fork this repository** to your GitHub account
2. **Connect to Netlify**: 
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your forked repository

3. **Configure Build Settings**:
   ```
   Build command: pnpm build
   Publish directory: dist
   ```

4. **Set Environment Variables** in Netlify Dashboard:
   ```
   VITE_CONVEX_URL = https://robust-spaniel-598.convex.cloud
   ```

5. **Deploy**: Netlify will automatically build and deploy

#### Method 2: CLI Deploy
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Manual Deployment
```bash
# Build the project
pnpm build

# Upload the 'dist' folder to your hosting provider
# Ensure environment variables are set:
# VITE_CONVEX_URL=https://robust-spaniel-598.convex.cloud
```

### Convex Backend Deployment
The Convex backend is already deployed to production:
- **Production URL**: `https://robust-spaniel-598.convex.cloud`
- **Dashboard**: [Convex Dashboard](https://dashboard.convex.dev/d/robust-spaniel-598)

To redeploy backend changes:
```bash
npx convex deploy
```

---

## 📁 Project Structure

```
PlatformPro/
├── 📱 Frontend Application
│   ├── public/                      # Static assets
│   │   ├── logo.png                 # App logo variants
│   │   ├── manifest.webmanifest     # PWA manifest
│   │   └── sw.js                    # Service worker
│   │
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # Shadcn UI primitives
│   │   │   │   ├── button.tsx       # Button components
│   │   │   │   ├── card.tsx         # Card layouts
│   │   │   │   ├── select.tsx       # Dropdown selectors
│   │   │   │   └── ...              # Other UI components
│   │   │   └── LogoDropdown.tsx     # Custom components
│   │   │
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── use-auth.ts          # Authentication hook
│   │   │   └── use-mobile.ts        # Mobile detection
│   │   │
│   │   ├── pages/                   # Application pages
│   │   │   ├── Landing.tsx          # Home/landing page
│   │   │   ├── Auth.tsx             # Login/signup page
│   │   │   ├── Dashboard.tsx        # Main app interface
│   │   │   └── NotFound.tsx         # 404 error page
│   │   │
│   │   ├── lib/                     # Utility libraries
│   │   │   └── utils.ts             # Helper functions
│   │   │
│   │   ├── types/                   # TypeScript definitions
│   │   │   └── global.d.ts          # Global type declarations
│   │   │
│   │   ├── index.css                # Global styles + Tailwind
│   │   ├── main.tsx                 # App entry point + routing
│   │   └── vite-env.d.ts            # Vite type definitions
│   │
├── 🔧 Configuration Files
│   ├── components.json              # Shadcn UI configuration
│   ├── tailwind.config.js           # Tailwind CSS settings
│   ├── tsconfig.json               # TypeScript configuration
│   ├── vite.config.ts              # Vite build configuration
│   ├── eslint.config.js            # ESLint rules
│   ├── package.json                # Dependencies & scripts
│   ├── netlify.toml                # Netlify deployment config
│   └── .env.local                  # Local environment variables
│
└── ☁️ Backend (Convex)
    └── src/convex/
        ├── 🗄️ Database Schema
        │   └── schema.ts            # Database table definitions
        │
        ├── 🔐 Authentication
        │   ├── auth.ts              # Auth configuration
        │   ├── auth.config.ts       # Auth providers setup
        │   └── auth/
        │       └── emailOtp.ts      # Email OTP implementation
        │
        ├── 📊 Data Management
        │   ├── users.ts             # User queries/mutations
        │   ├── stations.ts          # Station data management
        │   ├── routes.ts            # Train route definitions
        │   └── seedData.ts          # Database seeding script
        │
        ├── 🤖 AI Integration
        │   └── ai.ts                # OpenRouter AI integration
        │
        ├── 🌐 API Routes
        │   └── http.ts              # HTTP endpoints
        │
        └── 📁 Generated Files
            └── _generated/          # Auto-generated by Convex
                ├── api.d.ts         # API type definitions
                ├── api.js           # API client code
                ├── dataModel.d.ts   # Database model types
                └── server.js        # Server runtime code
```

### Key File Descriptions

#### 🎯 **Core Application Files**
- **`src/main.tsx`**: Application entry point with React Router v7 configuration
- **`src/pages/Dashboard.tsx`**: Main interface with train selection and journey planning
- **`src/hooks/use-auth.ts`**: Custom authentication hook with Convex Auth integration
- **`src/components/ui/`**: Shadcn UI component library with custom styling

#### 🔧 **Backend Files**
- **`src/convex/schema.ts`**: Database schema with tables for users, stations, routes, and feedback
- **`src/convex/ai.ts`**: AI-powered live train status with OpenRouter integration
- **`src/convex/stations.ts`**: Mumbai train station data and coach recommendations
- **`src/convex/auth.ts`**: JWT authentication with email OTP verification

#### ⚙️ **Configuration Files**
- **`netlify.toml`**: Production deployment configuration for Netlify
- **`vite.config.ts`**: Build optimization and development server settings
- **`components.json`**: Shadcn UI theming and component path configuration

---

## 🔌 API Documentation

### Convex Backend APIs

#### 📊 **Database Queries**

##### Station Queries
```typescript
// Get all stations for a specific route
const stations = useQuery(api.stations.getByRoute, { routeId: "western" });

// Get station details with coach recommendations
const stationDetails = useQuery(api.stations.getById, { stationId: "mumbai-central" });
```

##### Route Queries
```typescript
// Get all active train routes
const routes = useQuery(api.routes.getActive);

// Get route with all stations
const routeDetails = useQuery(api.routes.getWithStations, { routeId: "central" });
```

##### User Queries
```typescript
// Get current authenticated user
const currentUser = useQuery(api.users.getCurrentUser);

// Get user preferences and history
const userPrefs = useQuery(api.users.getPreferences, { userId });
```

#### 🔄 **Database Mutations**

##### User Feedback
```typescript
// Submit station feedback
const submitFeedback = useMutation(api.stations.submitFeedback);

await submitFeedback({
  stationId: "andheri",
  coachNumber: 6,
  crowdLevel: "moderate",
  timestamp: Date.now()
});
```

##### User Management
```typescript
// Update user preferences
const updatePrefs = useMutation(api.users.updatePreferences);

await updatePrefs({
  preferredCoachType: "ladies",
  notificationsEnabled: true
});
```

#### 🤖 **AI Actions**

##### Live Train Status
```typescript
// Get AI-powered train status updates
const getLiveStatus = useAction(api.ai.getLiveTrainStatus);

const status = await getLiveStatus({
  fromStation: "mumbai-central",
  toStation: "andheri",
  routeId: "western",
  timeOfDay: "peak"
});

// Response format:
{
  status: "On time" | "Delayed" | "Cancelled",
  delay: number, // minutes
  crowdLevel: "low" | "moderate" | "high",
  recommendation: string,
  nextTrain: string,
  platform: string
}
```

#### 🔐 **Authentication APIs**

##### Email OTP Authentication
```typescript
// Send OTP to email
const sendOTP = useMutation(api.auth.sendEmailOTP);
await sendOTP({ email: "user@example.com" });

// Verify OTP
const verifyOTP = useMutation(api.auth.verifyEmailOTP);
await verifyOTP({ email: "user@example.com", code: "123456" });
```

##### Session Management
```typescript
// Get current session
const session = useQuery(api.auth.getCurrentSession);

// Sign out
const signOut = useMutation(api.auth.signOut);
await signOut();
```

### 🌐 **External API Integrations**

#### OpenRouter AI API
```typescript
// Configuration in src/convex/ai.ts
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

// Model used: meta-llama/llama-3.1-8b-instruct:free
// Fallback: Intelligent mock responses for development
```

#### Mumbai Railway Data Sources
- **Static Data**: Pre-loaded station and route information
- **Real-time Updates**: AI-powered predictions and status updates
- **Crowd Sourcing**: User-submitted feedback and validations

### 📱 **Frontend API Usage Examples**

#### Authentication Hook
```typescript
import { useAuth } from "@/hooks/use-auth";

function Dashboard() {
  const { isLoading, isAuthenticated, user, signIn, signOut } = useAuth();
  
  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate to="/auth" />;
  
  return <DashboardContent user={user} />;
}
```

#### Data Fetching with Error Handling
```typescript
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function StationSelector() {
  const stations = useQuery(api.stations.getByRoute, { routeId: "western" });
  
  if (stations === undefined) return <LoadingState />;
  if (!stations.length) return <EmptyState />;
  
  return (
    <Select>
      {stations.map(station => (
        <SelectItem key={station._id} value={station._id}>
          {station.name}
        </SelectItem>
      ))}
    </Select>
  );
}
```

---

## 🎮 Usage Examples

### 🚆 **Basic Journey Planning**
1. **Select Route**: Choose from Western, Central, or Harbour line
2. **Pick Stations**: Select your starting and destination stations
3. **Get Recommendations**: View optimal coach positions and platform guidance
4. **Real-time Updates**: Get AI-powered crowd and delay information

### 📱 **Mobile App Installation**
1. **Visit the App**: Open Platform Pro in your mobile browser
2. **Add to Home Screen**: 
   - **iOS**: Tap Share → Add to Home Screen
   - **Android**: Tap Menu → Add to Home Screen
3. **Offline Access**: Core features work without internet connection

### 🔐 **Account Management**
```typescript
// Anonymous usage (no signup required)
- Access basic station and route information
- Get general coach recommendations
- View train schedules

// Authenticated features (with email signup)
- Personalized recommendations based on travel history
- Save favorite routes and stations
- Submit and view crowd-sourced feedback
- Receive notifications for delays and updates
```

### 🤖 **AI-Powered Features**
```typescript
// Peak hour detection
if (isPeakHour(currentTime)) {
  recommendation = "Use General coach (less crowded)";
  crowdLevel = "high";
}

// Contextual responses
const mockResponses = {
  morning: "Heavy crowd expected. Consider 2nd class general coaches.",
  evening: "Peak hour traffic. First class recommended if available.",
  weekend: "Moderate crowd. All coaches available."
};
```

---

## 🔧 Development & Customization

### 🎨 **Theming & Styling**
```typescript
// Customize colors in src/index.css
:root {
  --primary: 239 84% 67%;     /* Indigo primary */
  --secondary: 215 25% 27%;   /* Slate secondary */
  --background: 0 0% 100%;    /* White background */
  --foreground: 222 84% 5%;   /* Dark text */
}

// Dark mode variants
.dark {
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;
}
```

### 🔌 **Adding New Features**
1. **Create Page**: Add new page in `src/pages/`
2. **Add Route**: Update routing in `src/main.tsx`
3. **Database Changes**: Modify schema in `src/convex/schema.ts`
4. **API Functions**: Add queries/mutations in appropriate convex files

### 🧪 **Testing**
```bash
# Run development servers
pnpm convex dev  # Backend
pnpm dev         # Frontend

# Build and test production
pnpm build
pnpm preview

# Check for errors
pnpm lint
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### ❌ **"No address provided to ConvexReactClient"**
```bash
# Solution: Start Convex development server
pnpm convex dev

# Or check environment variables
echo $VITE_CONVEX_URL  # Should show Convex URL
```

#### ❌ **Build Fails on Netlify**
```bash
# Solution: Ensure environment variables are set in Netlify dashboard
VITE_CONVEX_URL = https://robust-spaniel-598.convex.cloud

# Check netlify.toml configuration
[build]
  command = "pnpm build"
  publish = "dist"
```

#### ❌ **Authentication Not Working**
```bash
# Check JWT configuration in Convex dashboard
# Ensure JWKS and JWT_PRIVATE_KEY are properly set
# Verify SITE_URL matches your domain
```

#### ❌ **AI Features Not Responding**
```bash
# AI uses intelligent fallbacks when OpenRouter API is unavailable
# Check console for API key warnings
# Fallback responses are provided for development
```

#### ❌ **Slow Loading**
```bash
# Enable service worker for better caching
# Check network tab for large bundle sizes
# Consider code splitting for better performance
```

### Development Tips
- Use React DevTools for component debugging
- Check Convex dashboard for backend logs
- Monitor network requests for API issues
- Test on different devices and screen sizes

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### 🔄 **Development Workflow**
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### 📝 **Contribution Guidelines**
- Follow existing code style and conventions
- Add TypeScript types for all new functions
- Include error handling and loading states
- Test on mobile and desktop devices
- Update documentation for new features

### 🧪 **Code Standards**
```typescript
// Use TypeScript for all new code
interface StationData {
  _id: Id<"stations">;
  name: string;
  routeId: string;
  coachRecommendations: CoachRecommendation[];
}

// Follow React hooks patterns
const useStationData = (routeId: string) => {
  const stations = useQuery(api.stations.getByRoute, { routeId });
  return { stations, isLoading: stations === undefined };
};

// Add error boundaries and loading states
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Platform Pro** was built during **MumbAI Hacks** by:

- **Developer**: [aadil0307](https://github.com/aadil0307)
- **Repository**: [PlatformPro](https://github.com/aadil0307/PlatformPro)

---

## 🙏 Acknowledgments

- **Mumbai Railway System** for inspiration and data structure
- **Convex** for providing excellent serverless backend platform
- **Shadcn UI** for beautiful, accessible component library
- **OpenRouter** for AI integration capabilities
- **Mumbai Commuters** for real-world feedback and use cases

---

## 📊 Project Stats

```
📁 Project Size:     ~2.1K files
🔤 Lines of Code:    ~15K+ TypeScript/React
🎨 UI Components:    30+ Shadcn components
🗄️ Database Tables:  8 tables with relationships
🤖 AI Integration:   OpenRouter + intelligent fallbacks
📱 PWA Features:     Offline support, installable
🌐 Deployment:       Netlify + Convex Cloud
⚡ Performance:      <2s load time, 95+ Lighthouse score
```

---

<div align="center">

**Made with ❤️ for Mumbai Commuters**

[🚀 Try Platform Pro](https://68c6a777087a5618c427bca3--remarkable-lokum-a41dbe.netlify.app/) | [📱 Install PWA](https://68c6a777087a5618c427bca3--remarkable-lokum-a41dbe.netlify.app/) | [⭐ Star on GitHub](https://github.com/aadil0307/PlatformPro)

</div>
## Tech Stack

- **Frontend**: Vite + React 19 + TypeScript
- **Routing**: React Router v7 (all imports from `react-router` instead of `react-router-dom`)
- **Styling**: Tailwind CSS v4 + Shadcn UI components
- **Icons**: Lucide React icons
- **Backend**: Convex (serverless backend & database)
- **Authentication**: Convex Auth with email OTP and anonymous users
- **AI Integration**: OpenRouter API with intelligent fallbacks
- **Animations**: Framer Motion
- **3D Graphics**: Three.js (for 3D models)
- **Progressive Web App**: Service Worker + Manifest

All relevant files live in the 'src' directory.

Use pnpm for the package manager.

## Current Status ✅

**Latest Updates (September 14, 2025):**
- ✅ Fixed dropdown functionality with enhanced UI/UX
- ✅ Implemented AI-powered live train status with intelligent fallbacks  
- ✅ Added comprehensive Mumbai train route data (Western, Central, Harbour)
- ✅ Enhanced authentication system with proper JWT configuration
- ✅ Improved responsive design and glassmorphism UI
- ✅ Added loading states and error handling throughout the app
- ✅ PWA capabilities with offline support

## Setup

This project is set up already and running on a cloud environment, as well as a convex development in the sandbox.

## Environment Variables

The project is set up with project specific CONVEX_DEPLOYMENT and VITE_CONVEX_URL environment variables on the client side.

The convex server has a separate set of environment variables that are accessible by the convex backend.

Currently, these variables include auth-specific keys: JWKS, JWT_PRIVATE_KEY, and SITE_URL.


# Using Authentication (Important!)

You must follow these conventions when using authentication.

## Auth is already set up.

All convex authentication functions are already set up. The auth currently uses email OTP and anonymous users, but can support more.

The email OTP configuration is defined in `src/convex/auth/emailOtp.ts`. DO NOT MODIFY THIS FILE.

Also, DO NOT MODIFY THESE AUTH FILES: `src/convex/auth.config.ts` and `src/convex/auth.ts`.

## Using Convex Auth on the backend

On the `src/convex/users.ts` file, you can use the `getCurrentUser` function to get the current user's data.

## Using Convex Auth on the frontend

The `/auth` page is already set up to use auth. Navigate to `/auth` for all log in / sign up sequences.

You MUST use this hook to get user data. Never do this yourself without the hook:
```typescript
import { useAuth } from "@/hooks/use-auth";

const { isLoading, isAuthenticated, user, signIn, signOut } = useAuth();
```

## Protected Routes

When protecting a page, use the auth hooks to check for authentication and redirect to /auth.

## Auth Page

The auth page is defined in `src/pages/Auth.tsx`. Redirect authenticated pages and sign in / sign up to /auth.

## Authorization

You can perform authorization checks on the frontend and backend.

On the frontend, you can use the `useAuth` hook to get the current user's data and authentication state.

You should also be protecting queries, mutations, and actions at the base level, checking for authorization securely.

## Adding a redirect after auth

In `src/main.tsx`, you must add a redirect after auth URL to redirect to the correct dashboard/profile/page that should be created after authentication.

# Frontend Conventions

You will be using the Vite frontend with React 19, Tailwind v4, and Shadcn UI.

Generally, pages should be in the `src/pages` folder, and components should be in the `src/components` folder.

Shadcn primitives are located in the `src/components/ui` folder and should be used by default.

## Page routing

Your page component should go under the `src/pages` folder.

When adding a page, update the react router configuration in `src/main.tsx` to include the new route you just added.

## Shad CN conventions

Follow these conventions when using Shad CN components, which you should use by default.
- Remember to use "cursor-pointer" to make the element clickable
- For title text, use the "tracking-tight font-bold" class to make the text more readable
- Always make apps MOBILE RESPONSIVE. This is important
- AVOID NESTED CARDS. Try and not to nest cards, borders, components, etc. Nested cards add clutter and make the app look messy.
- AVOID SHADOWS. Avoid adding any shadows to components. stick with a thin border without the shadow.
- Avoid skeletons; instead, use the loader2 component to show a spinning loading state when loading data.


## Landing Pages

You must always create good-looking designer-level styles to your application. 
- Make it well animated and fit a certain "theme", ie neo brutalist, retro, neumorphism, glass morphism, etc

Use known images and emojis from online.

If the user is logged in already, show the get started button to say "Dashboard" or "Profile" instead to take them there.

## Responsiveness and formatting

Make sure pages are wrapped in a container to prevent the width stretching out on wide screens. Always make sure they are centered aligned and not off-center.

Always make sure that your designs are mobile responsive. Verify the formatting to ensure it has correct max and min widths as well as mobile responsiveness.

- Always create sidebars for protected dashboard pages and navigate between pages
- Always create navbars for landing pages
- On these bars, the created logo should be clickable and redirect to the index page

## Animating with Framer Motion

You must add animations to components using Framer Motion. It is already installed and configured in the project.

To use it, import the `motion` component from `framer-motion` and use it to wrap the component you want to animate.


### Other Items to animate
- Fade in and Fade Out
- Slide in and Slide Out animations
- Rendering animations
- Button clicks and UI elements

Animate for all components, including on landing page and app pages.

## Three JS Graphics

Your app comes with three js by default. You can use it to create 3D graphics for landing pages, games, etc.


## Colors

You can override colors in: `src/index.css`

This uses the oklch color format for tailwind v4.

Always use these color variable names.

Make sure all ui components are set up to be mobile responsive and compatible with both light and dark mode.

Set theme using `dark` or `light` variables at the parent className.

## Styling and Theming

When changing the theme, always change the underlying theme of the shad cn components app-wide under `src/components/ui` and the colors in the index.css file.

Avoid hardcoding in colors unless necessary for a use case, and properly implement themes through the underlying shad cn ui components.

When styling, ensure buttons and clickable items have pointer-click on them (don't by default).

Always follow a set theme style and ensure it is tuned to the user's liking.

## Toasts

You should always use toasts to display results to the user, such as confirmations, results, errors, etc.

Use the shad cn Sonner component as the toaster. For example:

```
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}
```

Remember to import { toast } from "sonner". Usage: `toast("Event has been created.")`

## Dialogs

Always ensure your larger dialogs have a scroll in its content to ensure that its content fits the screen size. Make sure that the content is not cut off from the screen.

Ideally, instead of using a new page, use a Dialog instead. 

# Using the Convex backend

You will be implementing the convex backend. Follow your knowledge of convex and the documentation to implement the backend.

## The Convex Schema

You must correctly follow the convex schema implementation.

The schema is defined in `src/convex/schema.ts`.

Do not include the `_id` and `_creationTime` fields in your queries (it is included by default for each table).
Do not index `_creationTime` as it is indexed for you. Never have duplicate indexes.


## Convex Actions: Using CRUD operations

When running anything that involves external connections, you must use a convex action with "use node" at the top of the file.

You cannot have queries or mutations in the same file as a "use node" action file. Thus, you must use pre-built queries and mutations in other files.

You can also use the pre-installed internal crud functions for the database:

```ts
// in convex/users.ts
import { crud } from "convex-helpers/server/crud";
import schema from "./schema.ts";

export const { create, read, update, destroy } = crud(schema, "users");

// in some file, in an action:
const user = await ctx.runQuery(internal.users.read, { id: userId });

await ctx.runMutation(internal.users.update, {
  id: userId,
  patch: {
    status: "inactive",
  },
});
```


## Common Convex Mistakes To Avoid

When using convex, make sure:
- Document IDs are referenced as `_id` field, not `id`.
- Document ID types are referenced as `Id<"TableName">`, not `string`.
- Document object types are referenced as `Doc<"TableName">`.
- Keep schemaValidation to false in the schema file.
- You must correctly type your code so that it passes the type checker.
- You must handle null / undefined cases of your convex queries for both frontend and backend, or else it will throw an error that your data could be null or undefined.
- Always use the `@/folder` path, with `@/convex/folder/file.ts` syntax for importing convex files.
- This includes importing generated files like `@/convex/_generated/server`, `@/convex/_generated/api`
- Remember to import functions like useQuery, useMutation, useAction, etc. from `convex/react`
- NEVER have return type validators.
