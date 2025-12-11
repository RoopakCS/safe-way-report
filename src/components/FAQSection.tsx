import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, FileQuestion } from "lucide-react";
import ShinyText from "./ShinyText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a team event?",
    answer: "Yes. Teams of 2-4 members are required. Solo vigilantes must find a squad via our Discord server or during the team formation phase.",
  },
  {
    question: "Is the event offline?",
    answer: "Strictly offline. The event takes place at Saveetha Engineering College, Chennai. All participants must be present physically for the entire 36-hour duration.",
  },
  {
    question: "Is food provided?",
    answer: "Yes. We provide meals, snacks, and caffeine for the entire 36-hour duration. Your survival kit includes everything you need to keep coding.",
  },
  {
    question: "Do I need to pay to register?",
    answer: "Registration is free for shortlisted teams. There are no hidden costs or fees to participate in the hackathon.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, any hardware you might need for your project, and personal essentials. We'll provide the rest including workspace, internet, and power.",
  },
  {
    question: "Can beginners participate?",
    answer: "Absolutely! We welcome coders of all skill levels. This is a learning experience as much as it is a competition. Mentors will be available throughout the event.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects will be evaluated on Innovation, Technical Complexity, Design & User Experience, Practicality, and Presentation. Detailed rubrics will be shared before the event.",
  },
  {
    question: "Can I start working on my project before the event?",
    answer: "No. All coding must be done during the 36-hour hackathon window. You may brainstorm ideas and research beforehand, but no code should be written prior to the start.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Vertical lines */}
        <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block" />
        <div className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block" />
        
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
            Intelligence Brief
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-3 sm:mb-4">
            CLASSIFIED FILES
            <br />
            <span className="text-gradient">(FAQ)</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body max-w-2xl mx-auto tracking-wide">
            <ShinyText 
              text="Everything you need to know before joining the mission." 
              disabled={false} 
              speed={3} 
            />
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-primary/20 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden hover:border-primary/40 transition-colors duration-300"
                >
                  <AccordionTrigger className="px-5 py-4 text-left hover:no-underline group">
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 border border-primary/30 rounded-lg bg-primary/5 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300 flex-shrink-0">
                        <FileQuestion className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm sm:text-base font-body text-foreground group-hover:text-primary transition-colors tracking-wide flex-1 text-left">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4">
                    <div className="pl-11">
                      <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed tracking-wide">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          className="max-w-3xl mx-auto mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-lg p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-card/80 to-card/50 border border-primary/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-lg sm:text-xl font-display text-primary mb-2 tracking-wider">
                STILL HAVE QUESTIONS?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-body mb-4 tracking-wide">
                Reach out to us and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:techsocietysec@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </a>
            </div>
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
