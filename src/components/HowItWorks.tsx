import { useEffect, useRef, useState } from "react";
import { FileText, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Fill out the quick form",
    description: "Takes less than 2 minutes",
  },
  {
    icon: Zap,
    number: "2",
    title: "Our AI team gets activated for your brand",
    description: "We set everything up for you",
  },
  {
    icon: Rocket,
    number: "3",
    title: "You start receiving automated posts & content",
    description: "Sit back and watch your presence grow",
  },
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Simple as 1-2-3</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-foreground to-primary transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <div className="p-8 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl group">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent-foreground rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
