import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "HTB — Web Attack Notebook",
    description:
      "A structured Obsidian-style notebook for Hack The Box web challenges, including payload templates, recon checklists, and exploitation notes.",
    tags: ["Recon", "XSS", "SQLi", "Methodology"],
    status: "WIP",
    statusColor: "bg-badge-purple",
    links: [
      { label: "Case study", href: "#" },
      { label: "GitHub", href: "#", icon: Github },
    ],
  },
  {
    title: "THM — Web Fundamentals Path",
    description:
      "Completed TryHackMe's web fundamentals path with detailed writeups, exploring core concepts and exploitation steps for each room.",
    tags: ["Beginner", "Writeups", "HTTP", "Auth"],
    status: "TMC",
    statusColor: "bg-badge-blue",
    links: [{ label: "Read notes", href: "#" }],
  },
  {
    title: "Network Basics Lab",
    description:
      "Hands-on network fundamentals practice using Wireshark, capturing packets. Completed using Nmap, Metasploitable, and custom services.",
    tags: ["Nmap", "SSM", "Linux"],
    status: "Easy",
    statusColor: "bg-primary",
    links: [{ label: "Lab notes", href: "#" }],
  },
  {
    title: "Security Learning Tracker",
    description:
      "A JSON-based progress model for easy tracking of completed courses, completed modules, and study goals, using a React + Tailwind UI for easy updates.",
    tags: ["React", "Tailwind", "Planning"],
    status: "WIP",
    statusColor: "bg-badge-purple",
    links: [{ label: "Live demo", href: "#" }],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-xs font-mono">
          <span className="text-primary">project.js</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Hands-on labs, boxes, and security tooling</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A curated selection of CTF boxes, practice labs, and small tools that show how I learn and apply security
          concepts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${project.statusColor} text-white shrink-0`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-primary hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <Link href={link.href}>
                      {link.icon && <link.icon className="h-3 w-3 mr-1" />}
                      {link.label}
                      {!link.icon && <ExternalLink className="h-3 w-3 ml-1" />}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
