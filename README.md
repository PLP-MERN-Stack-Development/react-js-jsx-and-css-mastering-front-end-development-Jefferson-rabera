The link to live mode is; https://moderntaskflow.netlify.app/
# TaskFlow – Modern Task Management Application

A fully responsive React application demonstrating component architecture, state management, hooks usage, and API integration. Built with React, TypeScript, Tailwind CSS, and Vite.

## Features

### Task Management

- **Add Tasks**: Create new tasks with a simple, intuitive interface
- **Mark Complete**: Toggle task completion status
- **Delete Tasks**: Remove tasks you no longer need
- **Filter Tasks**: View All, Active, or Completed tasks
- **Persistent Storage**: Tasks are saved to localStorage automatically
- **Live Statistics**: Real-time stats showing total, active, and completed tasks

### API Data Explorer

- **Fetch Data**: Loads posts from JSONPlaceholder API
- **Search**: Filter posts by title or content in real-time
- **Pagination**: Navigate through pages of posts (9 per page)
- **Loading States**: Elegant loading animations
- **Error Handling**: Graceful error messages with retry functionality
- **Responsive Grid**: Adapts to mobile, tablet, and desktop screens

### Design Features

- **Theme Switcher**: Toggle between light and dark mode (persisted)
- **Beautiful UI**: Modern design with gradients and smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Reusable Components**: Button, Card, Navbar, Footer, and Layout components
- **Custom Hooks**: `useLocalStorage` for data persistence
- **Context API**: Theme management with React Context

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **JSONPlaceholder API** - Mock data

## Installation

```bash
# Clone the repository
git clone <your-repo-url>


# Navigate to the project directory
cd jsx-swift-forge-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` by default (Vite's default port). If you have changed the port, use the appropriate URL.

## Project Structure

```
src/
├── components/
│   ├── ApiData.tsx         # API data display component
│   ├── Button.tsx          # Reusable button with variants
│   ├── Card.tsx            # Card component with sub-components
│   ├── Footer.tsx          # Footer with links
│   ├── Layout.tsx          # Layout wrapper with navbar & footer
│   ├── Navbar.tsx          # Navigation with theme toggle
│   └── TaskManager.tsx     # Task management component
├── contexts/
│   └── ThemeContext.tsx    # Theme context provider
├── hooks/
│   └── useLocalStorage.ts  # Custom localStorage hook
├── pages/
│   ├── TasksPage.tsx       # Tasks page
│   ├── ApiDataPage.tsx     # API data page
│   └── NotFound.tsx        # 404 page
├── App.tsx                 # Main app component
├── index.css               # Global styles and design system
└── main.tsx                # Application entry point
```

## Key Features Implemented

### Component Architecture

- Reusable Button component with 5 variants (primary, secondary, danger, outline, ghost)
- Card component with CardHeader, CardTitle, CardContent sub-components
- Navbar with active route highlighting and theme toggle
- Footer with social links and quick navigation
- Layout component wrapping all pages

### State Management & Hooks

- `useState` for component state management
- `useEffect` for side effects (API calls, localStorage)
- `useContext` for theme management
- Custom `useLocalStorage` hook for data persistence
- Task filtering (All, Active, Completed)

### API Integration

- Fetch data from JSONPlaceholder API
- Loading state with animated spinner
- Error handling with retry functionality
- Search functionality to filter results
- Pagination with smart page number display
- Responsive grid layout

### Styling with Tailwind CSS

- Fully responsive design (mobile, tablet, desktop)
- Light/dark theme with smooth transitions
- Custom design system with CSS variables
- Gradient backgrounds and shadows
- Smooth animations (fade-in, slide-up, scale-in)
- Hover effects and transitions

## Design System

The application uses a comprehensive design system defined in `index.css` and `tailwind.config.ts`:

- **Success Color**: Green
- **Danger Color**: Red
- **Custom Gradients**: Primary and hero gradients
- **Shadows**: Soft, medium, and large shadows
- **Animations**: Fade-in, slide-up, scale-in

## Responsive Design

The application is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build

# Lint
npm run lint         # Run ESLint
```

## Project Fulfillments

This project fulfills all the requirements:

### Task 1: Project Setup

- React with Vite
- Tailwind CSS configured
- Organized project structure
- React Router setup

### Task 2: Component Architecture

- Button component with variants
- Card component with sub-components
- Navbar with navigation
- Footer with links
- Layout component
- All components use props for customization

### Task 3: State Management & Hooks

- TaskManager with full CRUD operations
- useState, useEffect, useContext implementation
- Custom useLocalStorage hook
- Task filtering functionality

### Task 4: API Integration

- JSONPlaceholder API integration
- Loading and error states
- Pagination implemented
- Search feature functional

### Task 5: Styling with Tailwind CSS

- Responsive design for all devices
- Light/dark theme switcher
- Utility-first styling approach
- Custom animations and transitions

## Learning Outcomes

This project demonstrates:

- Modern React patterns and best practices
- TypeScript integration
- Component composition and reusability
- State management with hooks
- API integration and data fetching
- Responsive design principles
- Tailwind CSS mastery
- Custom hook creation
- Context API usage
- Error handling and loading states

## License

This project is part of a React.js learning assignment.

## Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the mock API
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

---

Built with React, TypeScript, and Tailwind CSS.
