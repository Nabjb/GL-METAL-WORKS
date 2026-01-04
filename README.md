# GL Metal Works

A production-ready Next.js website built with TypeScript, Tailwind CSS, and modern React best practices.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Linting**: ESLint + Prettier
- **State Management**: React Hooks (Zustand available if needed)
- **Forms**: React Hook Form + Zod (when introduced)
- **Animations**: Framer Motion (when needed)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   └── sections/         # Page sections
│       ├── Hero.tsx      # Hero section (main focus)
│       └── hero/         # Hero subcomponents
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## Architecture Notes

- **Absolute Imports**: Use `@/` prefix for imports (configured in tsconfig.json)
- **Component Organization**: Sections live in `components/sections/`, subcomponents in their own folders
- **Type Safety**: Strict TypeScript mode enabled
- **Performance**: Server Components by default, Client Components when needed

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values.

## Development Focus

**All future prompts focus on the Hero section** (`components/sections/Hero.tsx`) unless explicitly stated otherwise.

