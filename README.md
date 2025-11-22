# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting Started](#getting-started)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- ✅ See all countries from the API on the homepage
- ✅ Search for a country using an `input` field
- ✅ Filter countries by region
- ✅ Click on a country to see more detailed information on a separate page
- ✅ Click through to the border countries on the detail page
- ✅ Toggle the color scheme between light and dark mode

### Screenshot

Add a screenshot of your solution here. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework with App Router
- [React](https://reactjs.org/) - JavaScript library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- CSS Custom Properties - For theme switching
- Mobile-first responsive design
- Semantic HTML5 markup

### Features

- **Homepage**: Displays all countries in a responsive grid layout
- **Search**: Real-time country search by name
- **Filter**: Filter countries by region (Africa, Americas, Asia, Europe, Oceania, Polar)
- **Country Details**: Detailed view with flag, population, region, capital, currencies, languages, and border countries
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Navigation**: Click on country cards or border countries to navigate between detail pages
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices

### What I learned

- Working with Next.js 16 App Router and dynamic routes
- Implementing theme switching with CSS custom properties and React Context
- Handling async params in Next.js App Router
- Creating responsive layouts with Tailwind CSS
- Managing state with React hooks (useState, useMemo)
- TypeScript interfaces for type safety
- Image optimization with Next.js Image component

### Continued development

- Add loading states and error handling
- Implement skeleton loaders for better UX
- Add animations and transitions
- Optimize bundle size
- Add unit and integration tests
- Implement country comparison feature
- Add favorites/bookmark functionality

### Useful resources

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive Next.js guide
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [React Documentation](https://react.dev/) - Official React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference

## Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── BackButton.tsx
│   ├── CountryCard.tsx
│   ├── FilterDropdown.tsx
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   └── ThemeProvider.tsx
├── country/            # Dynamic route for country details
│   └── [code]/
│       └── page.tsx
├── data/               # Country data
│   └── data.json
├── globals.css         # Global styles and CSS variables
├── layout.tsx          # Root layout
└── page.tsx            # Homepage

```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
