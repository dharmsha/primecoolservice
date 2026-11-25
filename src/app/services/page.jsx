"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// =====================================================
// MY BILLING POINT - SERVICES & PRICING PAGE
// Clean UI, No Icons, Framer Motion Animations
// =====================================================

const PHONE = "917988628102";
const PHONE_DISPLAY = "+91 79886 28102";

function WhatsAppLink(planName) {
  const message = encodeURIComponent(
    `Hello My Billing Point! Mujhe "${planName}" plan ke baare mein jaanna hai. Please details share karein.`
  );
  return `https://wa.me/${PHONE}?text=${message}`;
}

// Pricing Plans Data
// Pricing Plans Data
const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic Setup",
    price: "1,500",
    duration: "/ one-time",
    desc: "Chhote dukaandaaron ke liye perfect shuruaat.",
    features: [
      "Multi User Login",
      "Basic GST Billing",
      "Stock Management",
      "Thermal Printer Support",
      "12 Month Free Support",
      "Data Backup (Manual)",
    ],
    highlight: false,
  },
  {
    id: "standard",
    name: "Standard Pro",
    price: "5,000",
    duration: "/ 5 years",
    desc: "Growing businesses ke liye sabse popular plan.",
    features: [
      "Multi-User Access (up to 3)",
      "Advanced GST & POS Billing",
      "Low Stock Alerts",
      "Sales & Profit Reports",
      "WhatsApp Bill Sharing",
      "5 Years Software Support", // Updated
    ],
    highlight: true, // Isko highlight karenge
  },
  {
    id: "premium",
    name: "Premium Lifetime",
    price: "11,000",
    duration: "/ lifetime",
    desc: "Bade showrooms aur multi-store business ke liye lifetime deal.",
    features: [
      "Lifetime Software Access",
      "Website + Billing Software Included", // Updated
      "Multi-Warehouse Support",
      "Barcode / QR Scanning",
      "Custom Reports & Analytics",
      "5 Years Dedicated Support", // Updated
    ],
    highlight: false,
  },
];

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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-slate-900 overflow-hidden font-sans">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -right-40 w-[30rem] h-[30rem] bg-indigo-300/20 rounded-full blur-3xl" />
      </div>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:pt-32 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                15 Days Free Trial - No Credit Card Required
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Simple Pricing, <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                Powerful Features.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Apne business ke size ke hisaab se plan chunein. Start karein sirf 
              ₹1,500 se aur badhayein ₹11,000 tak ke premium plans ke saath.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PRICING SECTION
      ===================================================== */}
      <section className="relative -mt-8 z-10 px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-3 items-center"
          >
            {PRICING_PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className={`relative rounded-[2rem] p-8 sm:p-10 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105 border border-slate-700 z-20"
                    : "bg-white text-slate-900 shadow-xl shadow-slate-200/50 border border-slate-200 z-10"
                }`}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-900 shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-xl font-black ${plan.highlight ? "text-emerald-400" : "text-emerald-600"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm font-medium ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`text-5xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-sm font-semibold ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.duration}
                  </span>
                </div>

                <div className={`my-8 h-px w-full ${plan.highlight ? "bg-slate-700" : "bg-slate-100"}`} />

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        plan.highlight ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-100 text-emerald-600"
                      }`}>
                        ✓
                      </span>
                      <span className={`text-sm font-semibold ${plan.highlight ? "text-slate-200" : "text-slate-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={WhatsAppLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 block w-full rounded-2xl py-4 text-center text-sm font-black transition-colors ${
                    plan.highlight
                      ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-lg hover:shadow-emerald-500/25"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FEATURES LIST SECTION
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6 bg-white border-y border-slate-200/60">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-slate-900 sm:text-4xl">
              Sab kuch jo aapke business ko <br/> chalane ke liye chahiye.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-600">
              Hamare software mein har wo feature hai jo ek modern business ko daily basis par chahiye hota hai. Koi hidden charges nahi.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "GST & POS Billing", desc: "Faster billing with thermal printer support and GST auto-calculation." },
              { title: "Stock Management", desc: "Track stock in/out, set low stock alerts, and manage multiple godowns." },
              { title: "Reports & Analytics", desc: "Get daily sales, profit & loss, and stock valuation reports instantly." },
              { title: "Multi-User Access", desc: "Give staff their own logins. Admin can control what they see and do." },
              { title: "WhatsApp Sharing", desc: "Send digital bills directly to customers on their WhatsApp." },
              { title: "Data Security", desc: "Your data is safe with daily automated backups and secure servers." }
            ].map((feature, i) => (
              <motion.div 
                variants={fadeUp} 
                key={i}
                className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="h-1 w-8 bg-emerald-400 rounded-full mb-4" />
                <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FAQ / CTA BANNER
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6">
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
                Confused kaunsa plan lein?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300 sm:text-lg">
                Abhi humse baat karein. Hum aapke business ki zaroorat samajh kar sahi plan suggest karenge. Pehle 15 din bilkul free!
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WhatsAppLink("Free Trial / Consultation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-400"
                >
                  Start 15 Days Free Trial
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:+${PHONE}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Call: {PHONE_DISPLAY}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}