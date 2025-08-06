import { useState, useEffect } from "react";
import { TaskItem } from "@/components/ui/task-item";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Complete project proposal", completed: false },
    { id: "2", text: "Review code changes", completed: true },
    { id: "3", text: "Update documentation", completed: false },
    { id: "4", text: "Schedule team meeting", completed: false },
  ]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleToggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      const newText = prompt("Edit task:", task.text);
      if (newText) {
        setTasks(prev =>
          prev.map(t => (t.id === id ? { ...t, text: newText } : t))
        );
      }
    }
  };

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const userName = localStorage.getItem("userName") || "User";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Tasks</h1>
            <p className="text-muted-foreground">Hello, {userName}!</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onToggleComplete={handleToggleComplete}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No tasks yet!</p>
            <Button onClick={() => navigate("/create-task")}>
              Create your first task
            </Button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}