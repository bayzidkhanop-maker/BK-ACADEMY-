# BK Academy

Welcome to BK Academy - Your Learning Platform

## About

BK Academy is a modern learning platform built with Next.js 15 and TypeScript. This project is configured with Vercel Speed Insights to monitor and optimize performance.

## Features

- ⚡ Built with Next.js 15 App Router
- 📊 Integrated with Vercel Speed Insights for performance monitoring
- 🎨 Modern, responsive design
- 🚀 Optimized for production deployment on Vercel

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Speed Insights

This project includes Vercel Speed Insights to track and monitor real-world performance metrics. The integration is configured in `app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Prerequisites for Speed Insights

To enable Speed Insights in production:

1. Deploy your app to Vercel
2. Go to your project dashboard on Vercel
3. Navigate to the **Speed Insights** tab
4. Click **Enable**

Once enabled, Speed Insights will automatically track:
- Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Real User Monitoring (RUM) data
- Performance scores over time

## Build

To create a production build:

```bash
pnpm build
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

```bash
vercel deploy
```

Alternatively, you can connect your Git repository to Vercel for automatic deployments on every push.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Vercel Speed Insights Package](https://vercel.com/docs/speed-insights/package)

## Project Structure

```
bk-academy/
├── app/
│   ├── layout.tsx        # Root layout with Speed Insights
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── public/
│   └── favicon.svg       # Site favicon
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```
