import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/")} className="bg-primary hover:bg-primary/90">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
