import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ArrowRight,
  Users,
  Zap,
  Star,
  TrendingUp,
  Eye,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  gradient: string;
  stats: {
    users?: string;
    performance?: string;
    rating?: string;
    growth?: string;
  };
  image?: string;
  results: string[];
}

const projects: Project[] = [
  {
    title: "TalkASTU University Platform",
    description:
      "Comprehensive learning management system connecting 15,000+ students with real-time collaboration, video streaming, and AI-powered study tools.",
    category: "EdTech Platform",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 via-blue-600 to-purple-700",
    stats: {
      users: "15K+",
      performance: "99.9%",
      rating: "4.9",
      growth: "245%",
    },
    results: [
      "Reduced student dropout rate by 35%",
      "Increased engagement by 78%",
      "Scaled to handle 5x user growth",
    ],
  },
  {
    title: "Clinic Management System",
    description:
      "Enterprise healthcare solution managing patient records, appointments, billing, and telemedicine for 50+ clinics across the region.",
    category: "Healthcare SaaS",
    technologies: ["Next.js", "Python", "MongoDB", "Redis", "Docker"],
    gradient: "from-emerald-500 via-emerald-600 to-teal-700",
    stats: {
      users: "50+",
      performance: "100%",
      rating: "4.8",
      growth: "180%",
    },
    results: [
      "Reduced admin work by 60%",
      "Improved patient satisfaction by 45%",
      "99.9% uptime for critical systems",
    ],
  },
  {
    title: "YC Directory",
    description:
      "Modern startup discovery platform featuring 5,000+ Y Combinator companies with advanced search, filtering, and analytics dashboard.",
    category: "B2B Platform",
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Elasticsearch",
      "Kubernetes",
    ],
    gradient: "from-orange-500 via-orange-600 to-red-700",
    stats: {
      users: "5K+",
      performance: "99.8%",
      rating: "4.7",
      growth: "320%",
    },
    results: [
      "Decreased search latency by 85%",
      "Increased user retention by 55%",
      "Processed 10M+ data points",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/15"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Featured
            <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Real-world projects that demonstrate our expertise in delivering
            <span className="text-accent font-medium">
              {" "}
              measurable business impact{" "}
            </span>
            through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl cursor-pointer hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full flex flex-col">
                {/* Gradient Header with Pattern */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} rounded-t-3xl overflow-hidden`}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse-slow" />

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-6">
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-md font-medium shadow-lg">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Live Stats */}
                  <div className="absolute bottom-4 right-6 flex gap-2">
                    <div className="flex items-center gap-1 text-white/90 text-sm backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-full border border-white/10">
                      <Users className="w-3 h-3" />
                      <span className="font-medium">{project.stats.users}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-sm backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-full border border-white/10">
                      <Zap className="w-3 h-3" />
                      <span className="font-medium">
                        {project.stats.performance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm font-light">
                      {project.description}
                    </p>

                    {/* Key Results */}
                    <div className="mb-4 space-y-2">
                      {project.results.slice(0, 2).map((result, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2 text-accent flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-accent/5 text-foreground/80 border-accent/10 text-xs font-medium hover:bg-accent/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Rating and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(Number(project.stats.rating))
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-foreground/70">
                        {project.stats.rating}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn text-accent hover:text-accent hover:bg-accent/10"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Study
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-500 pointer-events-none" />

                {/* Growth Badge */}
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-gradient-to-r from-accent to-accent/70 text-primary border-0 shadow-lg font-bold">
                    +{project.stats.growth}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-border/50 rounded-3xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

            <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
              {[
                {
                  value: "99.9%",
                  label: "Uptime Guarantee",
                  desc: "Zero downtime incidents",
                  icon: Zap,
                },
                {
                  value: "<2s",
                  label: "Load Time",
                  desc: "Global CDN optimized",
                  icon: TrendingUp,
                },
                {
                  value: "90+",
                  label: "Lighthouse Score",
                  desc: "Performance excellence",
                  icon: Star,
                },
                {
                  value: "24/7",
                  label: "Support",
                  desc: "Enterprise-grade SLA",
                  icon: Users,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground/80 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground font-light">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-accent/5 to-purple-500/5 border border-border/50 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ready to build something extraordinary?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Let's transform your vision into a market-leading digital
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-accent/30 text-foreground hover:text-accent px-8 py-6 rounded-xl backdrop-blur-sm"
              >
                View All Case Studies
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};
