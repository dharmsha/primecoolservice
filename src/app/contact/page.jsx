"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// =====================================================
// MY BILLING POINT - CONTACT PAGE
// Modern UI with Framer Motion Animations
// =====================================================

const PHONE = "917988628102";
const PHONE_DISPLAY = "+91 79886 28102";

function WhatsAppLink() {
  const message = encodeURIComponent(
    "Hello My Billing Point! I want to enquire about your billing software."
  );
  return `https://wa.me/${PHONE}?text=${message}`;
}

const CONTACT_INFO = [
  {
    title: "Call Us Directly",
    value: PHONE_DISPLAY,
    description: "Mon-Sat (10 AM to 8 PM) ke beech call karein",
    href: `tel:+${PHONE}`,
    icon: "📞",
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "WhatsApp Support",
    value: "Chat With Us",
    description: "Turant demo ya support ke liye message karein",
    href: WhatsAppLink(),
    icon: "💬",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Visit Our Office",
    value: "Patna, Bihar",
    description: "Kumrahar, Near Bapu Sabhagar",
    href: "https://www.google.com/maps/search/?api=1&query=Kumrahar+Patna+Bapu+Sabhagar",
    icon: "📍",
    color: "from-indigo-400 to-purple-500",
  },
];

// Animation Variants (JSX ke liye : any hata diya hai)
// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-slate-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -right-40 w-[30rem] h-[30rem] bg-indigo-300/20 rounded-full blur-3xl" />
      </div>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:pt-32 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Contact My Billing Point
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Talk About Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                Business
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Billing, Stock management, ya GST invoice — kisi bhi sawaal ke liye
              humse sampark karein. Hamari team aapki poori madad karegi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}
      <section className="relative -mt-8 z-10 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {CONTACT_INFO.map((item, index) => (
              <motion.a
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                href={item.href}
                target={item.title === "WhatsApp Support" || item.title === "Visit Our Office" ? "_blank" : undefined}
                rel={item.title === "WhatsApp Support" || item.title === "Visit Our Office" ? "noopener noreferrer" : undefined}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h2 className="mt-6 text-xl font-black text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 font-bold text-emerald-600">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FORM + INFO SECTION
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            
            {/* Left Side - Info & Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div variants={fadeUp}>
                <span className="text-sm font-black uppercase tracking-widest text-emerald-600">
                  Send Enquiry
                </span>
                <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                  Hum Kaise Madad <br/> Kar Sakte Hain?
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Apni details fill karein ya direct WhatsApp par sampark karein. Humari team aapko software ka demo dene ke liye taiyar hai.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900">
                  Software Features
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "GST Billing",
                    "Stock Management",
                    "Low Stock Alerts",
                    "Sales Reports",
                    "Multi-User Access",
                    "WhatsApp Sharing",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/50 sm:p-10"
            >
              {/* Glow behind form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-indigo-400 rounded-[2rem] blur opacity-10 pointer-events-none" />
              
              <h2 className="text-2xl font-black text-slate-900">
                Book a Free Demo
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Details bharein, hum aapse turant sampark karenge.
              </p>

              <form
                action={WhatsAppLink()}
                method="get"
                target="_blank"
                className="mt-8 space-y-5 relative z-10"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
                    Aapka Naam
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter mobile number"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="mb-2 block text-sm font-bold text-slate-700">
                    Business Type
                  </label>
                  <select
                    id="business"
                    name="business"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  >
                    <option value="">Select business type</option>
                    <option>Retail / Kirana Store</option>
                    <option>Medical / Pharmacy</option>
                    <option>Electronics / Hardware</option>
                    <option>Garments / Boutique</option>
                    <option>Restaurant / Cafe</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Apni requirement batayein..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
                >
                  Send Enquiry via WhatsApp
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA BANNER
      ===================================================== */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-16 text-center text-white sm:px-12"
          >
            {/* Animated Background Blobs */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/30 blur-[100px] rounded-full pointer-events-none" 
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 blur-[100px] rounded-full pointer-events-none" 
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                Ready to upgrade your business?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300 sm:text-lg">
                Aaj hi free demo book karein aur apne business ko digital banayein. No credit card required.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400"
                >
                  💬 WhatsApp par Demo Lein
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:+${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  📞 {PHONE_DISPLAY}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Nav */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm sm:flex-row sm:px-8">
          <p className="text-slate-500">Need more information?</p>
          <div className="flex gap-5">
            <Link href="/about" className="font-semibold text-slate-600 transition hover:text-emerald-600">About Us</Link>
            <Link href="/services" className="font-semibold text-slate-600 transition hover:text-emerald-600">Features</Link>
            <Link href="/" className="font-semibold text-slate-600 transition hover:text-emerald-600">Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}