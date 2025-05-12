import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Search, Plus, Filter } from "lucide-react";

// Mock data for reviews
const reviewData = [
  {
    id: "1",
    employeeName: "Sarah Johnson",
    position: "Software Engineer",
    type: "Annual",
    dueDate: new Date(2025, 4, 15),
    status: "pending",
  },
  {
    id: "2",
    employeeName: "Michael Chen",
    position: "Product Manager",
    type: "Quarterly",
    dueDate: new Date(2025, 4, 18),
    status: "in-progress",
  },
  {
    id: "3",
    employeeName: "Aisha Patel",
    position: "UX Designer",
    type: "Annual",
    dueDate: new Date(2025, 4, 20),
    status: "pending",
  },
  {
    id: "4",
    employeeName: "David Rodriguez",
    position: "Marketing Specialist",
    type: "Quarterly",
    dueDate: new Date(2025, 4, 25),
    status: "completed",
  },
  {
    id: "5",
    employeeName: "Lisa Wong",
    position: "Data Analyst",
    type: "Annual",
    dueDate: new Date(2024, 11, 10),
    status: "completed",
  },
];

// Mock data for goals
const goalData = [
  {
    id: "1",
    name: "Improve customer satisfaction",
    assignee: "Sarah Johnson",
    dueDate: new Date(2025, 6, 30),
    progress: 60,
    status: "in-progress",
  },
  {
    id: "2",
    name: "Launch new product feature",
    assignee: "Michael Chen",
    dueDate: new Date(2025, 5, 15),
    progress: 40,
    status: "in-progress",
  },
  {
    id: "3",
    name: "Reduce customer churn by 5%",
    assignee: "Aisha Patel",
    dueDate: new Date(2025, 7, 1),
    progress: 25,
    status: "in-progress",
  },
  {
    id: "4",
    name: "Implement new HR policy",
    assignee: "David Rodriguez",
    dueDate: new Date(2025, 4, 30),
    progress: 100,
    status: "completed",
  },
];

// Mock data for feedback
const feedbackData = [
  {
    id: "1",
    from: "John Smith",
    to: "Sarah Johnson",
    date: new Date(2025, 3, 15),
    type: "Praise",
    status: "shared",
  },
  {
    id: "2",
    from: "Sarah Johnson",
    to: "Michael Chen",
    date: new Date(2025, 3, 10),
    type: "Constructive",
    status: "shared",
  },
  {
    id: "3",
    from: "Aisha Patel",
    to: "Sarah Johnson",
    date: new Date(2025, 3, 5),
    type: "Praise",
    status: "draft",
  },
  {
    id: "4",
    from: "David Rodriguez",
    to: "Lisa Wong",
    date: new Date(2025, 2, 20),
    type: "Constructive",
    status: "shared",
  },
];

const Performance = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Performance Management
            </h1>
            <p className="text-muted-foreground">
              Manage performance reviews, goals, and feedback
            </p>
          </div>

          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Reviews</CardTitle>
                  <CardDescription>
                    Manage and track employee performance reviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search reviews..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          <SelectValue placeholder="All Statuses" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" /> New Review
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reviewData.map((review) => (
                        <TableRow key={review.id}>
                          <TableCell className="font-medium">
                            {review.employeeName}
                          </TableCell>
                          <TableCell>{review.position}</TableCell>
                          <TableCell>{review.type}</TableCell>
                          <TableCell>
                            {format(review.dueDate, "MMM dd, yyyy")}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                review.status === "completed"
                                  ? "default"
                                  : review.status === "in-progress"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {review.status === "in-progress"
                                ? "In Progress"
                                : review.status === "completed"
                                ? "Completed"
                                : "Pending"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              disabled={review.status === "completed"}
                            >
                              {review.status === "in-progress"
                                ? "Continue"
                                : review.status === "completed"
                                ? "View"
                                : "Start"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="goals">
              <Card>
                <CardHeader>
                  <CardTitle>Goals & Objectives</CardTitle>
                  <CardDescription>
                    Track and manage individual and team goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search goals..."
                        className="pl-8"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          <SelectValue placeholder="All Statuses" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" /> New Goal
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Goal</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {goalData.map((goal) => (
                        <TableRow key={goal.id}>
                          <TableCell className="font-medium">
                            {goal.name}
                          </TableCell>
                          <TableCell>{goal.assignee}</TableCell>
                          <TableCell>
                            {format(goal.dueDate, "MMM dd, yyyy")}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${
                                    goal.status === "completed"
                                      ? "bg-green-500"
                                      : "bg-hr-purple"
                                  }`}
                                  style={{ width: `${goal.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {goal.progress}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                goal.status === "completed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {goal.status === "completed"
                                ? "Completed"
                                : "In Progress"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs"
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="feedback">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Management</CardTitle>
                  <CardDescription>
                    Provide and manage feedback to team members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search feedback..."
                        className="pl-8"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          <SelectValue placeholder="All Types" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="praise">Praise</SelectItem>
                        <SelectItem value="constructive">Constructive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" /> New Feedback
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>From</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feedbackData.map((feedback) => (
                        <TableRow key={feedback.id}>
                          <TableCell className="font-medium">
                            {feedback.from}
                          </TableCell>
                          <TableCell>{feedback.to}</TableCell>
                          <TableCell>
                            {format(feedback.date, "MMM dd, yyyy")}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                feedback.type === "Praise"
                                  ? "default"
                                  : "outline"
                              }
                            >
                              {feedback.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                feedback.status === "shared"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {feedback.status === "shared"
                                ? "Shared"
                                : "Draft"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs"
                            >
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Performance;
