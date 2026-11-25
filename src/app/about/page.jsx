"use client";

import Link from "next/link";

// =====================================================
// MY BILLING POINT — ABOUT PAGE (Modern & Clean UI)
// =====================================================

const COMPANY = {
  name: "My Billing Point",
  founder: "Rishabh",
  city: "Patna",
  area: "Kumrahar, Near Bapu Sabhagar",
  state: "Bihar",
  years: 2,
  phone: "+91 85273 78513",
  phoneRaw: "918527378513",
  email: "support@mybillingpoint.com",
};

const STATS = [
  { value: "2+", label: "Years of Trust" },
  { value: "500+", label: "Happy Businesses" },
  { value: "1M+", label: "Bills Generated" },
  { value: "24/7", label: "Support Available" },
];

const VALUES = [
  {
   
    title: "Business-First",
    desc: "Har feature aapke business ki zaroorat dekh kar banaya gaya hai — practical aur simple.",
  },
  {
   
    title: "Fast & Reliable",
    desc: "Billing speed matter karti hai. Hamara software fast hai, reliable hai.",
  },
  {
   
    title: "100% Secure",
    desc: "Aapka data aapka hai. Encryption aur backup ke saath hamesha safe.",
  },
  {
  
    title: "Free Setup",
    desc: "Software install, data migrate aur staff training — sab kuch free.",
  },
  {
    
    title: "Human Support",
    desc: "Bot nahi — real insaan. Call, WhatsApp ya email — hum available hain.",
  },
  {
   
    title: "Affordable",
    desc: "Har budget ke liye plan. No hidden charges, no surprises.",
  },
];

const JOURNEY = [
  {
    year: "2023",
    title: "Idea Ka Janm",
    desc: "Patna ke local dukaandaaron ki problem dekh kar Rishabh sir ne socha — billing ko simple banaya jaaye.",
  },
  {
    year: "2023",
    title: "My Billing Point Shuru",
    desc: "Kumrahar, Patna se ek chhote se office se shuruaat — pehle 10 customers ke saath.",
  },
  {
    year: "2024",
    title: "500+ Businesses",
    desc: "Bihar aur aas-paas ke rajyon mein 500+ businesses ne hamare software pe bharosa kiya.",
  },
  {
    year: "2025",
    title: "Aur Aage",
    desc: "Naye features, better integrations aur aur zyada businesses ki madad — safar jaari hai.",
  },
];

function buildWhatsAppLink() {
  const message = encodeURIComponent(
    "Hello My Billing Point 👋\n\nMujhe aapke billing software ke baare mein jaanna hai.\n\nPlease share plans & pricing."
  );
  return `https://wa.me/${COMPANY.phoneRaw}?text=${message}`;
}

function getMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=Kumrahar+Patna+Bapu+Sabhagar`;
}

export default function AboutPage() {
  return (
    <div className="relative bg-white text-slate-900 overflow-hidden">
      {/* Background subtle elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-emerald-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-50 rounded-full blur-[100px] opacity-60" />
      </div>

      {/* =====================================================
          HERO (Modern Clean Layout like screenshots)
      ===================================================== */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Area */}
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              ABOUT US
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              We build tools for <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                modern businesses.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Hum ek <strong className="text-slate-900">Patna-based software company</strong> hain. 
              Pichhle <strong className="text-emerald-600">2 saalon</strong> se hum local businesses ko 
              smart billing, stock management aur GST solutions de rahe hain.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white shadow-lg hover:bg-slate-800 transition-all hover:-translate-y-0.5"
              >
                Baat Karein
                <span>→</span>
              </a>
              <Link
                href="/services"
                className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Features Dekhein
              </Link>
            </div>
          </div>

          {/* Right Image / Abstract Graphic */}
          <div className="relative lg:ml-auto w-full max-w-lg">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-indigo-100 rounded-[2rem] transform rotate-3 scale-105 -z-10" />
            
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              {/* Replace this img src with a real photo of your team or office */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-[400px] object-cover"
              />
              
              {/* Founder floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  R
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Rishabh</p>
                  <p className="text-xs text-slate-500">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS (Clean minimal strip)
      ===================================================== */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/50">
            {STATS.map((stat, i) => (
              <div key={i} className={`text-center ${i !== 0 ? 'pl-4 md:pl-8' : ''}`}>
                <p className="text-3xl sm:text-4xl font-black text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY (Clean 2-column layout)
      ===================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Ek local problem,<br/>
              <span className="text-slate-400">ek smart solution.</span>
            </h2>
            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-emerald-50 p-6 border border-emerald-100">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-bold text-emerald-900">Our Office</p>
                <p className="text-sm text-emerald-700 mt-1">
                  {COMPANY.area}, {COMPANY.city}, {COMPANY.state}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Patna ke local dukaandaaron ne hamesha ek problem face ki — 
              <strong className="text-slate-900"> hisaab rakhna mushkil, stock track karna tough,</strong> aur GST billing ka jhanjhat.
            </p>
            <p>
              <strong className="text-slate-900">Rishabh sir</strong> ne ye problem closely dekhi aur socha — kyun na ek aisa software banaya jaaye jo simple ho, fast ho aur sasta ho. Yahin se shuru hua <strong className="text-emerald-600">My Billing Point</strong> ka safar.
            </p>
            <p>
              Aaj, 2 saal baad, hum Bihar aur uske bahar ke 500+ businesses ki madad kar rahe hain — unka stock manage karne mein, bills banane mein, aur apne business ko grow karne mein.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES (Grid layout)
      ===================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Why choose us?
            </h2>
            <p className="mt-4 text-slate-600">
              Sirf software nahi — poora support system. Aapke business ki har zaroorat ka khayal rakha gaya hai.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {VALUES.map((value) => (
              <div key={value.title} className="group">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY (Simple timeline)
      ===================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Our Journey
            </h2>
          </div>

          <div className="space-y-12 border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
            {JOURNEY.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 md:flex md:items-center md:justify-between group">
                
                {/* Desktop Layout: Year on left, content on right */}
                <div className="hidden md:block w-32 text-right pr-8 text-2xl font-black text-slate-300 group-hover:text-emerald-500 transition-colors">
                  {item.year}
                </div>

                {/* Dot */}
                <div className="absolute left-[-9px] md:left-auto md:relative md:w-4 md:h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-emerald-500 transition-colors z-10" />

                {/* Content */}
                <div className="md:flex-1 md:pl-8">
                  <span className="md:hidden inline-block text-sm font-bold text-emerald-600 mb-1">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600 max-w-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA (Clean Banner)
      ===================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-slate-900 px-6 py-16 sm:px-16 sm:py-24 text-center relative overflow-hidden">
          {/* bg decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Ready to upgrade <br/> your business?
            </h2>
            <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">
              Free demo book karein aur dekhein kaise My Billing Point aapke business ko aasaan bana sakta hai.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-400 transition-all hover:-translate-y-0.5"
              >
                WhatsApp par Demo Book Karein
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}