import { Sparkles, Check } from "lucide-react";

const EarlyAccess = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient bg-300% p-[2px] rounded-3xl">
            <div className="w-full h-full bg-background rounded-3xl" />
          </div>
          
          <div className="relative p-10 md:p-16 bg-gradient-to-br from-card to-background rounded-3xl">
            {/* Animated background orbs */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" 
                 style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Early Access Offer
                </h2>
                <Sparkles className="w-10 h-10 text-secondary animate-pulse" 
                          style={{ animationDelay: '0.5s' }} />
              </div>
              
              <p className="text-xl md:text-2xl font-semibold mb-8 text-foreground/90">
                Limited Time Only
              </p>
              
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  "Get 2 months free",
                  "No payment today",
                  "Cancel anytime — No risk",
                  "Only for the first businesses we contact"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fade-in 0.5s ease-out forwards'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-left text-lg font-medium text-foreground">
                      {item.includes("2 months") ? (
                        <>
                          Get <span className="text-primary font-bold">2 months free</span>
                        </>
                      ) : (
                        item
                      )}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-lg text-foreground/80">
                  After 2 months: <span className="text-primary font-bold text-xl">₹999/month</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">Cancel anytime, no questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
