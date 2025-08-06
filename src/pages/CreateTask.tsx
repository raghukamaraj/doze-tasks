import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CreateTask() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [taskText, setTaskText] = useState("");

  const handleCreateTask = () => {
    if (!taskText.trim()) {
      toast({
        title: "Error",
        description: "Please enter a task description",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save to your backend/state management
    toast({
      title: "Success",
      description: "Task created successfully!",
    });

    navigate("/tasks");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card p-6">
      <div className="max-w-md mx-auto pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/tasks")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="border-border shadow-elevated">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Create Task
            </CardTitle>
            <p className="text-muted-foreground">Add a new task to your list</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="task">Enter your new task</Label>
              <Input
                id="task"
                placeholder="What needs to be done?"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="border-border focus:ring-primary"
                autoFocus
              />
            </div>

            <Button onClick={handleCreateTask} className="w-full" size="lg">
              Add Task
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}