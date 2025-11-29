import { useEffect, useRef, useState } from "react";
import { Clock, TrendingUp, Award, Users, DollarSign } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Save hours every week",
    description: "Focus on your business, not social media",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Consistent posting without effort",
    description: "Never miss a day of engagement",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "More visibility and more customers",
    description: "Grow your audience automatically",
    color: "text-accent",
  },
  {
    icon: Award,
    title: "Looks professional even without a human team",
    description: "Enterprise-quality content",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    title: "Affordable at just ₹999/month after trial",
    description: "Less than hiring one person",
    color: "text-secondary",
  },
];

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why This Is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Valuable</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Real benefits that transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className={`group relative flex flex-col p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className={`w-7 h-7 ${value.color} text-primary-foreground`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
