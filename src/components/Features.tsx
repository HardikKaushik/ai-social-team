import { useEffect, useRef, useState } from "react";
import { MessageSquare, Palette, Calendar, Sparkles, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Creates daily posts automatically",
    description: "Never worry about what to post",
  },
  {
    icon: Palette,
    title: "Designs high-quality visuals",
    description: "Professional graphics every time",
  },
  {
    icon: MessageSquare,
    title: "Writes engaging captions & hashtags",
    description: "Optimized for maximum reach",
  },
  {
    icon: Bot,
    title: "Replies to DMs using smart automation",
    description: "24/7 customer engagement",
  },
  {
    icon: Calendar,
    title: "Plans your full monthly content calendar",
    description: "Strategic content planning",
  },
  {
    icon: TrendingUp,
    title: "Handles everything like a real social media team",
    description: "Complete social media management",
  },
];

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            What the AI Social Media Team Does
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need, fully automated</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual representation */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card to-accent/10 border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <Bot className="w-20 h-20 mx-auto mb-6 text-primary animate-pulse" />
              <h3 className="text-2xl font-bold mb-4">Your AI Team in Action</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-background/50 rounded-xl backdrop-blur">
                  <Palette className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Designing</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl backdrop-blur">
                  <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Writing</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl backdrop-blur">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
