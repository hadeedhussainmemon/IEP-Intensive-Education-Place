# IEP – Intensive Education Place

Welcome to the official repository for the **Intensive Education Place (IEP)** website. This project is a modern, high-performance web application designed to showcase IEP's courses, admissions, and academic offerings.

![IEP Platform](public/opengraph-image.png)

## 🚀 Technologies

Built with the latest web technologies for performance and scalability:

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: Vercel

## ✨ Key Features

-   **Modern UI/UX**: Dark-themed, glassmorphism-inspired design with premium aesthetics.
-   **Responsive Layout**: Fully optimized for desktops, tablets, and mobile devices.
-   **Interactive Elements**: 3D hover effects, smooth scrolling galleries, and dynamic animations.
-   **Performance Optimized**: Image optimization, code splitting, and caching headers configured for Vercel.
-   **Dynamic Content**: Course data managed centrally for easy updates.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Scripts

-   `npm run dev`: Start development server.
-   `npm run build`: Build for production.
-   `npm start`: Start production server.
-   `npm run lint`: Run ESLint.
-   `node scripts/compress-images.js`: Compress large images in `public/images` (requires `sharp`).

## 📂 Project Structure

-   `/app`: Next.js App Router pages and layouts.
-   `/components`: Reusable UI components (Hero, Navbar, Footer, etc.).
-   `/lib`: Utility functions and data files (e.g., `courses-data.ts`).
-   `/public`: Static assets (images, fonts).
-   `/scripts`: Maintenance scripts.

## 📄 License

© 2025 IEP – Intensive Education Place. All rights reserved.
