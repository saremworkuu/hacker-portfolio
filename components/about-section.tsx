import { Card } from "@/components/ui/card"
import { Users, Award, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-xs font-mono">
            <span className="text-primary">about.js</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Passionate cybersecurity enthusiast and web engineer dedicated to building secure applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Background Card */}
          <Card className="border-border bg-card p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mission</h3>
                <p className="text-muted-foreground mt-1">
                  I'm dedicated to building and breaking things responsibly. My focus is on learning cybersecurity
                  concepts through hands-on practice, contributing to the security community, and developing secure web
                  applications.
                </p>
              </div>
            </div>
          </Card>

          {/* CCSEC Card */}
          <Card className="border-border bg-card p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">CCSEC - ASTU</h3>
                <p className="text-muted-foreground mt-1">
                  Active member of the Cyber Security Club at Adama Science and Technology University. Collaborating
                  with peers to share knowledge, organize CTF events, and foster a culture of security awareness within
                  the community.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills and Values */}
        <Card className="border-border bg-card p-6 mt-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">What I Value</h3>
              <p className="text-muted-foreground mt-1">
                I believe in continuous learning, responsible disclosure, and sharing knowledge with the community. My
                approach to cybersecurity is hands-on, ethical, and focused on practical skills development through CTF
                platforms and real-world scenarios.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
