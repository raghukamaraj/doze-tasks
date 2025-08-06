import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import todoLogo from "@/assets/todo-logo.jpg";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center max-w-md w-full space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={todoLogo}
            alt="TODO Task Logo"
            className="w-24 h-24 drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold text-foreground">TODO Task</h1>
          <p className="text-muted-foreground text-center">
            Organize your life, one task at a time
          </p>
        </div>
        
        <Button
          onClick={() => navigate("/login")}
          className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
          size="lg"
        >
          Let's Go →
        </Button>
      </div>
    </div>
  );
}