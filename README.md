## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
  
- **pnpm** (fast, disk space efficient package manager)
  - Install pnpm: `npm install -g pnpm`
  - Verify pnpm: `pnpm --version`
  - Official docs: https://pnpm.io/

- **Git**
  - Download from: https://git-scm.com/
  - Verify installation: `git --version`

## 📦 Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/AzizMustaphaBouassida/SKAI_KIOSK_Frontend.git
cd SKAI_KIOSK_Frontend
```

### 2. Install Dependencies

Using pnpm:
```bash
pnpm install
```

This will install all required dependencies including:
- React 19
- Vite
- Tailwind CSS
- Radix UI components
- i18next for internationalization
- React Router
- Zustand for state management
- And many more...

### 3. Verify Installation

After installation completes successfully, you should see a `node_modules` folder in your project directory.

## 🚀 Running the Project

### Development Mode

To start the development server with hot module replacement (HMR):

```bash
pnpm dev
```

The application will start on `http://localhost:5173/` (or another port if 5173 is busy).

**You should see output similar to:**
```
  VITE v7.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and navigate to the local URL displayed.

### Production Build

To create an optimized production build:

```bash
pnpm build
```

This will generate a `dist` folder with optimized production files.

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Starts development server with hot reload |
| `pnpm build` | Creates production-ready build in `dist/` |
| `pnpm preview` | Previews production build locally |
| `pnpm lint` | Runs ESLint to check code quality |

## 🛠 Tech Stack

### Core
- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Class name utilities

### UI Components
- **Radix UI** - Unstyled, accessible components
- **shadcn/ui** - Beautiful component collection
- **Lucide React** - Icon library
- **Recharts** - Chart components
- **Sonner** - Toast notifications

### State Management & Forms
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Internationalization
- **i18next** - Translation framework
- **react-i18next** - React bindings
- **i18next-browser-languagedetector** - Language detection
- **i18next-http-backend** - Translation file loading

### Other Tools
- **Axios** - HTTP client
- **QRCode** - QR code generation
- **date-fns** - Date utilities

## 📁 Project Structure

```
skai_front/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components
│   │   ├── ui/           # UI components (buttons, inputs, etc.)
│   │   └── Logo.jsx      # Centralized logo component
│   ├── config/           # Configuration files
│   │   └── theme.js      # Theme configuration
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.jsx
│   ├── layouts/          # Layout components
│   │   ├── HeaderLayout.jsx
│   │   ├── SidebarLayout.jsx
│   │   ├── FooterLayout.jsx
│   │   ├── CheckoutBarLayout.jsx
│   │   ├── SigninBoxLayout.jsx
│   │   └── NotificationBarLayout.jsx
│   ├── pages/            # Page components
│   │   ├── Catalog/      # Catalog page
│   │   └── ComposedLayout/ # Main composed layout
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md            # This file
```

## 🎨 Theme Customization

The application features a comprehensive theme system located in `src/config/theme.js`:

### Colors (8 total)
- **Primary**: #DA291C (Red) - Customizable brand color
- **Secondary**: #FFBC0D (Yellow) - Customizable accent color
- **White**: #FFFFFF
- **Black**: #000000
- **Grey Light**: #ECECEC - Subtle borders and backgrounds
- **Grey Dark**: #D5D5D5 - Prominent backgrounds and text
- **Success**: #10B981 (Green)
- **Error**: #EF4444 (Red)

### Fonts (2 total)
- **Serious Font**: Inter - For legal text and instructions
- **Branded Font**: Poppins - For headings and marketing content

### Logo Management
Centralized logo configuration with support for multiple variants (main, white, small).

**To customize the theme:**
1. Edit `src/config/theme.js`
2. Update `THEME_COLORS` for color changes
3. Update `CLIENT_LOGO` for logo paths
4. Components will automatically use the new theme

For detailed theme documentation, see `THEME_COLORS.md`.

## 🌐 Internationalization

The app supports multiple languages using i18next:

- **Default languages**: English (EN) and French (FR)
- **Translation files**: Located in `public/locales/`
- **Language switching**: Built into the header layout
- **Automatic detection**: Browser language detection enabled

To add a new language:
1. Create a new folder in `public/locales/` (e.g., `es/`)
2. Add translation files (e.g., `translation.json`)
3. Update language switcher component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential.
