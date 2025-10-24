import { Link } from "react-router-dom";
import { Search, User, Package, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              TurboSzrot
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="ghost" size="icon">
                <MessageSquare className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="secondary">
                Seller Dashboard
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="gradient-accent">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
