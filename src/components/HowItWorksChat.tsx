import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ChatEvent = {
  id: string;
  author: "user" | "ai";
  label: string;
  text: string;
  variant?: "default" | "action";
};

const chatSequence: ChatEvent[] = [
  {
    id: "user-1",
    author: "user",
    label: "You",
    text: "Mujhe apne Nike shoes product ko promote karna hai.",
  },
  {
    id: "ai-1",
    author: "ai",
    label: "AI Social Media Team",
    text: "Samajh gaya. Main aapke Nike shoes ke product details aur target audience check kar raha hoon.",
  },
  {
    id: "ai-2",
    author: "ai",
    label: "AI Social Media Team",
    text: "Action: Product information fetch ho raha hai...",
    variant: "action",
  },
  {
    id: "ai-3",
    author: "ai",
    label: "AI Social Media Team",
    text: "Product mil gaya. Ab main Instagram ke liye creative, caption, offer aur hashtags design kar raha hoon.",
    variant: "action",
  },
  {
    id: "ai-4",
    author: "ai",
    label: "AI Social Media Team",
    text: "Ho gaya. Aapke Nike shoes ke liye ready-to-post Instagram content bana diya hai.",
  },
];

const HowItWorksChat = () => {
  const [visibleEvents, setVisibleEvents] = useState<ChatEvent[]>([]);
  const [stage, setStage] = useState<"chat" | "post" | "posting" | "results">("chat");

  useEffect(() => {
    const timeouts: number[] = [];
    let time = 400;

    chatSequence.forEach((event, index) => {
      timeouts.push(
        window.setTimeout(() => {
          setVisibleEvents((prev) => [...prev, event]);
        }, time)
      );
      // Slightly slower pace so the sequence feels more like a short explainer video
      time += 1800;
      if (index === chatSequence.length - 1) {
        // Give a brief pause after the last AI message before revealing the generated post
        timeouts.push(window.setTimeout(() => setStage("post"), time + 800));
        timeouts.push(window.setTimeout(() => setStage("posting"), time + 2400));
        timeouts.push(window.setTimeout(() => setStage("results"), time + 4200));
      }
    });

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const isPosting = stage === "posting";
  const isResults = stage === "results";

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/10" />
      <div className="absolute -top-32 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            How Your AI{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Social Media Team
            </span>{" "}
            Works
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Watch a complete flow: from your message to a ready-to-post Instagram campaign.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-stretch max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card/70 backdrop-blur-xl border border-border shadow-[0_0_40px_rgba(168,85,247,0.25)] p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Live Flow</p>
                  <p className="text-base font-semibold text-foreground">Chat with your AI team</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/40 px-3 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Auto-pilot mode
              </div>
            </div>

            <div className="relative flex-1 rounded-2xl bg-background/60 border border-border px-4 py-5 md:px-6 md:py-6 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),transparent_55%)]" />
              <div className="relative space-y-4 h-[320px] md:h-[360px] flex flex-col justify-end overflow-hidden">
                <AnimatePresence initial={false}>
                  {visibleEvents.map((event) => {
                    const isUser = event.author === "user";
                    const isAction = event.variant === "action";

                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={`max-w-[82%] px-4 py-3 shadow-sm ${
                          isUser
                            ? "ml-auto rounded-2xl rounded-br-sm bg-primary text-primary-foreground"
                            : isAction
                            ? "mr-auto rounded-xl border border-dashed border-primary/40 bg-primary/5 text-primary/90 backdrop-blur-sm"
                            : "mr-auto rounded-2xl rounded-bl-sm bg-card/90 border border-border"
                        }`}
                      >
                        <p
                          className={`text-[11px] font-semibold mb-1 flex items-center gap-1.5 ${
                            isAction ? "text-primary" : "text-muted-foreground/90"
                          }`}
                        >
                          {isAction && (
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            </span>
                          )}
                          {event.label}
                          {isAction && <span className="text-[10px] uppercase tracking-wide">· Action</span>}
                        </p>
                        <p className="text-sm leading-relaxed">
                          {event.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {stage === "chat" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 rounded-2xl bg-card/80 border border-border px-3 py-2 text-xs text-muted-foreground max-w-[70%]"
                  >
                    <span className="font-medium">AI Social Media Team</span>
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/50 animate-bounce [animation-delay:240ms]" />
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl bg-card/80 backdrop-blur-xl border border-border shadow-[0_0_40px_rgba(56,189,248,0.25)] p-6 md:p-7 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Instagram preview</p>
                <p className="font-semibold text-foreground">Nike running shoes campaign</p>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <p className="font-medium">{isResults ? "Posted" : isPosting ? "Posting…" : "Ready to post"}</p>
                <p>Auto-designed by AI</p>
              </div>
            </div>

            <AnimatePresence initial={false} mode="wait">
              {stage === "chat" && (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-background/40 border border-dashed border-border/60 overflow-hidden mb-4 flex-1 flex flex-col justify-between p-4 md:p-5"
                >
                  <div className="space-y-3">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-slate-800/70 via-slate-900/70 to-slate-800/70 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-3 rounded-full bg-muted/70 w-3/4 animate-pulse" />
                      <div className="h-3 rounded-full bg-muted/60 w-2/3 animate-pulse" />
                      <div className="h-3 rounded-full bg-muted/50 w-1/2 animate-pulse" />
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] text-muted-foreground">
                    AI is generating your Instagram creative, caption, hashtags and offer…
                  </p>
                </motion.div>
              )}

              {stage !== "chat" && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{
                    opacity: 1,
                    scale: stage === "results" ? 1.02 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-background/80 border border-border overflow-hidden mb-4 flex-1 flex flex-col"
                >
                  <div className="relative h-40 md:h-44 bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800 flex items-end justify-between px-5 py-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-200 uppercase tracking-wide">Nike Air Zoom</p>
                      <p className="text-lg md:text-xl font-bold text-white">Run faster. Stay lighter.</p>
                      <p className="text-xs text-slate-300 mt-1">
                        Limited-time launch offer inside the caption.
                      </p>
                    </div>
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-tr from-amber-300 via-white to-amber-500 shadow-[0_18px_40px_rgba(0,0,0,0.55)] flex items-center justify-center text-sm font-semibold text-slate-900">
                      Nike shoes
                    </div>
                  </div>

                  <div className="p-4 md:p-5 flex-1 flex flex-col gap-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      Step into comfort with the new Nike Air Zoom Pegasus. Perfect for daily runs, gym
                      sessions and long walks. For this week only, get{" "}
                      <span className="font-semibold text-primary">flat 25% off</span> with free
                      delivery in your city.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Highlighted key benefits: comfort, grip and all-day support</li>
                      <li>• Clear offer with urgency: 25% off this week only</li>
                      <li>• Call-to-action: DM or tap link in bio to buy now</li>
                    </ul>
                    <p className="text-xs text-primary font-medium">
                      #NikeIndia #RunningShoes #DailyRunner #GymReady #DealOfTheWeek
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-4 mt-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="flex items-center justify-between gap-3"
              >
                <Button
                  size="sm"
                  className={`text-sm px-4 md:px-5 py-2 rounded-full flex items-center gap-2 ${
                    isResults ? "bg-emerald-500 hover:bg-emerald-500/90" : ""
                  }`}
                  disabled={stage === "chat"}
                >
                  <span>
                    {isResults ? "Posted on Instagram" : isPosting ? "Posting…" : "Post automatically"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <div className="text-[11px] text-muted-foreground">
                  <p className="font-medium">AI schedules, posts and tracks results for you.</p>
                  <p>No manual designing, caption writing or hashtag search.</p>
                </div>
              </motion.div>

              <AnimatePresence>
                {isResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 px-4 py-3 flex flex-col gap-2 text-xs text-emerald-100"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-500/30 flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-emerald-300" />
                        </div>
                        <p className="font-semibold text-emerald-200">
                          First results from your Nike campaign
                        </p>
                      </div>
                      <p className="text-emerald-200/80">in first 2 hours</p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-1">
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-rose-300" />
                        <span className="font-semibold text-emerald-100">330</span>
                        <span className="text-emerald-200/80">likes</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5 text-sky-300" />
                        <span className="font-semibold text-emerald-100">48</span>
                        <span className="text-emerald-200/80">comments</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-emerald-400/80" />
                        <span className="font-semibold text-emerald-100">19</span>
                        <span className="text-emerald-200/80">shares & saves</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksChat;
