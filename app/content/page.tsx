import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Search, BookOpen } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
        <h1 className="text-xl font-semibold">Educational Content Library</h1>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search content..."
              className="w-64 rounded-md border border-gray-200 bg-white pl-8 pr-4 py-2 text-sm outline-none focus:border-purple-300"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </header>
      <div className="flex-1 p-6">
        <Tabs defaultValue="themes">
          <TabsList className="mb-6">
            <TabsTrigger value="themes">Weekly Themes</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="printables">Printables</TabsTrigger>
          </TabsList>

          <TabsContent value="themes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Current Week
                    </div>
                    <div className="text-sm text-gray-500">Week 23</div>
                  </div>
                  <CardTitle className="mt-2">Animals and Their Habitats</CardTitle>
                  <CardDescription>May 10 - May 14, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Explore different animals and where they live. Children will learn about farm animals, wild animals,
                    and ocean creatures.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span className="text-xs">15 Activities</span>
                    </div>
                    <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Ages 3-6</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Access Content
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      Coming Soon
                    </div>
                    <div className="text-sm text-gray-500">Week 24</div>
                  </div>
                  <CardTitle className="mt-2">Plants and Growing</CardTitle>
                  <CardDescription>May 17 - May 21, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Discover the world of plants and how they grow. Children will learn about seeds, flowers, trees, and
                    gardening.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span className="text-xs">12 Activities</span>
                    </div>
                    <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Ages 3-6</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Preview
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      Coming Soon
                    </div>
                    <div className="text-sm text-gray-500">Week 25</div>
                  </div>
                  <CardTitle className="mt-2">Weather and Seasons</CardTitle>
                  <CardDescription>May 24 - May 28, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Explore different types of weather and the four seasons. Children will learn about rain, sun, wind,
                    and seasonal changes.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <span className="text-xs">14 Activities</span>
                    </div>
                    <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Ages 3-6</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Preview
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Farm Animal Sounds</CardTitle>
                  <CardDescription>Interactive circle time activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Children learn to identify farm animals by their sounds and practice making animal sounds
                    themselves.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Circle Time</div>
                    <div className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                      Language Development
                    </div>
                    <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Ages 3-6</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">View Activity</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cotton Wool Sheep</CardTitle>
                  <CardDescription>Art and craft activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Children create sheep using paper plates, cotton wool, and black paper, developing fine motor
                    skills.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Art & Craft</div>
                    <div className="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">Fine Motor Skills</div>
                    <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Ages 3-6</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">View Activity</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ocean Sensory Bin</CardTitle>
                  <CardDescription>Sensory play activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Children explore an ocean-themed sensory bin with blue water, shells, and toy sea creatures.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-full">Sensory Play</div>
                    <div className="text-xs px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full">
                      Science Exploration
                    </div>
                    <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Ages 3-6</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">View Activity</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More Activities</Button>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Teacher Guides</CardTitle>
                  <CardDescription>Comprehensive teaching resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Detailed guides for teachers with lesson plans, learning objectives, and teaching strategies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Browse Guides</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Song Collection</CardTitle>
                  <CardDescription>Educational songs and rhymes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    A collection of songs and rhymes organized by theme to enhance learning through music.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Access Songs</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Story Books</CardTitle>
                  <CardDescription>Digital story collection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Digital storybooks with colorful illustrations to support literacy development and theme
                    exploration.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">View Stories</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="printables" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Worksheets</CardTitle>
                  <CardDescription>Printable activity sheets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Printable worksheets for various learning areas including literacy, numeracy, and theme-based
                    activities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Download Worksheets</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Flashcards</CardTitle>
                  <CardDescription>Visual learning aids</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Printable flashcards for vocabulary development, number recognition, and concept learning.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Download Flashcards</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Craft Templates</CardTitle>
                  <CardDescription>Ready-to-use craft patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Printable templates for art and craft activities related to weekly themes and special occasions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Download Templates</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
