"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Globe, Box } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-primary">ROOT SEQUENCE: ONLINE / PORTFOLIO — V1.0.3</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="terminal-text glow-green">{">_"}</span> Hi, I'm Sarendem Worku
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">Cyber Security and Web Engineer</h2>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Computer Science & Engineering Student</p>
              <p>Adama Science and Technology University</p>
              <p className="text-primary">Cybersecurity Enthusiast</p>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl">
              I break and secure web applications while documenting the learning journey. Passionate about CTFs, bug
              bounties, and building security-first tools using modern web stacks.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#projects">View Work</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          <div className="pt-8 space-y-2">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">sarendem@portfolio:~$</span> cat about.txt
            </p>
            <p className="font-mono text-sm text-foreground pl-4">
              Software developer with a web dev. background. Building labs, solving boxes, and documenting insights to
              grow into a professional penetration tester.
            </p>
            <p className="font-mono text-sm text-primary pl-4 animate-pulse">
              sarendem@portfolio:~$ <span className="inline-block w-2 h-4 bg-primary ml-1"></span>
            </p>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="lg:sticky lg:top-24">
          <Card className="border-border bg-card p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/50 to-purple-500/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">SW</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary border-2 border-card"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl">Sarendem Worku</h3>
                <p className="text-sm text-muted-foreground">Cyber Security & Web Engineer</p>
                <p className="text-xs text-muted-foreground mt-1">UTC+1 • Sunday-Saturday 18:00-1</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">CTF Platforms</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground">
                    HTB, THM, pwn.college
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Web Stack</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground">
                    React, Node, Next.js, Tailwind
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">Education</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>Adama Science and Technology University</p>
                  <p className="text-primary">Computer Science & Engineering</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                🟢 Beginner-friendly environment
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                🎯 Hands-on labs
              </span>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold mb-3">Socials & CTF profiles</p>
              <div className="grid grid-cols-2 gap-2">
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
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
