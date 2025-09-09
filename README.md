/frontend
├── public/                     # Static assets like index.html, favicon, robots.txt
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── main.tsx                # React app entry point
│   ├── vite-env.d.ts           # Vite environment typings (if using Vite)
│
│   ├── app/                    # App setup: routing, global providers, store, layout
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   ├── store.ts           # Global state management (Redux, Zustand, etc.)
│   │   └── providers.tsx      # Context providers, Theme, Auth, etc.
│
│   ├── features/               # Domain feature modules (self-contained)
│   │   ├── auth/               # Auth UI, hooks, API, state, types
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/       # API calls or logic
│   │   │   └── types/
│   │   │
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types/
│   │   │
│   │   └── users/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── types/
│
│   ├── pages/                 # Page-level components (mapped to routes)
│   │   ├── HomePage/
│   │   │   ├── HomePage.tsx
│   │   │   └── index.ts
│   │   ├── DashboardPage/
│   │   │   ├── DashboardPage.tsx
│   │   │   └── index.ts
│   │   └── ProfilePage/
│   │       ├── ProfilePage.tsx
│   │       └── index.ts
│
│   ├── shared/                # Shared components/utilities used across features/pages
│   │   ├── components/        # UI components (buttons, inputs, modals, layout)
│   │   ├── hooks/             # Shared hooks (e.g. useDebounce, useApi)
│   │   ├── constants/         # App-wide constants (API endpoints, configs)
│   │   ├── utils/             # Utility functions/helpers
│   │   ├── services/          # Shared service clients (e.g. API client)
│   │   └── types/             # Shared types/interfaces
│
│   ├── styles/                # Global styles & Tailwind overrides
│   │   ├── globals.css
│   │   └── components.css
│
│   └── assets/                # Images, fonts, icons, svgs
│
├── tests/                     # End-to-end or integration tests (optional)
│
├── .env                      # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts             # or webpack.config.js (depending on bundler)
