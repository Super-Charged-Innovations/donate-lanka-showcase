import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

export const MobileNav = ({ isOpen, onClose, navigationItems }: MobileNavProps) => {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  if (!isOpen) return null;

  return (
    <div 
      className={cn(
        "fixed top-20 left-1/2 -translate-x-1/2 z-[95] lg:hidden",
        "w-[90%] max-w-md",
        "bg-white/8 backdrop-blur-3xl border border-white/15",
        "rounded-2xl shadow-2xl shadow-black/10",
        "transition-all duration-200 ease-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
        {/* Navigation Links */}
        <nav className="p-3">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-warning/20 text-warning border-l-4 border-warning/50"
                    : "text-foreground/80 hover:bg-white/10 hover:text-warning"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
      </nav>
    </div>
  );
};