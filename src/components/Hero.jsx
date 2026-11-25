"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// =====================================================
// TYPEWRITER COMPONENT
// =====================================================
function Typewriter() {
  const words = ["Hamara System", "Smart Billing", "Easy Stock", "GST Invoice"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt("100")));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <span className="bg-gradient-to-r from-emerald-300 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
        {words[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-emerald-400 ml-1 translate-y-1"
      />
    </span>
  );
}

/* ---------- Floating Bubbles Background ---------- */
function Bubbles() {
  const bubbles = [
    { left: "8%", size: 18, delay: "0s", duration: "12s", color: "bg-emerald-400/20" },
    { left: "18%", size: 32, delay: "2s", duration: "16s", color: "bg-indigo-400/15" },
    { left: "28%", size: 12, delay: "4s", duration: "10s", color: "bg-teal-400/25" },
    { left: "42%", size: 24, delay: "1s", duration: "14s", color: "bg-emerald-500/15" },
    { left: "55%", size: 16, delay: "3s", duration: "11s", color: "bg-indigo-500/20" },
    { left: "68%", size: 40, delay: "5s", duration: "18s", color: "bg-teal-500/10" },
    { left: "78%", size: 20, delay: "2.5s", duration: "13s", color: "bg-emerald-400/20" },
    { left: "88%", size: 28, delay: "4.5s", duration: "15s", color: "bg-indigo-400/15" },
    { left: "95%", size: 14, delay: "1.5s", duration: "12s", color: "bg-teal-400/25" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={`absolute rounded-full blur-[1px] ${b.color} bubble-rise`}
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Live Stock Row (animated qty) ---------- */
function StockRow({ name, base, status, delay }) {
  const [qty, setQty] = useState(base);

  useEffect(() => {
    const timer = setInterval(() => {
      setQty((prev) => {
        if (status === "out") return 0;
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.max(status === "low" ? 1 : 4, Math.min(base + 8, next));
      });
    }, 2200 + delay);
    return () => clearInterval(timer);
  }, [base, status, delay]);

  const color =
    status === "ok"
      ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/20"
      : status === "low"
      ? "bg-amber-400/10 text-amber-300 border-amber-400/20"
      : "bg-red-400/10 text-red-300 border-red-400/20";

  return (
    <div className="flex items-center justify-between border-t border-white/5 py-2">
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === "ok"
              ? "bg-emerald-400"
              : status === "low"
              ? "bg-amber-400 animate-pulse"
              : "bg-red-400 animate-ping"
          }`}
        />
        <span className="text-[10px] text-slate-400">{name}</span>
      </div>
      <span
        className={`rounded-full border px-2 py-0.5 text-[9px] font-bold transition-all duration-500 ${color}`}
      >
        {qty} pcs
      </span>
    </div>
  );
}

/* ---------- Animated Counter ---------- */
function Counter({ to, prefix = "", suffix = "", duration = 1500 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [to, duration]);

  return (
    <span>
      {prefix}
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

// Framer Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#020817] text-white">
      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes bubble-rise {
          0% { transform: translateY(100vh) scale(0.6); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-10vh) scale(1.1); opacity: 0; }
        }
        .bubble-rise {
          animation: bubble-rise linear infinite;
          bottom: -40px;
        }
        @keyframes barGrow {
          from { width: 0%; }
        }
      `}</style>

      <section className="relative flex min-h-[calc(100vh-80px)] items-center">
        {/* Glow */}
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] animate-pulse rounded-full bg-emerald-500/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#34d399_1px,transparent_1px),linear-gradient(90deg,#34d399_1px,transparent_1px)] [background-size:55px_55px]" />

        {/* Bubbles */}
        <Bubbles />

        {/* Dots */}
        <div className="absolute left-[8%] top-[18%] h-3 w-3 animate-ping rounded-full bg-emerald-400" />
        <div className="absolute right-[12%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-indigo-400" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8">
          
          {/* ========== LEFT ========== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-2.5 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-semibold text-emerald-300">
                India ka Smart Billing & Stock Software
              </span>
            </motion.div>

            {/* Heading with Typewriter */}
            <motion.h1 variants={fadeUp} className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Aapka Business,
              <br />
              <Typewriter />
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />

            {/* Description */}
            <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              <span className="font-bold text-emerald-300">My Billing Point</span>{" "}
              ke saath manage karo apna stock, billing, GST invoice aur
              stock-out alerts — sab kuch ek hi jagah, fast aur secure.
            </motion.p>

            {/* Feature Pills */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
              {[
                "📦 Stock Manage",
                "🧾 Bill / Invoice",
                "⚠️ Stock Out Alert",
                "📊 Sales Report",
                "💳 GST Billing",
                "🔔 Low Stock Notify",
              ].map((item, index) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/signup"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-400 to-indigo-600 px-8 py-4 text-center font-black text-slate-950 shadow-[0_15px_40px_rgba(52,211,153,.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(52,211,153,.3)]"
              >
                <span className="relative z-10">🚀 Free Trial Shuru Karein</span>
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/40 transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href="/features"
                className="rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 text-center font-bold text-white backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                Saare Features Dekhein →
              </a>
            </motion.div>

            {/* Trust Stats with Counters */}
            <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
              <div>
                <h3 className="text-2xl font-black text-emerald-400">
                  <Counter to={500} suffix="+" />
                </h3>
                <p className="mt-1 text-xs text-slate-500">Happy Shopkeepers</p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <h3 className="text-2xl font-black">
                  <Counter to={1} suffix="M+" />
                </h3>
                <p className="mt-1 text-xs text-slate-500">Bills Generated</p>
              </div>
              <div className="border-l border-white/10 pl-5">
                <h3 className="text-2xl font-black">
                  <Counter to={99} suffix=".9%" />
                </h3>
                <p className="mt-1 text-xs text-slate-500">Uptime</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ========== RIGHT — LIVE DASHBOARD ========== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="absolute h-[75%] w-[75%] animate-pulse rounded-full bg-emerald-400/15 blur-[100px]" />
            <div className="absolute h-[90%] w-[90%] animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-emerald-400/10" />

            {/* Dashboard */}
            <div className="relative w-full max-w-[620px] animate-[imageFloat_6s_ease-in-out_infinite] rounded-[30px] border border-white/15 bg-white/[0.04] p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0a1628] to-[#0f1e38] p-5">
                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-slate-500">
                    MY BILLING POINT — LIVE
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 transition hover:scale-105">
                    <p className="text-[9px] text-slate-400">Aaj ki Sales</p>
                    <p className="mt-1 text-sm font-black text-emerald-300">
                      ₹<Counter to={42850} />
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-400/20 bg-indigo-400/5 p-3 transition hover:scale-105">
                    <p className="text-[9px] text-slate-400">Total Bills</p>
                    <p className="mt-1 text-sm font-black text-indigo-300">
                      <Counter to={128} />
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 transition hover:scale-105">
                    <p className="text-[9px] text-slate-400">Low Stock</p>
                    <p className="mt-1 text-sm font-black text-amber-300">
                      <Counter to={7} />
                    </p>
                  </div>
                </div>

                {/* Live Stock List */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-300">
                      📦 Live Stock Status
                    </span>
                    <span className="flex items-center gap-1 text-[9px] text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Auto-sync
                    </span>
                  </div>

                  <StockRow name="AC Copper Pipe" base={24} status="ok" delay={0} />
                  <StockRow name="Fridge Gas R134" base={3} status="low" delay={300} />
                  <StockRow name="RO Membrane" base={0} status="out" delay={600} />
                </div>

                {/* Bill Preview */}
                <div className="mt-3 rounded-xl border border-indigo-400/20 bg-indigo-400/5 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-300">
                      🧾 Naya Bill #INV-2041
                    </span>
                    <span className="text-[10px] font-black text-white">₹1,240</span>
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 animate-[barGrow_1.5s_ease-out] rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stock Alert */}
            <div className="absolute -bottom-5 -left-3 animate-[cardFloat_4s_ease-in-out_infinite] rounded-2xl border border-amber-400/20 bg-[#07152d]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-0">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-amber-400/20 to-red-500/20 text-xl text-amber-300">
                  ⚠️
                </div>
                <div>
                  <p className="text-xs text-slate-400">Stock Alert</p>
                  <p className="font-black text-white">3 items low stock</p>
                </div>
              </div>
            </div>

            {/* Floating Invoice */}
            <div className="absolute -right-2 top-8 animate-[cardFloatReverse_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#07152d]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-0">
              <p className="text-xs text-slate-400">Bill Generated</p>
              <p className="mt-1 font-black text-emerald-300">GST Invoice Ready ✓</p>
            </div>

            {/* Floating Stock In Badge */}
            <div className="absolute bottom-16 right-0 animate-[cardFloat_5.5s_ease-in-out_infinite] rounded-2xl border border-emerald-400/20 bg-[#07152d]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10 text-sm text-emerald-300">
                  ⬆️
                </span>
                <div>
                  <p className="text-[10px] text-slate-400">Stock In</p>
                  <p className="text-xs font-black text-emerald-300">+50 pcs added</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}