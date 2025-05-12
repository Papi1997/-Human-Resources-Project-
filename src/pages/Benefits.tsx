mport { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Info, Download, Check, Heart, Shield, Coins, Activity } from "lucide-react";

// Mock health plans data
const healthPlans = [
  {
    id: "1",
    name: "Standard PPO",
    type: "PPO",
    coverage: "Individual",
    cost: "$120/month",
    deductible: "$1,000",
    benefits: "General medical, preventive care, specialist visits",
    enrolled: true,
  },
  {
    id: "2",
    name: "Premium PPO",
    type: "PPO",
    coverage: "Family",
    cost: "$320/month",
    deductible: "$750",
    benefits: "General medical, preventive care, specialist visits, enhanced coverage",
    enrolled: false,
  },
  {
    id: "3",
    name: "Basic HMO",
    type: "HMO",
    coverage: "Individual",
    cost: "$90/month",
    deductible: "$1,500",
    benefits: "General medical, preventive care, in-network only",
    enrolled: false,
  },
  {
    id: "4",
    name: "High Deductible Plan",
    type: "HDHP",
    coverage: "Individual",
    cost: "$80/month",
    deductible: "$2,500",
    benefits: "General medical, preventive care, HSA eligible",
    enrolled: false,
  },
];

// Mock dental plans data
const dentalPlans = [
  {
    id: "1",
    name: "Basic Dental",
    coverage: "Individual",
    cost: "$20/month",
    deductible: "$100",
    benefits: "Cleanings, X-rays, basic procedures",
    enrolled: true,
  },
  {
    id: "2",
    name: "Premium Dental",
    coverage: "Family",
    cost: "$65/month",
    deductible: "$75",
    benefits: "Cleanings, X-rays, all procedures, orthodontics",
    enrolled: false,
  },
];

// Mock vision plans data
const visionPlans = [
  {
    id: "1",
    name: "Basic Vision",
    coverage: "Individual",
    cost: "$10/month",
    deductible: "$25",
    benefits: "Annual exam, standard frames allowance",
    enrolled: false,
  },
  {
    id: "2",
    name: "Premium Vision",
    coverage: "Family",
    cost: "$30/month",
    deductible: "$0",
    benefits: "Annual exam, premium frames allowance, contacts",
    enrolled: false,
  },
];

// Mock retirement plans data
const retirementPlans = [
  {
    id: "1",
    name: "401(k) Plan",
    contribution: "8% of salary",
    matchRate: "100% up to 6%",
    vestingPeriod: "3 years",
    benefits: "Pre-tax contributions, diverse investment options",
    enrolled: true,
  },
];

// Mock wellness programs data
const wellnessPrograms = [
  {
    id: "1",
    name: "Fitness Reimbursement",
    type: "Financial",
    benefit: "Up to $50/month for gym membership",
    enrolled: true,
  },
  {
    id: "2",
    name: "Mental Health Support",
    type: "Wellness",
    benefit: "Free counseling sessions and resources",
    enrolled: false,
  },
  {
    id: "3",
    name: "Health Screening",
    type: "Preventive",
    benefit: "Annual screening with reward points",
    enrolled: true,
  },
  {
    id: "4",
    name: "Smoking Cessation",
    type: "Wellness",
    benefit: "Free program and medication support",
    enrolled: false,
  },
];

