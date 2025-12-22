import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
// Imports are valid JavaScript
import directorImage from "@/assets/director.jpg";
import tpcHeadImage from "@/assets/tpc-head.jpg";

const messages = [
  {
    image: directorImage,
    name: "Dr. N V Ramana Rao",
    role: "Director, NIT Raipur",
    message:
      "Industry and Institute collaborations and linkages are a must for sustainable growth of technology, economy, and human civilisation. NIT Raipur is sincerely working for symbiotic relationship with industries since its inception in 1956. Campus placement process is an important aspect of this relationship and further strengthening this relationship by undertaking a visit to our Institute for the campus placement of our students. NIT Raipur, established as one of the earliest engineering colleges of independent India, has continuously strived to achieve excellence in technology education and research; in the process, it has carved a niche for itself on the national level. On account of its academic atmosphere, well qualified and committed faculty members, regular extra-curricular activities and regular and examination procedure, the institute ensures the holistic development of students. The distinguished alumni of the institute have contributed significantly to various fields such as industry, academia, and administration and bear a testimony to the caliber of the institution. I am confident that a placement visit to our campus will be mutually beneficial and students of the institute will prove to be an asset to your organization. I heartily welcome you to NIT Raipur and hope that this interaction leads to a lasting partnership between our institute and your organisation.",
  },
  // {
  //   image: tpcHeadImage,
  //   name: "Dr. Vivek Kumar Gaba",
  //   role: "Faculty In-Charge, Training & Placement Cell",
  //   message:
  //     "The aim of the Placement Cell is to provide good career opportunities to all the students of the institute. The department keeps close contact with potential employers and organises the campus placements for the students. About 100 leading companies from various premier industries participate in the placement process every year. The consistent positive feedback from industry shows that our students are successfully meeting their expectations.",
  // },
];

export const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent text-lg font-bold uppercase tracking-wider mb-2">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Messages from Leadership</h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-[1000px] w-full">
          {messages.map((item, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: index * 0.2 }}

  /* INSTANT, SNAPPY HOVER */
  whileHover={{ scale: 1.01, y: -1 }}
  whileTap={{ scale: 1.02 }}

  /* IMPORTANT: NO SLOW SPRING */
  transition={{
    type: "tween",
    duration: 0.10,
    ease: "easeOut",
  }}

  className="
    bg-card
    rounded-2xl
    p-8
    relative
    border border-border

    /* BASE SHADOW */
    shadow-[0_-4px_10px_rgba(0,0,0,0.12),0_25px_45px_-12px_rgba(0,0,0,0.35)]

    /* HOVER SHADOW (instant change) */
    hover:shadow-[0_-8px_18px_rgba(0,0,0,0.18),0_35px_50px_-12px_rgba(0,0,0,0.45)]
  "
>

              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <p className="text-sm text-accent">{item.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed italic">"{item.message}"</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};