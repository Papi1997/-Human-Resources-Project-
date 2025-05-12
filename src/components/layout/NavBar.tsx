import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Settings, BarChart, Heart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <Home className="h-5 w-5 mr-2" />,
  },
  {
    name: "Performance",
    path: "/performance",
    icon: <BarChart className="h-5 w-5 mr-2" />,
  },
  {
    name: "Benefits",
    path: "/benefits",
    icon: <Heart className="h-5 w-5 mr-2" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="h-5 w-5 mr-2" />,
  },
];

const NavBar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const renderNavItems = () => {
    return navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={`flex items-center px-3 py-2 rounded-md transition-colors ${
          location.pathname === item.path
            ? "bg-hr-purple text-white"
            : "hover:bg-hr-gray-light"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {item.icon}
        <span>{item.name}</span>
      </Link>
    ));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent hr-gradient mr-2">
              HR Portal
            </h1>
          </Link>
        </div>

        {!isMobile && (
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {renderNavItems()}
          </nav>
        )}

        <div className="ml-auto flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback className="bg-hr-purple text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@company.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent hr-gradient">
                      HR Portal
                    </h1>
                  </Link>
                  <nav className="flex flex-col gap-2">{renderNavItems()}</nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
