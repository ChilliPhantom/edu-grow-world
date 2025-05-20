import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Globe, Users, Calendar, Settings, Heart } from "lucide-react"

// Reusable checkmark SVG component
function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4 text-green-500"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

// Feature cards data
const features = [
  {
    icon: Calendar,
    title: "Weekly Content",
    description: "Structured weekly themes and activities",
    details: "Access new educational themes, tasks, and materials every week, carefully designed for early childhood development.",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Content in multiple languages",
    details: "All educational materials are available in multiple languages to support diverse linguistic needs across the world.",
  },
  {
    icon: BookOpen,
    title: "E-learning Tools",
    description: "Modern teaching resources",
    details: "Up-to-date e-learning tools and resources to enhance teaching methods and engage young learners effectively.",
  },
  {
    icon: Users,
    title: "School Management",
    description: "Easy registration and access",
    details: "Simple registration process for schools with dedicated dashboards for teachers and administrators.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Adapt to your school's needs",
    details: "Customize content based on cultural preferences, religious beliefs, and specific educational requirements.",
  },
  {
    icon: Heart,
    title: "Affordable",
    description: "Quality education for all",
    details: "Flexible subscription model designed to be accessible for all schools, including those in less fortunate areas.",
  },
]

// Pricing cards data
const pricing = [
  {
    title: "Basic",
    description: "For small nursery schools",
    price: "$29",
    features: [
      "Weekly educational content",
      "2 language options",
      "Basic e-learning tools",
      "Up to 3 teacher accounts",
    ],
    highlight: false,
  },
  {
    title: "Standard",
    description: "For medium-sized nursery schools",
    price: "$49",
    features: [
      "Weekly educational content",
      "All language options",
      "Advanced e-learning tools",
      "Up to 10 teacher accounts",
      "Cultural customization options",
    ],
    highlight: true,
  },
  {
    title: "Premium",
    description: "For larger nursery schools",
    price: "$89",
    features: [
      "Weekly educational content",
      "All language options",
      "Premium e-learning tools",
      "Unlimited teacher accounts",
      "Full customization options",
      "Priority support",
    ],
    highlight: false,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="w-full bg-white shadow-sm">
        <nav className="container flex items-center justify-between py-4">
          <span className="text-2xl font-extrabold text-purple-600 tracking-tight">EDU GROW</span>
          <ul className="hidden md:flex gap-8 text-base font-medium text-gray-700">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
          <div className="flex gap-2">
            <Button variant="outline" className="hidden md:inline-block">Log In</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Register</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-lg text-sm font-medium">
              Early Childhood Development
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Nurturing Young Minds Across The World
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            Affordable, high-quality educational content for nursery schools in multiple languages including Afrikaans, English, and Tswana.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Get Started</Button>
            <Button variant="outline" className="px-6 py-3 rounded-lg font-semibold">View Dashboard</Button>
            <Button variant="outline" className="px-6 py-3 rounded-lg font-semibold">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides everything nursery schools need to deliver quality early childhood education.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {features.map((feature, idx) => (
              <Card key={feature.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="h-8 w-8 text-purple-600" aria-label={feature.title} />
                  <div className="grid gap-1">
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{feature.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed to be simple and effective for nursery schools across the world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold">Register Your School</h3>
              <p className="text-sm text-gray-500">
                Create an account for your nursery school and select your subscription plan.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold">Customize Settings</h3>
              <p className="text-sm text-gray-500">
                Set your language preferences, cultural settings, and educational focus areas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold">Access Weekly Content</h3>
              <p className="text-sm text-gray-500">
                Receive weekly themes, activities, and resources tailored to your school's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Affordable Pricing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Quality early childhood education shouldn't be a luxury. Our pricing is designed to be accessible for
                all schools.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {pricing.map((plan) => (
              <Card
                key={plan.title}
                className={`border-2 ${plan.highlight ? "border-purple-600" : ""}`}
                aria-label={`${plan.title} plan`}
              >
                <CardHeader>
                  {plan.highlight && (
                    <div className="px-4 py-1 text-xs font-bold bg-purple-100 text-purple-600 rounded-full w-fit mx-auto mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li className="flex items-center" key={f}>
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Need a custom plan for your school network?{" "}
              <Link href="#" className="text-purple-600 hover:underline">
                Contact us
              </Link>{" "}
              for special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Early Childhood Education?
              </h2>
              <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of nursery schools across the world already using our platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-purple-600 hover:bg-purple-100">Register Your School</Button>
              <Button variant="outline" className="text-white border-white hover:bg-purple-700">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">EDU GROW WORLD</h3>
              <p className="text-sm text-gray-500">
                Providing quality early childhood development resources for nursery schools worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-purple-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-500">123 Education Street, New York, USA</li>
                <li className="text-gray-500">info@edugrowworld.com</li>
                <li className="text-gray-500">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-gray-500">© 2025 EDU GROW WORLD. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-gray-500 hover:text-purple-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-purple-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
