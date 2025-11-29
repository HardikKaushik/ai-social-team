import { useEffect, useRef, useState } from "react";
import { MessageSquare, Palette, Calendar, Sparkles, TrendingUp, Bot } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Creates daily posts automatically",
    description: "Never worry about what to post",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "Designs high-quality visuals",
    description: "Professional graphics every time",
    gradient: "from-secondary to-primary",
  },
  {
    icon: MessageSquare,
    title: "Writes engaging captions & hashtags",
    description: "Optimized for maximum reach",
    gradient: "from-primary to-accent",
  },
  {
    icon: Bot,
    title: "Replies to DMs using smart automation",
    description: "24/7 customer engagement",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Calendar,
    title: "Plans your full monthly content calendar",
    description: "Strategic content planning",
    gradient: "from-accent to-primary",
  },
  {
    icon: TrendingUp,
    title: "Handles everything like a real social media team",
    description: "Complete social media management",
    gradient: "from-primary to-secondary",
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Social Media Team</span> Does
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need, fully automated and professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground relative">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground relative">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual representation */}
        <div className="max-w-5xl mx-auto">
          <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                <Bot className="w-12 h-12 text-primary-foreground animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your AI Team in Action
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all hover:scale-105">
                  <Palette className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg">Designing</p>
                  <p className="text-sm text-muted-foreground mt-2">Creating stunning visuals</p>
                </div>
                <div className="p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all hover:scale-105">
                  <MessageSquare className="w-10 h-10 text-secondary mx-auto mb-3" />
                  <p className="font-semibold text-lg">Writing</p>
                  <p className="text-sm text-muted-foreground mt-2">Crafting engaging content</p>
                </div>
                <div className="p-6 bg-background/60 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all hover:scale-105">
                  <Calendar className="w-10 h-10 text-accent mx-auto mb-3" />
                  <p className="font-semibold text-lg">Planning</p>
                  <p className="text-sm text-muted-foreground mt-2">Strategic scheduling</p>
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
