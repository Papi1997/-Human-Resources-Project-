import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Review {
  id: string;
  employeeName: string;
  position: string;
  dueDate: Date;
  status: "pending" | "in-progress" | "completed";
}

const reviews: Review[] = [
  {
    id: "1",
    employeeName: "Sarah Johnson",
    position: "Software Engineer",
    dueDate: new Date(2025, 4, 15),
    status: "pending",
  },
  {
    id: "2",
    employeeName: "Michael Chen",
    position: "Product Manager",
    dueDate: new Date(2025, 4, 18),
    status: "in-progress",
  },
  {
    id: "3",
    employeeName: "Aisha Patel",
    position: "UX Designer",
    dueDate: new Date(2025, 4, 20),
    status: "pending",
  },
  {
    id: "4",
    employeeName: "David Rodriguez",
    position: "Marketing Specialist",
    dueDate: new Date(2025, 4, 25),
    status: "completed",
  },
];

const UpcomingReviews = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Upcoming Performance Reviews</CardTitle>
        <CardDescription>
          Reviews that need your attention in the coming days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell className="font-medium">
                  {review.employeeName}
                </TableCell>
                <TableCell>{review.position}</TableCell>
                <TableCell>{format(review.dueDate, "MMM dd, yyyy")}</TableCell>
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
  );
};

export default UpcomingReviews;
