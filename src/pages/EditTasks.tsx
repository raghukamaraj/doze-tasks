import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Edit3 } from "lucide-react";

export default function EditTasks() {
  const navigate = useNavigate();

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
              Edit Mode
            </CardTitle>
            <p className="text-muted-foreground">Bulk edit your tasks</p>
          </CardHeader>
          <CardContent className="text-center py-12">
            <Edit3 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-4">
              Edit mode allows you to reorder, bulk delete, or modify multiple tasks at once.
            </p>
            <p className="text-sm text-muted-foreground">
              This feature is coming soon!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}