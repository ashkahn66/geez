
import { ActivitySquare, BarChart3, Dumbbell, Timer } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { GoalProgress } from "@/components/dashboard/GoalProgress";
import { useCapacitor } from "@/hooks/use-capacitor";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Dashboard() {
  const { showNotification, isNative } = useCapacitor();

  useEffect(() => {
    // Show welcome notification when dashboard loads (only in native apps)
    if (isNative) {
      showNotification(
        "Welcome to GenZ CLG", 
        "Track your progress and stay productive!"
      );
    }
  }, [isNative, showNotification]);

  const handleRefresh = () => {
    toast.success("Dashboard refreshed!");
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your performance metrics and progress towards your goals.
          </p>
        </div>
        <Button 
          onClick={handleRefresh}
          variant="outline"
          className="hidden md:flex"
        >
          Refresh Data
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Activities"
          value={87}
          change={12}
          icon={ActivitySquare}
          description="vs. last month"
        />
        <StatsCard
          title="Active Time"
          value="28h 15m"
          change={8}
          icon={Timer}
          description="vs. last month"
        />
        <StatsCard
          title="Average Intensity"
          value="7.4/10"
          change={-2}
          icon={BarChart3}
          description="vs. last month"
        />
        <StatsCard
          title="Strength Training"
          value="12"
          change={25}
          icon={Dumbbell}
          description="sessions this month"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4 space-y-6">
          <PerformanceChart />
          <ActivityList />
        </div>
        <div className="md:col-span-3">
          <GoalProgress />
        </div>
      </div>
      
      <div className="fixed bottom-20 right-4 md:hidden">
        <Button 
          onClick={handleRefresh}
          size="sm"
          className="rounded-full h-12 w-12 shadow-lg bg-primary hover:bg-primary/90"
        >
          <BarChart3 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
