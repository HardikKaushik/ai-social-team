import { useEffect, useRef, useState } from "react";
import { FileText, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Fill out the quick form",
    description: "Takes less than 2 minutes",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Zap,
    number: "2",
    title: "Our AI team gets activated for your brand",
    description: "We set everything up for you",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Rocket,
    number: "3",
    title: "You start receiving automated posts & content",
    description: "Sit back and watch your presence grow",
    gradient: "from-accent to-primary",
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Get started in 3 simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting gradient line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0 opacity-30" />
          
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
                  <div className="relative p-8 md:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] group h-full">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                    
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.3)]`}>
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground text-center relative">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-center text-lg relative">
                      {step.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
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
