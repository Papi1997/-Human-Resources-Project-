import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    name: "Health Insurance",
    enrolled: true,
    coverage: "Comprehensive",
    renewalDate: "Jan 1, 2026",
  },
  {
    name: "Dental Insurance",
    enrolled: true,
    coverage: "Basic",
    renewalDate: "Jan 1, 2026",
  },
  {
    name: "Vision Insurance",
    enrolled: false,
    coverage: "Not enrolled",
    renewalDate: "N/A",
  },
  {
    name: "401(k) Plan",
    enrolled: true,
    coverage: "8% contribution",
    renewalDate: "Ongoing",
  },
];

const BenefitsEnrollment = () => {
  const enrolledCount = benefits.filter((benefit) => benefit.enrolled).length;
  const completionPercentage = (enrolledCount / benefits.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Benefits Enrollment</CardTitle>
        <CardDescription>
          Track your benefits enrollment status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              {enrolledCount} of {benefits.length} benefits enrolled
            </span>
            <span className="text-sm font-medium">
              {completionPercentage.toFixed(0)}%
            </span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <div className="mt-6 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{benefit.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {benefit.coverage}
                  </div>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full ${
                    benefit.enrolled
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {benefit.enrolled ? "Enrolled" : "Not Enrolled"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Manage Benefits</Button>
      </CardFooter>
    </Card>
  );
};

export default BenefitsEnrollment;
