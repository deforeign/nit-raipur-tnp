import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

import directorImage from "@/assets/director.jpg";
import tpcHeadImage from "@/assets/tpc-head.jpg";
import cdchead from "@/assets/cdchead.jpg"

const messages = [
  {
    image: directorImage,
    name: "Dr. N V Ramana Rao",
    role: "Director, NIT Raipur",
    width: "1100px",
    message:
      "Industry and Institute collaborations and linkages are a must for sustainable growth of technology, economy, and human civilisation. NIT Raipur is sincerely working for symbiotic relationship with industries since its inception in 1956. Campus placement process is an important aspect of this relationship and further strengthening this relationship by undertaking a visit to our Institute for the campus placement of our students. NIT Raipur, established as one of the earliest engineering colleges of independent India, has continuously strived to achieve excellence in technology education and research; in the process, it has carved a niche for itself on the national level. On account of its academic atmosphere, well qualified and committed faculty members, regular extra-curricular activities and regular and examination procedure, the institute ensures the holistic development of students. The distinguished alumni of the institute have contributed significantly to various fields such as industry, academia, and administration and bear a testimony to the caliber of the institution. I am confident that a placement visit to our campus will be mutually beneficial and students of the institute will prove to be an asset to your organization. I heartily welcome you to NIT Raipur and hope that this interaction leads to a lasting partnership between our institute and your organisation.",
  },
  {
    image: cdchead,
    name: "Dr. Samir Bajpai",
    role: "Head, Career Development Center",
    width: "535px",
    message: "",
  },
  {
    image: tpcHeadImage,
    name: "Dr. Vivek Kumar Gaba",
    role: "Faculty In-Charge, Placement Cell",
    width: "535px",
    message: "",
  },
];

export const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  /* shared animation settings */
  const cardProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    whileHover: { scale: 1.01, y: -1 },
    whileTap: { scale: 1.02 },
    transition: {
      type: "tween",
      duration: 0.10,
      ease: "easeOut",
    },
  };

  return (
  <section ref={ref} className="py-12 md:py-20 bg-secondary overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-12 md:mb-16"
      >
        <p className="text-accent text-sm md:text-lg font-bold uppercase tracking-wider mb-2">Leadership</p>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-950">Messages from Leadership</h2>
      </motion.div>

      {/* DIRECTOR CARD - Full width on mobile, max-width on desktop */}
      <div className="flex justify-center mb-8">
        {messages.slice(0, 1).map((item, i) => (
          <motion.div 
            key={i} 
            {...cardProps} 
            className="bg-card rounded-2xl p-6 md:p-8 relative border border-border w-full max-w-[1100px]
                       shadow-lg hover:shadow-xl transition-all"
          >
            <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-primary/10" />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
              <img src={item.image} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-primary/20" />
              <div>
                <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                <p className="text-sm text-accent">{item.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground italic leading-relaxed text-sm md:text-base text-justify md:text-left">
              "{item.message}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* 2 HALF CARDS - Stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 max-w-[1100px] mx-auto">
        {messages.slice(1, 3).map((item, i) => (
          <motion.div 
            key={i} 
            {...cardProps} 
            className="bg-card rounded-2xl p-6 md:p-8 relative border border-border flex-1
                       shadow-md hover:shadow-lg transition-all"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
            <div className="flex items-center gap-4">
              <img src={item.image} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-primary/20 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="font-bold text-md md:text-lg text-foreground truncate">{item.name}</h3>
                <p className="text-xs md:text-sm text-accent line-clamp-2">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
};
