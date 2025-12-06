import { Card } from "@/components/ui/card"

const certifications = [
  {
    name: "TryHackMe — Complete Beginner Path",
    issuer: "Issued: 2024 — TryHackMe",
    badge: "Hands-on labs",
    badgeColor: "bg-badge-blue",
  },
  {
    name: "Hack The Box — Starting Point",
    issuer: "Completed: 2024 — Hack The Box",
    badge: "Intro to offensive",
    badgeColor: "bg-primary",
  },
  {
    name: "Data Science Bootcamp",
    issuer: "Issued: 2024 — CSEC-ASTU Club in collaboration with Zindi Africa",
    badge: "Data science",
    badgeColor: "bg-primary",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="container mx-auto px-4 py-20">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-xs font-mono">
          <span className="text-primary">certifications.js</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Validating the learning journey</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Entry-level certifications and learning paths that support my transition into a professional cybersecurity
          role.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="space-y-3">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${cert.badgeColor} text-white`}
              >
                {cert.badge}
              </span>
              <h3 className="font-semibold text-base leading-tight">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
