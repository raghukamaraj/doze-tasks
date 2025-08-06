import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Palette, Volume2, Info, Trash2, LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Settings() {
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const settingsItems = [
    { icon: Palette, label: "Themes", action: () => console.log("Themes") },
    { icon: Volume2, label: "Sounds", action: () => console.log("Sounds") },
    { icon: Info, label: "About Us", action: () => console.log("About Us") },
  ];

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
              Settings
            </CardTitle>
            <p className="text-muted-foreground">Manage your preferences</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {settingsItems.map(({ icon: Icon, label, action }) => (
              <Button
                key={label}
                variant="ghost"
                onClick={action}
                className="w-full justify-start h-12 px-4"
              >
                <Icon className="mr-3 h-5 w-5" />
                {label}
              </Button>
            ))}

            <div className="border-t border-border pt-4 space-y-3">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-12 px-4 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="mr-3 h-5 w-5" />
                    Delete Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove all your data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteAccount}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full justify-start h-12 px-4"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}