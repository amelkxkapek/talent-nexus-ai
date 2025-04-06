
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <div className="absolute inset-0 bg-talent-teal rounded-full blur-sm"></div>
            <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold gradient-text">TN</span>
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold gradient-text">Talent Nexus AI</h1>
        </Link>

        {isMobile ? (
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {menuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-4 z-50 flex flex-col gap-4 border-b border-gray-200">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${isActiveRoute("/dashboard") ? "bg-gray-100" : ""}`}
                  asChild
                >
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${isActiveRoute("/analysis") ? "bg-gray-100" : ""}`}
                  asChild
                >
                  <Link to="/analysis">CV Analysis</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${isActiveRoute("/projects") ? "bg-gray-100" : ""}`}
                  asChild
                >
                  <Link to="/projects">Projects</Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                  Get Started
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Button 
                variant="ghost" 
                className={isActiveRoute("/dashboard") ? "bg-gray-100" : ""}
                asChild
              >
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button 
                variant="ghost" 
                className={isActiveRoute("/analysis") ? "bg-gray-100" : ""}
                asChild
              >
                <Link to="/analysis">CV Analysis</Link>
              </Button>
              <Button 
                variant="ghost" 
                className={isActiveRoute("/projects") ? "bg-gray-100" : ""}
                asChild
              >
                <Link to="/projects">Projects</Link>
              </Button>
            </nav>
            <Button className="bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
