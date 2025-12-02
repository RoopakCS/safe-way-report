import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { Trophy, Award, Gift } from "lucide-react";

export const PrizesStackSection = () => {
  return (
    <section id="prizes-stack" className="relative min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <span className="text-primary font-body text-sm tracking-[0.3em] mb-4 block uppercase">
            The Rewards
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            PRIZES &amp;
            <br />
            <span className="text-gradient">RECOGNITION</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body max-w-xl mx-auto tracking-wide">
            Compete for exciting prizes and recognition across all domains
          </p>
        </div>
      </div>

      <ScrollStack
        itemDistance={150}
        itemScale={0.05}
        itemStackDistance={40}
        stackPosition="30%"
        scaleEndPosition="15%"
        baseScale={0.9}
      >
        <ScrollStackItem itemClassName="bg-card/95 backdrop-blur-sm border-2 border-primary/40 shadow-lg shadow-primary/10">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border-2 border-primary bg-primary/20">
              <Trophy size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-5xl font-display text-primary mb-2">₹20,000</h3>
              <h4 className="text-2xl font-display text-foreground mb-4">Winner</h4>
              <p className="text-foreground/80 font-body tracking-wide leading-relaxed">
                Unlock ₹20,000 and let your wallet celebrate! This is your chance to cash in 
                and shine like a true legend.
              </p>
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-card/90 backdrop-blur-sm border-2 border-primary/30 shadow-lg shadow-primary/5">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border-2 border-primary/70 bg-primary/15">
              <Award size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-5xl font-display text-primary mb-2">₹15,000</h3>
              <h4 className="text-2xl font-display text-foreground mb-4">Runner-Up</h4>
              <p className="text-foreground/80 font-body tracking-wide leading-relaxed">
                Claim the ₹15,000 prize and show you're almost at the top! First runner-up, 
                but a true champion in the making.
              </p>
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-card/85 backdrop-blur-sm border-2 border-gotham-blue/40 shadow-lg shadow-gotham-blue/10">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border-2 border-gotham-blue bg-gotham-blue/20">
              <Award size={32} className="text-gotham-blue" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-display text-gotham-blue mb-2">Domain Champions</h3>
              <h4 className="text-xl font-display text-foreground mb-4">Special Recognition</h4>
              <p className="text-foreground/80 font-body tracking-wide leading-relaxed">
                Exclusive rewards await the top achievers in each domain - FinTech, HealthTech, 
                and EdTech! Best performers will be recognized and celebrated.
              </p>
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-card/80 backdrop-blur-sm border-2 border-primary/25 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center border-2 border-primary/60 bg-primary/10">
              <Gift size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-display text-primary mb-2">Swags & More</h3>
              <h4 className="text-xl font-display text-foreground mb-4">Exciting Goodies</h4>
              <p className="text-foreground/80 font-body tracking-wide leading-relaxed">
                Get exclusive swags like T-shirts, stickers, and more! Limited-edition items 
                you won't want to miss.
              </p>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};