const Benefits = () => {
  // Enrollment statistics
  const enrolledBenefits = 4; // Total benefits the user is enrolled in
  const totalBenefits = 11; // Total benefits available
  const enrollmentPercentage = (enrolledBenefits / totalBenefits) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Benefits Administration
            </h1>
            <p className="text-muted-foreground">
              Manage your employee benefits and enrollments
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Enrollment Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">
                      {enrolledBenefits} of {totalBenefits} benefits
                    </span>
                    <span className="text-sm font-medium">
                      {enrollmentPercentage.toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={enrollmentPercentage} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Health Benefits
                </CardTitle>
                <Heart className="h-4 w-4 text-hr-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1 of 4</div>
                <p className="text-xs text-muted-foreground">Plans enrolled</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Dental & Vision
                </CardTitle>
                <Activity className="h-4 w-4 text-hr-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1 of 4</div>
                <p className="text-xs text-muted-foreground">Plans enrolled</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Financial & Wellness
                </CardTitle>
                <Coins className="h-4 w-4 text-hr-purple" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 of 3</div>
                <p className="text-xs text-muted-foreground">Plans enrolled</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="health" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="dental">Dental & Vision</TabsTrigger>
              <TabsTrigger value="retirement">Retirement</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>

            <TabsContent value="health">
              <Card>
                <CardHeader>
                  <CardTitle>Health Insurance Plans</CardTitle>
                  <CardDescription>
                    View and manage your health insurance options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Plan Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Coverage</TableHead>
                        <TableHead>Monthly Cost</TableHead>
                        <TableHead>Deductible</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {healthPlans.map((plan) => (
                        <TableRow key={plan.id}>
                          <TableCell className="font-medium">
                            {plan.name}
                          </TableCell>
                          <TableCell>{plan.type}</TableCell>
                          <TableCell>{plan.coverage}</TableCell>
                          <TableCell>{plan.cost}</TableCell>
                          <TableCell>{plan.deductible}</TableCell>
                          <TableCell>
                            <Badge
                              variant={plan.enrolled ? "default" : "outline"}
                            >
                              {plan.enrolled ? "Enrolled" : "Not Enrolled"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Info className="h-4 w-4" />
                                <span className="sr-only">Details</span>
                              </Button>
                              {plan.enrolled ? (
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="text-xs"
                                >
                                  Unenroll
                                </Button>
                              ) : (
                                <Button size="sm" className="text-xs">
                                  Enroll
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Summary
                  </Button>
                  <Button className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="dental">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dental Plans</CardTitle>
                    <CardDescription>
                      View and manage your dental insurance options
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Plan Name</TableHead>
                          <TableHead>Coverage</TableHead>
                          <TableHead>Monthly Cost</TableHead>
                          <TableHead>Deductible</TableHead>
                          <TableHead>Benefits</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dentalPlans.map((plan) => (
                          <TableRow key={plan.id}>
                            <TableCell className="font-medium">
                              {plan.name}
                            </TableCell>
                            <TableCell>{plan.coverage}</TableCell>
                            <TableCell>{plan.cost}</TableCell>
                            <TableCell>{plan.deductible}</TableCell>
                            <TableCell>{plan.benefits}</TableCell>
                            <TableCell>
                              <Badge
                                variant={plan.enrolled ? "default" : "outline"}
                              >
                                {plan.enrolled ? "Enrolled" : "Not Enrolled"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <Info className="h-4 w-4" />
                                  <span className="sr-only">Details</span>
                                </Button>
                                {plan.enrolled ? (
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    className="text-xs"
                                  >
                                    Unenroll
                                  </Button>
                                ) : (
                                  <Button size="sm" className="text-xs">
                                    Enroll
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vision Plans</CardTitle>
                    <CardDescription>
                      View and manage your vision insurance options
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Plan Name</TableHead>
                          <TableHead>Coverage</TableHead>
                          <TableHead>Monthly Cost</TableHead>
                          <TableHead>Deductible</TableHead>
                          <TableHead>Benefits</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {visionPlans.map((plan) => (
                          <TableRow key={plan.id}>
                            <TableCell className="font-medium">
                              {plan.name}
                            </TableCell>
                            <TableCell>{plan.coverage}</TableCell>
                            <TableCell>{plan.cost}</TableCell>
                            <TableCell>{plan.deductible}</TableCell>
                            <TableCell>{plan.benefits}</TableCell>
                            <TableCell>
                              <Badge
                                variant={plan.enrolled ? "default" : "outline"}
                              >
                                {plan.enrolled ? "Enrolled" : "Not Enrolled"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <Info className="h-4 w-4" />
                                  <span className="sr-only">Details</span>
                                </Button>
                                {plan.enrolled ? (
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    className="text-xs"
                                  >
                                    Unenroll
                                  </Button>
                                ) : (
                                  <Button size="sm" className="text-xs">
                                    Enroll
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="retirement">
              <Card>
                <CardHeader>
                  <CardTitle>Retirement Plans</CardTitle>
                  <CardDescription>
                    View and manage your retirement benefit options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Plan Name</TableHead>
                        <TableHead>Your Contribution</TableHead>
                        <TableHead>Employer Match</TableHead>
                        <TableHead>Vesting Period</TableHead>
                        <TableHead>Benefits</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {retirementPlans.map((plan) => (
                        <TableRow key={plan.id}>
                          <TableCell className="font-medium">
                            {plan.name}
                          </TableCell>
                          <TableCell>{plan.contribution}</TableCell>
                          <TableCell>{plan.matchRate}</TableCell>
                          <TableCell>{plan.vestingPeriod}</TableCell>
                          <TableCell>{plan.benefits}</TableCell>
                          <TableCell>
                            <Badge
                              variant={plan.enrolled ? "default" : "outline"}
                            >
                              {plan.enrolled ? "Enrolled" : "Not Enrolled"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Info className="h-4 w-4" />
                                <span className="sr-only">Details</span>
                              </Button>
                              {plan.enrolled ? (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-xs"
                                >
                                  Edit
                                </Button>
                              ) : (
                                <Button size="sm" className="text-xs">
                                  Enroll
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Summary
                  </Button>
                  <Button className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="wellness">
              <Card>
                <CardHeader>
                  <CardTitle>Wellness Programs</CardTitle>
                  <CardDescription>
                    View and manage your wellness program options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Program Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Benefit</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {wellnessPrograms.map((program) => (
                        <TableRow key={program.id}>
                          <TableCell className="font-medium">
                            {program.name}
                          </TableCell>
                          <TableCell>{program.type}</TableCell>
                          <TableCell>{program.benefit}</TableCell>
                          <TableCell>
                            <Badge
                              variant={program.enrolled ? "default" : "outline"}
                            >
                              {program.enrolled ? "Enrolled" : "Not Enrolled"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Info className="h-4 w-4" />
                                <span className="sr-only">Details</span>
                              </Button>
                              {program.enrolled ? (
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="text-xs"
                                >
                                  Unenroll
                                </Button>
                              ) : (
                                <Button size="sm" className="text-xs">
                                  Enroll
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Summary
                  </Button>
                  <Button className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Benefits;
