import { useEffect, useRef, useState } from "react";
import { Clock, TrendingUp, Award, Users, DollarSign } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Save hours every week",
    description: "Focus on your business, not social media",
  },
  {
    icon: TrendingUp,
    title: "Consistent posting without effort",
    description: "Never miss a day of engagement",
  },
  {
    icon: Users,
    title: "More visibility and more customers",
    description: "Grow your audience automatically",
  },
  {
    icon: Award,
    title: "Looks professional even without a human team",
    description: "Enterprise-quality content",
  },
  {
    icon: DollarSign,
    title: "Affordable at just ₹999/month after trial",
    description: "Less than hiring one person",
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why This Is <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Valuable</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real benefits for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
