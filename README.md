# Spicy Hut Website

A modern, responsive restaurant website built with React, Next.js 14, and Firebase Firestore.

## Features

- 🍽️ **Menu Page** - Complete menu with 100+ items across 15 categories
- 📅 **Online Reservations** - Table booking system with Firestore backend
- 🖼️ **Gallery** - Photo gallery with lightbox and filters
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Fast Performance** - Next.js with image optimization
- 🎨 **Modern UI** - Beautiful animations with Framer Motion
- 🔍 **SEO Optimized** - Schema markup for local business

## Tech Stack

- **Frontend**: React 18, Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Backend**: Firebase Firestore (reservations, reviews)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: React Icons (Feather Icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd spicy-hut-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Firebase configuration to `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database
3. Create collections:
   - `reservations` - Store table reservations
   - `menu` - Store menu items (optional - currently using static data)
   - `reviews` - Store customer reviews

## Project Structure

```
spicy-hut-web/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   ├── menu/            # Menu page
│   │   ├── about/           # About page
│   │   ├── gallery/         # Gallery page
│   │   └── contact/         # Contact page
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ReservationForm.tsx
│   └── lib/                 # Utilities
│       └── firebase.ts      # Firebase config
├── public/
│   └── images/              # Static images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Deploy to Firebase Hosting

```bash
npm run build
firebase deploy
```

## Customization

### Colors

Edit Tailwind config to change brand colors:
```ts
// tailwind.config.ts
colors: {
  brand: {
    red: '#D32F2F',
    orange: '#FF6F00',
    brown: '#4E342E',
    // ...
  }
}
```

### Menu Items

Edit the menu data in `src/app/menu/page.tsx` or connect to Firestore for dynamic menu management.

## License

Private - All rights reserved# silver-spicy-hut
