import { GraduationCap, Briefcase, Users } from "lucide-react"

export function WhoWeAreForSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Bridge the gap between cybersecurity theory and practical application with hands-on automotive security training.",
      color: "blue",
    },
    {
      icon: Briefcase,
      title: "Professionals",
      description:
        "Advance your career with specialized skills in automotive cybersecurity and connected vehicle protection.",
      color: "green",
    },
    {
      icon: Users,
      title: "Curious Minds",
      description:
        "Explore the fascinating world of vehicle cybersecurity and understand how modern cars can be protected.",
      color: "purple",
    },
  ]

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Who We're For</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CyberDrive offers the tools you need to bridge the gap between cybersecurity theory and hands-on application
            — all without touching a single wire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-xl ${colorClasses[audience.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 border`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed">{audience.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-xl text-gray-700 font-medium">CyberDrive isn't just a platform. It's a mission...</p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <span className="text-blue-600 font-semibold">To educate.</span>
              <span className="text-green-600 font-semibold">To prepare.</span>
              <span className="text-purple-600 font-semibold">To protect the vehicles of tomorrow.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
