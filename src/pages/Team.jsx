import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Layout } from "../components/layout/Layout.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const conveners = [
  {
    name: "Rahul Sharma",
    branch: "Computer Science & Engineering",
    year: "Final Year",
    role: "Overall Coordinator",
    email: "rahul.tpc@nitrr.ac.in",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/rahul",
  },
  {
    name: "Priya Patel",
    branch: "Electronics & Communication",
    year: "Final Year",
    role: "Company Coordinator",
    email: "priya.tpc@nitrr.ac.in",
    phone: "+91 98765 43211",
    linkedin: "https://linkedin.com/in/priya",
  },
  {
    name: "Amit Kumar",
    branch: "Mechanical Engineering",
    year: "Final Year",
    role: "Core Coordinator",
    email: "amit.tpc@nitrr.ac.in",
    phone: "+91 98765 43212",
    linkedin: "https://linkedin.com/in/amit",
  },
  {
    name: "Sneha Gupta",
    branch: "Information Technology",
    year: "Final Year",
    role: "Placement Coordinator",
    email: "sneha.tpc@nitrr.ac.in",
    phone: "+91 98765 43213",
    linkedin: "https://linkedin.com/in/sneha",
  },
  {
    name: "Vikram Singh",
    branch: "Electrical Engineering",
    year: "Pre-Final Year",
    role: "Operations Coordinator",
    email: "vikram.tpc@nitrr.ac.in",
    phone: "+91 98765 43214",
    linkedin: "https://linkedin.com/in/vikram",
  },
  {
    name: "Ananya Mishra",
    branch: "Civil Engineering",
    year: "Pre-Final Year",
    role: "Media Coordinator",
    email: "ananya.tpc@nitrr.ac.in",
    phone: "+91 98765 43215",
    linkedin: "https://linkedin.com/in/ananya",
  },
  {
    name: "Rohan Agrawal",
    branch: "Chemical Engineering",
    year: "Pre-Final Year",
    role: "Industry Relations",
    email: "rohan.tpc@nitrr.ac.in",
    phone: "+91 98765 43216",
    linkedin: "https://linkedin.com/in/rohan",
  },
  {
    name: "Kavya Reddy",
    branch: "Biomedical Engineering",
    year: "Pre-Final Year",
    role: "Student Relations",
    email: "kavya.tpc@nitrr.ac.in",
    phone: "+91 98765 43217",
    linkedin: "https://linkedin.com/in/kavya",
  },
];

/* ================= TEAM CARD ================= */

const TeamCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isMobile = window.innerWidth < 1024;
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: isMobile ? 0 : 60,
        x: isMobile ? 60 : 0,
        scale: isMobile ? 1 : 0.8,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="h-[420px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full hover:scale-[1.03]"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-card rounded-2xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-3xl font-bold">
              {member.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="absolute top-4 right-4 px-3 py-1 bg-primary-foreground/20 rounded-full text-xs text-primary-foreground">
              {member.role}
            </span>
          </div>

          <div className="p-5">
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-accent text-sm">{member.branch}</p>
            <p className="text-muted-foreground text-sm">{member.year}</p>
            <p className="mt-10 text-center text-sm text-accent">
              Click to see details
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-card rounded-2xl p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="font-bold text-xl text-center mb-6">
            {member.name}
          </h3>

          <div className="space-y-4 text-sm">
            <a href={`mailto:${member.email}`} className="flex gap-3">
              <Mail className="w-5 h-5" /> {member.email}
            </a>
            <a href={`tel:${member.phone}`} className="flex gap-3">
              <Phone className="w-5 h-5" /> {member.phone}
            </a>
          </div>

          <div className="mt-6 pt-4 border-t">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 text-accent"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= TEAM PAGE ================= */

const Team = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Meet the dedicated student placement conveners who work tirelessly
              to connect students with their dream careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">

          {/* TOGGLE BUTTONS */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("current")}
              className={`px-6 py-2 rounded-md border ${
                activeTab === "current"
                  ? "bg-blue-900 text-white"
                  : "bg-background text-muted-foreground"
              }`}
            >
              Current Conveners
            </button>

            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2 rounded-md border ${
                activeTab === "past"
                  ? "bg-blue-900 text-white"
                  : "bg-background text-muted-foreground"
              }`}
            >
              Past Conveners
            </button>
          </div>

          {/* CURRENT */}
          {activeTab === "current" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {conveners.map((m, i) => (
                <TeamCard key={i} member={m} index={i} />
              ))}
            </div>
          )}

          {/* PAST (PLACEHOLDER) */}
          {activeTab === "past" && (
            <div className="text-center py-24 text-muted-foreground">
              <h2 className="text-2xl font-semibold mb-2">
                Past Conveners Section
              </h2>
              <p>
                Paste the past conveners code from <b>main</b> branch here.
              </p>
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default Team;
