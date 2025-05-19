"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RegisterPage() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Register Your School</CardTitle>
          <CardDescription>Join our platform to access quality early childhood development resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-purple-600 text-white" : "bg-gray-200"}`}
              >
                1
              </div>
              <div className={`h-1 flex-1 ${step >= 2 ? "bg-purple-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-purple-600 text-white" : "bg-gray-200"}`}
              >
                2
              </div>
              <div className={`h-1 flex-1 ${step >= 3 ? "bg-purple-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-purple-600 text-white" : "bg-gray-200"}`}
              >
                3
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span>School Information</span>
              <span>Preferences</span>
              <span>Subscription</span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="school-name">School Name</Label>
                  <Input id="school-name" placeholder="Enter school name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registration-number">Registration Number</Label>
                  <Input id="registration-number" placeholder="School registration number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Physical Address</Label>
                <Input id="address" placeholder="Street address" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="State/Province" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code">Postal Code</Label>
                  <Input id="postal-code" placeholder="Postal code" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="za">South Africa</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <Input id="contact-person" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" placeholder="e.g. Principal, Director" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="students">Number of Students</Label>
                <Select>
                  <SelectTrigger id="students">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1-20</SelectItem>
                    <SelectItem value="21-50">21-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="101-200">101-200</SelectItem>
                    <SelectItem value="200+">200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Language Preferences</h3>
                <p className="text-sm text-gray-500">Select your preferred languages for educational content</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="english" />
                    <Label htmlFor="english">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="spanish" />
                    <Label htmlFor="spanish">Spanish</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="french" />
                    <Label htmlFor="french">French</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="arabic" />
                    <Label htmlFor="arabic">Arabic</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mandarin" />
                    <Label htmlFor="mandarin">Mandarin</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Cultural Preferences</h3>
                <p className="text-sm text-gray-500">Select cultural contexts for educational content</p>
                <RadioGroup defaultValue="inclusive">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="inclusive" id="inclusive" />
                    <Label htmlFor="inclusive">Inclusive (all cultures)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="western" id="western" />
                    <Label htmlFor="western">Western-centered</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eastern" id="eastern" />
                    <Label htmlFor="eastern">Eastern-centered</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="african" id="african" />
                    <Label htmlFor="african">African-centered</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom">Custom mix (specify in notes)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Religious Preferences</h3>
                <p className="text-sm text-gray-500">Select religious context for educational content</p>
                <RadioGroup defaultValue="secular">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="secular" id="secular" />
                    <Label htmlFor="secular">Secular (non-religious)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="christian" id="christian" />
                    <Label htmlFor="christian">Christian</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="islamic" id="islamic" />
                    <Label htmlFor="islamic">Islamic</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multi" id="multi" />
                    <Label htmlFor="multi">Multi-faith</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <textarea
                  id="notes"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Any specific requirements or preferences"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Choose Your Subscription Plan</h3>
                <p className="text-sm text-gray-500">Select the plan that best fits your school's needs</p>

                <RadioGroup defaultValue="standard">
                  <div className="grid gap-4">
                    <div className="relative rounded-lg border p-4 hover:border-purple-200">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic" id="basic" />
                        <div className="grid gap-1">
                          <Label htmlFor="basic" className="font-medium">
                            Basic Plan
                          </Label>
                          <p className="text-sm text-gray-500">$29/month - For small nursery schools</p>
                        </div>
                        <div className="ml-auto font-medium">$29</div>
                      </div>
                      <div className="mt-2 pl-6 text-sm text-gray-500">
                        Weekly educational content, 2 language options, basic e-learning tools, up to 3 teacher accounts
                      </div>
                    </div>

                    <div className="relative rounded-lg border-2 border-purple-600 p-4 hover:bg-purple-50">
                      <div className="absolute -top-2 right-4 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-600">
                        POPULAR
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <div className="grid gap-1">
                          <Label htmlFor="standard" className="font-medium">
                            Standard Plan
                          </Label>
                          <p className="text-sm text-gray-500">$49/month - For medium-sized nursery schools</p>
                        </div>
                        <div className="ml-auto font-medium">$49</div>
                      </div>
                      <div className="mt-2 pl-6 text-sm text-gray-500">
                        Weekly educational content, all language options, advanced e-learning tools, up to 10 teacher
                        accounts, cultural customization options
                      </div>
                    </div>

                    <div className="relative rounded-lg border p-4 hover:border-purple-200">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <div className="grid gap-1">
                          <Label htmlFor="premium" className="font-medium">
                            Premium Plan
                          </Label>
                          <p className="text-sm text-gray-500">$89/month - For larger nursery schools</p>
                        </div>
                        <div className="ml-auto font-medium">$89</div>
                      </div>
                      <div className="mt-2 pl-6 text-sm text-gray-500">
                        Weekly educational content, all language options, premium e-learning tools, unlimited teacher
                        accounts, full customization options, priority support
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Billing Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Name on Card</Label>
                    <Input id="card-name" placeholder="Full name on card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="Card number" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-month">Expiry Month</Label>
                    <Select>
                      <SelectTrigger id="expiry-month">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i} value={String(i + 1).padStart(2, "0")}>
                            {String(i + 1).padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry-year">Expiry Year</Label>
                    <Select>
                      <SelectTrigger id="expiry-year">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i} value={String(2025 + i)}>
                            {2025 + i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billing-address">Billing Address</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="same-address" />
                    <Label htmlFor="same-address" className="text-sm">
                      Same as school address
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="#" className="text-purple-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              Previous
            </Button>
          ) : (
            <Link href="/">
              <Button variant="outline">Cancel</Button>
            </Link>
          )}
          {step < 3 ? (
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button className="bg-purple-600 hover:bg-purple-700">Complete Registration</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
