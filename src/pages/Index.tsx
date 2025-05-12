// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
import { Clock, Users, Award, Target } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import StatCard from "@/components/dashboard/StatCard";
import UpcomingReviews from "@/components/dashboard/UpcomingReviews";
import BenefitsEnrollment from "@/components/dashboard/BenefitsEnrollment";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Your HR management overview and metrics
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Team Size"
              value="28"
              description="Total employees"
              icon={Users}
              trend="up"
              trendValue="+3 from last month"
            />
            <StatCard
              title="Reviews Due"
              value="12"
              description="In the next 30 days"
              icon={Clock}
              trend="up"
              trendValue="+5 from last month"
            />
            <StatCard
              title="Goals Set"
              value="87%"
              description="Team goal completion"
              icon={Target}
              trend="up"
              trendValue="+4% improvement"
            />
            <StatCard
              title="Benefits Enrolled"
              value="92%"
              description="Of eligible employees"
              icon={Award}
              trend="neutral"
              trendValue="No change"
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <UpcomingReviews />
            <BenefitsEnrollment />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
