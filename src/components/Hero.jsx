"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#020817] text-white">
      {/* Hero Section — full screen minus navbar */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center">
        {/* Background Glow */}
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] animate-pulse rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]" />

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#67e8f9_1px,transparent_1px),linear-gradient(90deg,#67e8f9_1px,transparent_1px)] [background-size:55px_55px]" />

        {/* Decorative Circles */}
        <div className="absolute left-[8%] top-[18%] h-3 w-3 animate-ping rounded-full bg-cyan-400" />
        <div className="absolute right-[12%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-blue-400" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8">
          {/* ================= LEFT ================= */}
          <div className="animate-[heroText_1s_ease-out_both]">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-2.5 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-sm font-semibold text-cyan-300">
                भरोसेमंद घरेलू उपकरण सेवा
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              आपका उपकरण,
              <br />
              <span className="relative inline-block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                हमारी जिम्मेदारी
              </span>
            </h1>

            {/* Underline */}
            <div className="mt-5 h-1 w-28 animate-[lineGrow_1.2s_ease-out_both] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              एसी, फ्रिज, वाशिंग मशीन, आरओ, गीजर, माइक्रोवेव ओवन और किचन चिमनी
              की{" "}
              <span className="font-bold text-cyan-300">
                इंस्टॉलेशन, सर्विस और रिपेयरिंग
              </span>{" "}
              अब आपके घर पर।
            </p>

            {/* Service Pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "एसी सर्विस",
                "फ्रिज सर्विस",
                "वाशिंग मशीन",
                "आरओ सर्विस",
                "गीजर",
              ].map((item, index) => (
                <span
                  key={item}
                  className="animate-[pillUp_.7s_ease-out_both] rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:8527378513"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 text-center font-black text-slate-950 shadow-[0_15px_40px_rgba(34,211,238,.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,211,238,.3)]"
              >
                <span className="relative z-10">
                  📞 अभी सर्विस बुक करें
                </span>

                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/40 transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href="/services"
                className="rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 text-center font-bold text-white backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                हमारी सेवाएं देखें →
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
              <div>
                <h3 className="text-2xl font-black text-cyan-400">100%</h3>
                <p className="mt-1 text-xs text-slate-500">सर्विस गारंटी</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <h3 className="text-2xl font-black">13+</h3>
                <p className="mt-1 text-xs text-slate-500">प्रमुख ब्रांड</p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <h3 className="text-2xl font-black">24/7</h3>
                <p className="mt-1 text-xs text-slate-500">सहायता</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex animate-[imageReveal_1.2s_ease-out_both] items-center justify-center">
            {/* Outer Glow */}
            <div className="absolute h-[75%] w-[75%] animate-pulse rounded-full bg-cyan-400/15 blur-[100px]" />

            {/* Rotating Ring */}
            <div className="absolute h-[90%] w-[90%] animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-cyan-400/10" />

            {/* Image Card */}
            <div className="relative w-full max-w-[650px] animate-[imageFloat_6s_ease-in-out_infinite] rounded-[30px] border border-white/15 bg-white/[0.04] p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/hero.jpeg"
                  alt="प्राइम कूल सर्विस - इंस्टॉलेशन, सर्विस और रिपेयरिंग"
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full object-cover transition duration-1000 hover:scale-[1.03]"
                />

                {/* Image Shine */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shine_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>

            {/* Guarantee Floating Card */}
            <div className="absolute -bottom-5 -left-3 animate-[cardFloat_4s_ease-in-out_infinite] rounded-2xl border border-cyan-400/20 bg-[#07152d]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-0">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-xl text-cyan-300">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-slate-400">हमारी गारंटी</p>
                  <p className="font-black text-white">100% सर्विस गारंटी</p>
                </div>
              </div>
            </div>

            {/* Technician Card */}
            <div className="absolute -right-2 top-8 animate-[cardFloatReverse_5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#07152d]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-0">
              <p className="text-xs text-slate-400">अनुभवी तकनीशियन</p>
              <p className="mt-1 font-black text-cyan-300">
                तेज़ और भरोसेमंद सेवा
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}