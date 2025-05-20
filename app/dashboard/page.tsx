import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Globe, Calendar, Clock, Filter } from "lucide-react"

const weekDays = [
  {
    title: "Monday: Farm Animals",
    activities: [
      "Morning circle: Farm animal sounds",
      "Art activity: Cotton wool sheep",
      'Story time: "The Little Red Hen"',
      "Outdoor play: Animal movement game",
    ],
  },
  {
    title: "Tuesday: Wild Animals",
    activities: [
      "Morning circle: Safari adventure",
      "Art activity: Paper plate lions",
      'Story time: "Giraffes Can\'t Dance"',
      "Outdoor play: Jungle obstacle course",
    ],
  },
  {
    title: "Wednesday: Ocean Animals",
    activities: [
      "Morning circle: Under the sea songs",
      "Art activity: Paper plate fish",
      'Story time: "Rainbow Fish"',
      "Sensory play: Ocean water table",
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
        <h1 className="text-xl font-semibold">School Dashboard</h1>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Globe className="mr-2 h-4 w-4" />
            <span>English</span>
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            <span>Customize</span>
          </Button>
        </div>
      </header>
      <div className="grid flex-1 items-start gap-4 p-4 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_250px]">
        <div className="hidden flex-col gap-4 md:flex">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Navigation</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 p-2">
              <Button variant="ghost" className="justify-start" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Weekly Content
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                <BookOpen className="mr-2 h-4 w-4" />
                Learning Materials
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                <Clock className="mr-2 h-4 w-4" />
                Activity Planner
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Downloads
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Language Settings</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 p-2">
              <Button variant="ghost" className="justify-start" size="sm">
                English
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                Español
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                Français
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Welcome, Little Stars Nursery</CardTitle>
              <CardDescription>Here's your weekly educational content and resources</CardDescription>
            </CardHeader>
          </Card>
          <Tabs defaultValue="current">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="current">Current Week</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="archive">Archive</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
            <TabsContent value="current" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Week 23: Animals and Their Habitats</CardTitle>
                      <CardDescription>May 10 - May 14, 2025</CardDescription>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {weekDays.map((day) => (
                      <Card key={day.title}>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">{day.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ul className="list-disc pl-4 text-sm space-y-1">
                            {day.activities.map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Materials
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <div className="grid w-full gap-2">
                    <h4 className="text-sm font-medium">Weekly Learning Objectives:</h4>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li>Identify and name common animals</li>
                      <li>Understand where different animals live</li>
                      <li>Develop vocabulary related to animals</li>
                      <li>Practice fine motor skills through craft activities</li>
                    </ul>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Upcoming Weekly Themes</CardTitle>
                  <CardDescription>Preview and prepare for future content</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Week 24: Plants and Growing</h3>
                        <p className="text-sm text-gray-500">May 17 - May 21, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </li>
                    <li className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Week 25: Weather and Seasons</h3>
                        <p className="text-sm text-gray-500">May 24 - May 28, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Week 26: Community Helpers</h3>
                        <p className="text-sm text-gray-500">May 31 - June 4, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="archive" className="mt-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>Content Archive</CardTitle>
                  <CardDescription>Access previous weekly themes and materials</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search archive..."
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button variant="outline" size="sm">
                        Search
                      </Button>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-medium">Week 22: Colors and Shapes</h3>
                          <p className="text-sm text-gray-500">May 3 - May 7, 2025</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Access
                        </Button>
                      </li>
                      <li className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-medium">Week 21: My Body</h3>
                          <p className="text-sm text-gray-500">April 26 - April 30, 2025</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Access
                        </Button>
                      </li>
                      <li className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Week 20: Transportation</h3>
                          <p className="text-sm text-gray-500">April 19 - April 23, 2025</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Access
                        </Button>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <Button variant="outline" size="sm" className="w-full">
                    Load More
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="hidden flex-col gap-4 lg:flex">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Subscription Status</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Plan:</span>
                  <span className="text-sm">Standard</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <span className="text-sm text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Next billing:</span>
                  <span className="text-sm">June 1, 2025</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Manage Subscription
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Quick Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 p-2">
              <Button variant="ghost" className="justify-start" size="sm">
                Teaching Guides
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                Printable Worksheets
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                Song Collection
              </Button>
              <Button variant="ghost" className="justify-start" size="sm">
                Parent Handouts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
