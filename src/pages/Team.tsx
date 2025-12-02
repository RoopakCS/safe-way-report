import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowLeft, Shield, Code, Brain, Globe, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const centralTeam = [
    { name: "Mr. C. Obed Otto", role: "Community Head, Dean – SCOFT (ICT)" },
    { name: "Ms. Akila Mohan", role: "Overall Faculty Coordinator" },
    { name: "Karnala Santhan Kumar", role: "Coordinator" },
    { name: "S Mohamed Ahsan", role: "Assistant Coordinator" },
    { name: "Jai Surya R", role: "Assistant Coordinator" },
    { name: "Abishai K C", role: "Assistant Coordinator" },
  ];

  const communities = [
    {
      name: "Machine Learning Community",
      icon: Brain,
      secretary: "Shri Sai Aravind R",
      jointSecretaries: ["Narendran K", "Akash M", "Vasanthi Sivasankar"],
    },
    {
      name: "Cyber Security Community",
      icon: Shield,
      secretary: "Jaiyantan S",
      jointSecretaries: ["Geerthivash J D", "Barathraj K", "Nandhini N"],
    },
    {
      name: "Intelligent Systems Community",
      icon: Brain,
      secretary: "Jerovin Geo J A",
      jointSecretaries: ["Narasimhan S", "Balasubramaniam", "Kabelan G K"],
    },
    {
      name: "Web Development Community",
      icon: Globe,
      secretary: "Roopak C S",
      jointSecretaries: ["Bala Saravanan K", "Mukhitha V M", "Eesha Ranka"],
    },
    {
      name: "Game and App Development Community",
      icon: Smartphone,
      secretary: "Yohesh Kumar R M",
      jointSecretaries: ["Kavi M S", "Aathi Sakthi S", "Karthik Ganesh G"],
    },
  ];

  const advisors = [
    { name: "Karthick Prabakaran", domain: "Web" },
    { name: "Aldrin Lijo J E", domain: "ML" },
    { name: "Vikhram S", domain: "ML" },
    { name: "V Divyashree", domain: "Web" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative noise-overlay">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:gap-3 transition-all tracking-wide"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-3 block uppercase">
              Meet Our Team
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4">
              TECH SOCIETY
              <br />
              <span className="text-gradient">MEMBERS</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl tracking-wide">
              The passionate individuals driving innovation and excellence at Saveetha Engineering College
            </p>
          </motion.div>

          {/* Central Team */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Users className="text-primary" size={24} />
              <h2 className="text-2xl sm:text-3xl font-display tracking-wider">CENTRAL TEAM</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {centralTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-150"
                >
                  <h3 className="text-lg font-display text-primary mb-2 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body tracking-wide">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Community Leadership */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-primary" size={24} />
              <h2 className="text-2xl sm:text-3xl font-display tracking-wider">COMMUNITY LEADERSHIP</h2>
            </div>
            <div className="space-y-6">
              {communities.map((community, index) => (
                <motion.div
                  key={community.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-150"
                >
                  <div className="flex items-start gap-4">
                    <community.icon className="text-primary mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="text-xl font-display text-primary mb-4 tracking-wide">
                        {community.name}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-primary/60 font-body tracking-wider uppercase block mb-1">
                            Secretary
                          </span>
                          <p className="text-base text-foreground font-body">
                            {community.secretary}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs text-primary/60 font-body tracking-wider uppercase block mb-1">
                            Joint Secretaries
                          </span>
                          <p className="text-sm text-muted-foreground font-body">
                            {community.jointSecretaries.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Advisors */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-primary" size={24} />
              <h2 className="text-2xl sm:text-3xl font-display tracking-wider">ADVISORS</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card/50 border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-150 text-center"
                >
                  <h3 className="text-base font-display text-primary mb-2 tracking-wide">
                    {advisor.name}
                  </h3>
                  <span className="text-xs text-muted-foreground font-body tracking-wider uppercase">
                    {advisor.domain}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
