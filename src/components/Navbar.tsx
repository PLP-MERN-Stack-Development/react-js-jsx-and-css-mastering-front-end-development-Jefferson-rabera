import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <img src="my-logo.ico" alt="TaskFlow Image" className="h-20 w-20" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TaskFlow
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={isActive('/') ? 'primary' : 'ghost'}
                size="sm"
              >
                Tasks
              </Button>
            </Link>
            <Link to="/api-data">
              <Button
                variant={isActive('/api-data') ? 'primary' : 'ghost'}
                size="sm"
              >
                API Data
              </Button>
            </Link>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 flex space-x-2">
          <Link to="/" className="flex-1">
            <Button
              variant={isActive('/') ? 'primary' : 'outline'}
              size="sm"
              className="w-full"
            >
              Tasks
            </Button>
          </Link>
          <Link to="/api-data" className="flex-1">
            <Button
              variant={isActive('/api-data') ? 'primary' : 'outline'}
              size="sm"
              className="w-full"
            >
              API Data
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};