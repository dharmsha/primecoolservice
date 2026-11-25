"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function FounderVision() {
  return (
    <div className="bg-[#fafcff] min-h-screen font-sans text-slate-800 overflow-hidden">
      
      {/* =====================================================
          SECTION 1: THE BIG VISION QUOTE (Like Screenshot)
      ===================================================== */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              Our Vision
            </motion.h2>
            {/* Red Underline */}
            <motion.div variants={fadeUp} className="w-16 h-1 bg-red-500 mx-auto mb-10 rounded-full" />

            {/* Vision Quote Box */}
            <motion.div 
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] p-8 sm:p-12 border border-slate-100"
            >
              <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-medium">
                "To revolutionize the local business landscape by creating intelligent billing solutions that empower shopkeepers, enrich their livelihoods, and build a sustainable future. We strive to be the catalyst for positive change through technology that truly matters to the common man."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: VISION PILLARS (3 Cards Layout)
      ===================================================== */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              Our Vision Pillars
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every solution we create.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={fadeUp} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pushing boundaries through cutting-edge technology and creative solutions that redefine industry standards.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeUp} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">People Centric</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Building a culture where every team member thrives, grows, and contributes to our shared success.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={fadeUp} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Impact</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Creating solutions that transcend borders and make meaningful differences in communities worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3: FOUNDER SHORT INTRO (Optional, Clean version)
      ===================================================== */}
      <section className="bg-white py-16 border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img src="/rishu.png" alt="Rishabh" className="w-full h-auto object-cover aspect-square" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900">Meet The Founder</h3>
            <p className="text-red-500 font-semibold mb-3">Rishabh (Rishu Gupta)</p>
            <p className="text-slate-600 leading-relaxed italic">
              "Mera sapna sirf software bechna nahi, balki Bihar ke har chhote business ko digital aur aatmanirbhar banana hai. Hum technology ko aasaan banate hain, taaki aap apna dhyaan business par laga sakein."
            </p>
            <div className="mt-6">
              <a href="tel:+917988628102" className="inline-block bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition">
                Contact Rishabh
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}