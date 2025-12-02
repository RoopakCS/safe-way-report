import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const day1Schedule = [
  {
    time: "09:00 AM – 09:30 AM",
    title: "Registrations & Check-in",
    description: "Participants arrive at the venue, complete check-in formalities, receive event kits, badges, goodies, and Wi-Fi access. Volunteers guide teams to their designated workspaces.",
  },
  {
    time: "09:30 AM – 10:00 AM",
    title: "Opening Ceremony & Welcome Address",
    description: "The event officially begins with opening remarks from the organizing team and partners. The keynote highlights the vision behind the hackathon, expectations, and the theme for the year.",
  },
  {
    time: "10:00 AM – 10:30 AM",
    title: "Problem Statements Reveal + Rules Explanation",
    description: "Organizers present the official problem statements and share the judging criteria, evaluation framework, submission requirements, and important rules to ensure fairness and transparency.",
  },
  {
    time: "10:30 AM – 11:00 AM",
    title: "Team Formation + Mentor Introductions",
    description: "Participants without teams will be guided through team formation activities. Mentors from industry and academia are introduced, sharing the domains they'll be available to help with.",
  },
  {
    time: "11:00 AM – 01:00 PM",
    title: "Hacking Begins (Ideation + Initial Prototyping)",
    description: "The hackathon officially kicks off. Teams brainstorm ideas, validate approaches, plan architecture, assign roles, and begin building the first version of their solution.",
  },
  {
    time: "01:00 PM – 02:00 PM",
    title: "Lunch Break",
    description: "Participants recharge with lunch and network informally with experts, mentors, and other teams.",
  },
  {
    time: "02:00 PM – 04:00 PM",
    title: "Coding Session / Mentor Interactions",
    description: "Teams begin active development. Mentors move between tables to offer guidance on technical, design, and strategic decisions, ensuring teams stay aligned with objectives.",
  },
  {
    time: "04:00 PM – 04:30 PM",
    title: "Checkpoint #1: Progress Review",
    description: "Each team gives a quick status update to organizers or mentors. This checkpoint ensures that teams are progressing and helps identify areas where support is needed.",
  },
  {
    time: "04:30 PM – 07:00 PM",
    title: "Hacking Time / Building Core Features",
    description: "Teams dive deeper into development. UI/UX prototypes, backend services, datasets, APIs, and initial feature modules take shape.",
  },
  {
    time: "07:00 PM – 08:00 PM",
    title: "Dinner Break",
    description: "Relaxation hour. Participants enjoy dinner and take a break from screens.",
  },
  {
    time: "08:00 PM – Late Night",
    title: "Overnight Hacking (Optional)",
    description: "Teams may continue building through the night. Overnight hours are often used for testing, refining logic, building dashboards, or polishing the interface.",
  },
];

const day2Schedule = [
  {
    time: "09:00 AM – 09:30 AM",
    title: "Breakfast & Day Kickoff",
    description: "Participants grab breakfast and prepare for the final stretch. Organizers brief the schedule for the day and submission reminders.",
  },
  {
    time: "09:30 AM – 11:00 AM",
    title: "Final Coding / Testing / Deployment",
    description: "Teams finalize features, run final QA checks, integrate components, fix bugs, and prepare their final build for submission. Most teams also start assembling their pitch decks.",
  },
  {
    time: "11:00 AM",
    title: "Submission Deadline",
    description: "All submissions must be uploaded before this time. No extensions are allowed to ensure fairness.",
    highlight: true,
  },
  {
    time: "11:00 AM – 12:00 PM",
    title: "Break & Pitch Preparation",
    description: "Teams finalize their presentations and rehearse their pitch. Mentors may give last-minute feedback.",
  },
  {
    time: "12:00 PM – 02:30 PM",
    title: "Project Demo Presentations to Judges",
    description: "Each team presents their project to the jury panel. Presentations typically include: Problem statement, Technical approach, Demo of working prototype, Business/impact potential, Future scope. A timed Q&A follows each presentation.",
  },
  {
    time: "02:30 PM – 03:00 PM",
    title: "Jury Deliberation",
    description: "Judges evaluate all projects based on innovation, feasibility, technical strength, clarity of presentation, and alignment with the problem statement.",
  },
  {
    time: "03:00 PM – 03:30 PM",
    title: "Announcement of Winners",
    description: "Organizers announce the top teams and special category winners (if any). Applause, celebration, and recognition follow.",
    highlight: true,
  },
  {
    time: "03:30 PM – 04:00 PM",
    title: "Prize Distribution & Closing Ceremony",
    description: "Winners receive certificates, prizes, and acknowledgments. Chief guests and organizers deliver concluding remarks.",
  },
  {
    time: "04:00 PM – 04:30 PM",
    title: "Networking & Photo Session",
    description: "Participants mingle with judges, mentors, and industry experts. Group photos, team photos, and media coverage take place.",
  },
  {
    time: "04:30 PM Onwards",
    title: "Event Concludes",
    description: "The hackathon officially comes to an end. Participants depart with new skills, connections, and experiences.",
  },
];

const Agenda = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-body text-sm sm:text-base mb-6 hover:gap-3 transition-all tracking-wide"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Event Schedule
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-3 sm:mb-4">
            HACKATHON
            <br />
            <span className="text-gradient">AGENDA</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground font-body max-w-2xl tracking-wide">
            A comprehensive timeline of events, activities, and milestones throughout the hackathon
          </p>
        </motion.div>

        {/* Day 1 */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary font-bold tracking-wide">
              Day 1 — Kickoff & Hacking Begins
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {day1Schedule.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg p-5 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 gotham-card hover-lift"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 rounded-lg">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="pt-1">
                      <div className="text-xs sm:text-sm font-body text-primary font-semibold tracking-wider mb-1">
                        {item.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary font-bold tracking-wide">
              Day 2 — Build, Submit & Showcase
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {day2Schedule.map((item, index) => (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-lg p-5 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm border transition-all duration-300 gotham-card hover-lift ${
                  item.highlight
                    ? "border-primary/50 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                    : "border-primary/20 hover:border-primary/50"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 flex items-start gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border rounded-lg transition-all duration-300 ${
                      item.highlight
                        ? "border-primary bg-primary/20"
                        : "border-primary/30 group-hover:border-primary group-hover:bg-primary/10"
                    }`}>
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="pt-1">
                      <div className={`text-xs sm:text-sm font-body font-semibold tracking-wider mb-1 ${
                        item.highlight ? "text-primary" : "text-primary"
                      }`}>
                        {item.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg md:text-xl font-display font-bold mb-2 sm:mb-3 transition-colors tracking-wide ${
                      item.highlight
                        ? "text-primary"
                        : "group-hover:text-primary"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Left border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300 ${
                  item.highlight
                    ? "bg-primary"
                    : "bg-primary/0 group-hover:bg-primary"
                }`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Agenda;

