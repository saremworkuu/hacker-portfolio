import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Web",
    level: "Comfortable",
    skills: ["HTML / CSS / JS", "React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Network",
    level: "Learning",
    skills: ["TCP/IP basics", "Ports & services", "Nmap", "SSM"],
  },
  {
    category: "Tools",
    level: "Daily driver",
    skills: ["Linux", "Burp Suite", "ffuf", "Git & GitHub", "VS Code"],
  },
  {
    category: "Languages",
    level: "Working",
    skills: ["JavaScript", "TypeScript", "Python", "Bash"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-xs font-mono">
          <span className="text-primary">skills.js</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Security-focused web and network fundamentals</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Grouped by category for easy mapping to roles and responsibilities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-border bg-card p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">{category.category}</h3>
              <p className="text-sm text-muted-foreground italic">{category.level}</p>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-sm text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
