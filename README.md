# AuralisVentures

An Ecommerce website for Bangali-pola, a t-shirt sales platform for Bengali New Year.

## Project Structure

The project follows a modular structure organized within the `src` directory:

- **`src/app`**: Contains the Next.js App Router logic.
  - `(mainLayout)`: A route group that applies the `Navbar` and `Footer` to all nested pages.
  - `layout.tsx`: The root layout of the application.
  - `globals.css`: Global styles including Tailwind CSS 4 configuration and custom font imports.
- **`src/components`**: Shared UI components used across the application.
  - `Navbar.tsx`: Responsive navigation bar with mobile support.
  - `Footer.tsx`: Application footer.
- **`src/redux`**: State management setup using Redux Toolkit.
  - `store.ts`: Redux store configuration with `redux-persist` and RTK Query middleware.
  - `ProviderContent.tsx`: Client-side wrapper for Redux and PersistGate.
  - `api/`: Contains `baseApi.ts` for RTK Query.
  - `features/`: Feature-specific slices (e.g., `authSlice`, `authApi`).
- **`src/asset`**: Static assets like logos and background images.
- **`src/types`**: TypeScript interfaces and types.
- **`src/utils`**: Helper functions for JWT decoding and Local Storage management.
- **`public/`**: Publicly accessible static files.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **Persistence**: [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [AOS](https://michalsnik.github.io/aos/)

## Key Configurations

- **Static Export**: The project is configured for static export (`output: 'export'` in `next.config.ts`).
- **Path Aliases**: Uses `@/*` for `src/` and `@asset/*` for `src/asset/`.
- **Authentication**: Includes a robust auth slice with token persistence and JWT decoding utilities.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# AuralisVentures
