# Code Showcase App (Vite + TypeScript)

A modern React web application built with **Vite** and **TypeScript** for showcasing code snippets with beautiful syntax highlighting and copy functionality. Built with React, Material-UI, and React Router.

## 🚀 Features

- 🎨 **Beautiful UI**: Modern, responsive design with Material-UI components
- 📋 **Copy Functionality**: One-click code copying with visual feedback
- 🎯 **Syntax Highlighting**: Support for multiple programming languages
- 🔄 **Interactive Examples**: Live component examples with working code
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight**: Built with Vite for lightning-fast development
- 🔒 **Type Safety**: Full TypeScript support with proper type definitions

## 🛠️ Technologies Used

- **Vite** - Fast build tool and development server
- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI) v7** - Beautiful UI components
- **React Router** - Client-side routing
- **React Syntax Highlighter** - Code syntax highlighting
- **Emotion** - CSS-in-JS styling

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages. The deployment happens automatically when you push to the `main` or `master` branch.

#### Manual Deployment

If you want to deploy manually:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

#### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Set the source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

Your site will be available at: `https://yourusername.github.io/code-shelf/`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header component
│   └── CodeBlock.tsx       # Reusable code block with copy functionality
├── pages/
│   ├── Home.tsx            # Landing page with features overview
│   ├── CodeShowcase.tsx    # Code examples showcase
│   └── Examples.tsx        # Interactive component examples
├── App.tsx                 # Main app component with routing
└── main.tsx               # Application entry point
```

## 📄 Pages

### Home
- Welcome page with feature overview
- Quick navigation to other sections
- Beautiful hero section with call-to-action buttons

### Code Showcase
- Collection of code examples in various languages
- Syntax highlighting for JavaScript, JSX, TypeScript, CSS, Python, SQL
- Copy functionality for each code block
- Organized by programming language

### Examples
- Interactive React component examples
- Live preview of components in action
- Side-by-side code and demo display
- Includes Counter, Form Controls, and Timer components

## 💻 TypeScript Features

### Interfaces
```typescript
interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  description?: string
  showLineNumbers?: boolean
}

interface NavItem {
  path: string
  label: string
  icon: React.ReactElement
}
```

### Type Safety
- Proper type definitions for all components
- Type-safe state management with useState
- Generic types for reusable components
- Strict TypeScript configuration

## 🎯 Usage

### Adding New Code Examples

To add new code examples to the showcase:

1. Open `src/pages/CodeShowcase.tsx`
2. Add a new object to the `codeExamples` array:

```typescript
{
  title: 'Your Example Title',
  description: 'Description of what the code does',
  language: 'typescript', // or 'jsx', 'css', 'python', etc.
  code: `your code here`
}
```

### Creating Interactive Examples

To add new interactive examples:

1. Open `src/pages/Examples.tsx`
2. Add your component logic with proper TypeScript types
3. Create the corresponding code string
4. Add the component to the JSX with proper styling

## 📜 Available Scripts

- `npm run dev` - Runs the app in development mode with Vite
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint for code quality
- `npm run preview` - Preview the production build locally

## ⚙️ Configuration

### Vite Configuration
The project uses Vite for fast development and building. Configuration is in `vite.config.ts`.

### TypeScript Configuration
- Strict TypeScript configuration in `tsconfig.json`
- Separate configurations for app and Node.js environments
- ESLint integration for TypeScript

### Material-UI Theme
Custom theme configuration in `src/main.tsx`:

```typescript
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})
```

## 🌟 Key Improvements with Vite + TypeScript

### Performance
- **Vite**: Lightning-fast hot module replacement (HMR)
- **TypeScript**: Better IDE support and catch errors early
- **Modern Build**: Optimized for modern browsers

### Developer Experience
- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Enhanced IDE support
- **Faster Development**: Vite's instant server start

### Code Quality
- **Strict TypeScript**: Prevents runtime errors
- **ESLint Integration**: Code quality enforcement
- **Modern React**: Latest React features and patterns

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper TypeScript types
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions, please open an issue on the repository.

---

**Happy coding with TypeScript! 🚀**
