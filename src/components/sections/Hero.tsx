import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  Code,
  Globe,
  Smartphone,
  Cloud,
} from "lucide-react";
import Logo from "../Logo";

const rotatingWords = ["scale", "optimize", "transform", "secure"];
const techStack = ["React", "Node.js", "AWS", "Python", "AI/ML"];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    const techInterval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techStack.length);
    }, 1500);

    return () => {
      clearInterval(wordInterval);
      clearInterval(techInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        {/* Minimal Floating Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 && <Code size={18} />}
            {i % 4 === 1 && <Globe size={18} />}
            {i % 4 === 2 && <Smartphone size={18} />}
            {i % 4 === 3 && <Cloud size={18} />}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-8 py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-fit"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Enterprise Tech Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-foreground">Tech</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Solutions
              </span>
              <br />
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">That</span>
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </div>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We build custom software solutions and scalable digital platforms
              that drive real business results.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-lg text-muted-foreground"
            >
              <span>Powered by</span>
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-bold text-accent"
              >
                {techStack[techIndex]}
              </motion.span>
            </motion.div>
          </div>

          {/* Services - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: Code, label: "Development" },
              { icon: Globe, label: "Web" },
              { icon: Smartphone, label: "Mobile" },
              { icon: Cloud, label: "Cloud" },
            ].map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10"
              >
                <service.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 rounded-xl"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="bg-background rounded-lg overflow-hidden border border-border">
              {/* Browser Header */}
              <div className="bg-muted px-4 py-3 flex gap-2 items-center border-b border-border">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>

              {/* Content */}
              <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/2 min-h-[400px] flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl mx-auto flex items-center justify-center">
                    <Logo className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">+245%</div>
                    <div className="text-sm text-muted-foreground">
                      Average Growth
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-bold text-foreground">50+</div>
                      <div className="text-xs text-muted-foreground">
                        Projects
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">99%</div>
                      <div className="text-xs text-muted-foreground">
                        Success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl p-3 shadow-lg w-28"
          >
            <Code className="w-5 h-5 text-accent mb-1" />
            <div className="text-xs text-muted-foreground">Backend</div>
            <div className="text-sm font-semibold">Node.js</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-4 bg-background border border-border rounded-xl p-3 shadow-lg w-28"
          >
            <Globe className="w-5 h-5 text-accent mb-1" />
            <div className="text-xs text-muted-foreground">Frontend</div>
            <div className="text-sm font-semibold">React</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
