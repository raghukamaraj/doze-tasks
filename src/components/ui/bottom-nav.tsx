import { Button } from "@/components/ui/button";
import { Settings, Edit3, Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: Edit3, label: "Edit", path: "/edit" },
    { icon: Plus, label: "Add", path: "/create-task" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center p-4 max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Button
            key={path}
            variant={location.pathname === path ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate(path)}
            className="flex flex-col gap-1 h-auto py-2 px-4"
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}