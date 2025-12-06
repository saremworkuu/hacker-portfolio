"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Globe, Box, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-xs font-mono">
            <span className="text-primary">contact.jsx</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Let's build and break things (responsibly)</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Reach out for junior roles, internships, collaborations, or just to discuss security learning paths.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border bg-card p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border"
                  required
                />
                <p className="text-xs text-muted-foreground">I'll only use this to reply to your message.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about the role, project, or idea."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border min-h-[150px]"
                  required
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Validation and sending will be handled in React with basic visual states.{" "}
                <span className="text-primary">Static preview</span>
              </p>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border bg-card p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold">
                  Prefer email? Reach me at{" "}
                  <Link href="mailto:saremworkuu@gmail.com" className="text-primary hover:underline">
                    saremworkuu@gmail.com
                  </Link>
                </p>
              </div>
            </Card>

            <Card className="border-border bg-card p-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Socials & CTF profiles</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="justify-start bg-transparent" asChild>
                    <Link href="https://github.com/saremworkuu" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start bg-transparent" asChild>
                    <Link
                      href="https://www.linkedin.com/in/sarendem-worku-5405a3341/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start bg-transparent" asChild>
                    <Link href="https://app.hackthebox.com/users/2894614" target="_blank" rel="noopener noreferrer">
                      <Box className="h-4 w-4 mr-2" />
                      Hack The Box
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start bg-transparent" asChild>
                    <Link href="https://tryhackme.com/p/sarendem" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      TryHackMe
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start col-span-2 bg-transparent" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Mail className="h-4 w-4 mr-2" />
                      Blog
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
