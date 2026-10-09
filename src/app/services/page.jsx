"use client";

import { useMemo, useState } from "react";

// =====================================================
// PRIME COOL SERVICE
// Complete AC Service & Repair Page
// =====================================================

// 📞 Business Numbers
const PHONE = "918527378513";
const PHONE_DISPLAY = "8527378513 / 7992206530";

// 🏢 Business Location
const BUSINESS_LOCATION = {
  name: "Prime Cool Service",
  address: "Your Shop Address, City, State - Pincode",
  lat: 28.6139,
  lng: 77.209,
};

// =====================================================
// SERVICE DATA
// =====================================================

const SERVICE_CATEGORIES = [
  {
    id: "gas-charging",
    title: "Gas Charging & Coils",
    hindi: "गैस चार्जिंग और कॉइल",
    icon: "❄️",
    gradient: "from-blue-600 via-cyan-500 to-sky-400",
    light: "bg-blue-50",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85",
    services: [
      { name: "Gas Charging", price: 3000 },
      { name: "Flair Nut Replaced", price: 150 },
      { name: "Copper Coil Condenser 1 Ton Split", price: 4000 },
      { name: "Copper Coil Condenser 1.5 Ton Split", price: 4800 },
      { name: "Copper Coil Condenser 2 Ton Split", price: 5300 },
      { name: "Capillary & Filter Replaced", price: 350 },
      { name: "Compressor 0.8–1 Ton", price: 6500 },
      { name: "Compressor 1.5 Ton", price: 8500 },
      { name: "Compressor 2 Ton", price: 10000 },
      { name: "Expansion Valve Replaced", price: 1200 },
      { name: "Replacement Compressor (1 Ton)", price: 4000 },
      { name: "Replacement Compressor (1.5 Ton)", price: 4500 },
      { name: "Replacement Compressor (2 Ton)", price: 5000 },
    ],
  },

  {
    id: "valves-coils",
    title: "Service Valve & Copper Coils",
    hindi: "सर्विस वाल्व और कॉपर कॉइल",
    icon: "🔧",
    gradient: "from-cyan-600 via-teal-500 to-emerald-400",
    light: "bg-cyan-50",
    image:
      "https://images.unsplash.com/photo-1631545806609-2b15c9c5fbd1?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Service Valve Replaced 1/4",
        price: null,
        note: "Call for price",
      },
      {
        name: "Service Valve Replaced 1/2",
        price: null,
        note: "Call for price",
      },
      {
        name: "Service Valve Replaced 5/8",
        price: null,
        note: "Call for price",
      },
      { name: "Copper Cooling Coil (Split AC) 1 Ton", price: 5500 },
      { name: "Copper Cooling Coil (Split AC) 1.5 Ton", price: 6500 },
      { name: "Copper Cooling Coil (Split AC) 2 Ton", price: 7500 },
      {
        name: "Copper Cooling Coil O General / Mitsubishi 1.5 Ton",
        price: 7500,
      },
      { name: "Copper Cooling Coil (Window AC) 1 Ton", price: 4500 },
      { name: "Copper Cooling Coil (Window AC) 1.5 Ton", price: 5000 },
      { name: "Copper Cooling Coil (Window AC) 2 Ton", price: 5500 },
      {
        name: "Cooling Coil Repair with Anti-rust Coating",
        price: 899,
      },
      { name: "Left Side U Band Replacement", price: 1500 },
    ],
  },

  {
    id: "fan-motors",
    title: "Fan & Blower Motors",
    hindi: "फैन और ब्लोअर मोटर",
    icon: "🌀",
    gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    light: "bg-indigo-50",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85",
    services: [
      { name: "Fan Motor - Split AC", price: 1800, labour: 499 },
      { name: "Blower Motor - Split AC", price: 2200, labour: 499 },
      { name: "Blower Replaced", price: 1100, labour: 499 },
      { name: "Flap / Swing Motor Replacement", price: 400, labour: 499 },
      { name: "Motor Bearing Change", price: 1000 },
      { name: "Fan Motor - Window AC", price: 2600, labour: 499 },
      { name: "Blower Motor (DC) - Split AC", price: 3800 },
      { name: "Fan Motor (DC) - Split AC", price: 3800 },
    ],
  },

  {
    id: "installation",
    title: "Installation & Accessories",
    hindi: "इंस्टालेशन और सामान",
    icon: "🛠️",
    gradient: "from-teal-600 via-emerald-500 to-green-400",
    light: "bg-emerald-50",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "1 ft Copper Pipe Set (Insulation, Wire per ft)",
        price: 350,
      },
      { name: "Split AC Wall Stand", price: 750 },
      { name: "Outdoor Unit Reinstalled", price: 799 },
      { name: "Indoor Unit Reinstalled", price: 699 },
      { name: "Fastener Complete Set", price: 200 },
      { name: "Floor Stand", price: 550 },
      { name: "Universal Back Plate", price: 300 },
      { name: "Foam-jet AC Service", price: 599 },
      { name: "AC Installation", price: 1699 },
      { name: "AC Uninstallation", price: 699 },
      { name: "Anti-rust Spray (Avoid Gas Leak)", price: 249 },
      { name: "Lite AC Service", price: 499 },
      { name: "Drain Pipe Replacement (1m)", price: 100 },
      { name: "3/4 Core Wire (per meter)", price: 120 },
      { name: "Outdoor / Indoor Connector", price: 150 },
    ],
  },

  {
    id: "repair-small",
    title: "Small Repairs & Fixes",
    hindi: "छोटी रिपेयरिंग",
    icon: "🔩",
    gradient: "from-purple-600 via-fuchsia-500 to-pink-500",
    light: "bg-purple-50",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Water Leakage Repaired - Split AC",
        price: 100,
        labour: 499,
      },
      { name: "Adjust Grill Locks", price: 0, labour: 349 },
      {
        name: "Adjust Pipe & Tighten Compressor Screw",
        price: 0,
        labour: 349,
      },
      {
        name: "Connector Wires Replaced (1m)",
        price: 100,
        labour: 349,
      },
      {
        name: "Tighten / Replace Thimble",
        price: 50,
        labour: 349,
      },
      {
        name: "External Dust / Stick Removal",
        price: 0,
        labour: 399,
      },
      {
        name: "Noise Adjustment in Motor",
        price: 0,
        labour: 399,
      },
      {
        name: "Noise Adjustment in Blower",
        price: 0,
        labour: 399,
      },
      {
        name: "Noise Adjustment in Cabinet",
        price: 0,
        labour: 399,
      },
    ],
  },

  {
    id: "parts",
    title: "Parts & Accessories",
    hindi: "पार्ट्स और एक्सेसरीज़",
    icon: "⚙️",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    light: "bg-orange-50",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
    services: [
      { name: "AC Fan Blade", price: 700, labour: 499 },
      { name: "Grill Cover", price: 1500, labour: 349 },
      { name: "Swing Blade Replaced", price: 400, labour: 349 },
      { name: "Universal Remote", price: 800 },
      { name: "Water Tray", price: 500, labour: 200 },
      { name: "Stabilizer Repair", price: 1500 },
      { name: "Sleeves (per piece)", price: 50 },
      { name: "Stabilizer Connection", price: 0, labour: 399 },
    ],
  },
];

// =====================================================
// HELPERS
// =====================================================

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN").format(price);
}

function getMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${BUSINESS_LOCATION.lat},${BUSINESS_LOCATION.lng}`;
}

function buildWhatsAppLink(service, category) {
  const mapsUrl = getMapsUrl();

  const priceText =
    service.price !== null && service.price !== undefined
      ? `₹${formatPrice(service.price)}`
      : "On Request";

  const labourText = service.labour
    ? `\n*Labour:* ₹${formatPrice(service.labour)}`
    : "";

  const message = `🔧 *NEW SERVICE BOOKING - PRIME COOL SERVICE*

*Service Category:* ${category.title}
*Service:* ${service.name}
*Price:* ${priceText}${labourText}

📍 *Prime Cool Service Location:*
${mapsUrl}

Hello Prime Cool Service,
I want to book this AC service.

Please share:
• Available time
• Technician availability
• Final quotation
• Service confirmation

Thank you!`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

function buildGeneralWhatsAppLink() {
  const message = `Hello Prime Cool Service 👋

Mujhe AC Service / Repair ke baare mein information chahiye.

Please share available services, price and booking timing.

Thank you!`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// =====================================================
// MAIN PAGE
// =====================================================

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(
    SERVICE_CATEGORIES[0].id
  );

  const [searchQuery, setSearchQuery] = useState("");

  const [showAllResults, setShowAllResults] = useState(false);

  const currentCategory = useMemo(() => {
    return (
      SERVICE_CATEGORIES.find((category) => category.id === activeCategory) ||
      SERVICE_CATEGORIES[0]
    );
  }, [activeCategory]);

  // Total services
  const totalServices = SERVICE_CATEGORIES.reduce(
    (total, category) => total + category.services.length,
    0
  );

  // Search across ALL categories
  const allSearchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return SERVICE_CATEGORIES.flatMap((category) =>
      category.services
        .filter((service) =>
          `${service.name} ${category.title} ${category.hindi}`
            .toLowerCase()
            .includes(query)
        )
        .map((service) => ({
          service,
          category,
        }))
    );
  }, [searchQuery]);

  const filteredServices = useMemo(() => {
    if (searchQuery.trim()) {
      return [];
    }

    return currentCategory.services;
  }, [currentCategory, searchQuery]);

  const scrollToServices = () => {
    document
      .getElementById("service-list")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-[#f7faff] text-slate-900">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -right-40 w-[30rem] h-[30rem] bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[30%] w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl" />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-950 shadow-2xl">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=90')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-slate-950/90 to-cyan-950/80" />

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="max-w-4xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-4 py-2 text-xs sm:text-sm font-bold text-cyan-100 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  PRIME COOL SERVICE
                  <span className="text-white/40">•</span>
                  AC EXPERTS
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
                  AC Service
                  <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    & Repair
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300">
                  AC की सर्विस, रिपेयर, इंस्टॉलेशन और पार्ट्स —
                  <span className="text-white font-semibold">
                    {" "}
                    transparent pricing
                  </span>{" "}
                  के साथ। अपना service चुनें और सीधे WhatsApp पर booking करें।
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={scrollToServices}
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-extrabold text-slate-950 shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <span>View All Services</span>
                    <span className="group-hover:translate-y-1 transition">
                      ↓
                    </span>
                  </button>

                  <a
                    href={buildGeneralWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-4 font-extrabold text-white hover:bg-white/20 hover:-translate-y-1 transition-all"
                  >
                    <span className="text-xl">💬</span>
                    WhatsApp Us
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10 max-w-2xl">
                  <StatCard value={`${totalServices}+`} label="Services" />
                  <StatCard
                    value={`${SERVICE_CATEGORIES.length}`}
                    label="Categories"
                  />
                  <StatCard value="24/7" label="Booking" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="px-4 sm:px-6 pb-7">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-lg opacity-20" />

            <div className="relative flex items-center rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="pl-5 text-slate-400 text-xl">⌕</div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="सर्विस खोजें... जैसे Gas Charging, Compressor..."
                className="w-full bg-transparent outline-none px-4 py-5 text-sm sm:text-base text-slate-800 placeholder:text-slate-400"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 w-9 h-9 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 font-bold transition"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY TABS
      ===================================================== */}

      <section className="sticky top-0 z-30 px-4 sm:px-6 py-3 bg-[#f7faff]/90 backdrop-blur-xl border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {SERVICE_CATEGORIES.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                    setShowAllResults(false);
                  }}
                  className={`flex-shrink-0 group relative overflow-hidden rounded-2xl px-4 sm:px-5 py-3 border transition-all duration-300 ${
                    active
                      ? "text-white border-transparent shadow-lg scale-[1.02]"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {active && (
                    <span
                      className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`}
                    />
                  )}

                  <span className="relative flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>

                    <span className="text-left">
                      <span className="block text-xs sm:text-sm font-bold whitespace-nowrap">
                        {category.title}
                      </span>

                      <span
                        className={`block text-[10px] mt-0.5 ${
                          active ? "text-white/75" : "text-slate-400"
                        }`}
                      >
                        {category.services.length} services
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH RESULTS
      ===================================================== */}

      {searchQuery.trim() ? (
        <section id="service-list" className="px-4 sm:px-6 pt-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">
              <div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                  Search Results
                </p>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  “{searchQuery}”
                </h2>
              </div>

              <span className="w-fit rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-bold">
                {allSearchResults.length} result
                {allSearchResults.length !== 1 ? "s" : ""}
              </span>
            </div>

            {allSearchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {allSearchResults.map(({ service, category }, index) => (
                  <ServiceCard
                    key={`${category.id}-${service.name}-${index}`}
                    service={service}
                    category={category}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <EmptyState searchQuery={searchQuery} />
            )}
          </div>
        </section>
      ) : (
        <>
          {/* =====================================================
              CATEGORY HERO
          ===================================================== */}

          <section className="px-4 sm:px-6 pt-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative min-h-[300px] sm:min-h-[380px] rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Image */}
                <img
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${currentCategory.gradient} opacity-85`}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />

                {/* Dots */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />

                <div className="relative min-h-[300px] sm:min-h-[380px] flex items-center px-6 sm:px-10 lg:px-14">
                  <div className="max-w-3xl text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 text-4xl sm:text-5xl mb-5 shadow-2xl">
                      {currentCategory.icon}
                    </div>

                    <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold text-white/75">
                      Prime Cool Service
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-2 leading-tight">
                      {currentCategory.title}
                    </h2>

                    <p className="mt-3 text-lg sm:text-xl font-semibold text-white/90">
                      {currentCategory.hindi}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm font-bold">
                        {currentCategory.services.length} Services
                      </span>

                      <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm font-bold">
                        Professional Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              SERVICE LIST
          ===================================================== */}

          <section id="service-list" className="px-4 sm:px-6 pt-10 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
                <div>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest">
                    Available Services
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mt-1">
                    Choose Your Service
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Service select करें और WhatsApp पर तुरंत booking करें।
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200 shadow-sm px-5 py-3">
                  <span className="text-2xl font-black text-slate-900">
                    {currentCategory.services.length}
                  </span>

                  <span className="ml-2 text-sm font-semibold text-slate-500">
                    Services
                  </span>
                </div>
              </div>

              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredServices.map((service, index) => (
                    <ServiceCard
                      key={`${currentCategory.id}-${service.name}-${index}`}
                      service={service}
                      category={currentCategory}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}

              {/* =====================================================
                  BOTTOM CTA
              ===================================================== */}

              <div className="relative overflow-hidden mt-14 rounded-[2rem] bg-slate-950 shadow-2xl">
                <div className="absolute -top-32 -right-20 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />

                <div className="relative px-6 py-10 sm:px-10 sm:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
                  <div>
                    <span className="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs font-bold text-cyan-300">
                      NEED HELP?
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-4">
                      Service समझ नहीं आ रही?
                    </h3>

                    <p className="text-slate-400 mt-2 max-w-xl">
                      हमारे expert से directly WhatsApp पर बात करें। हम आपकी
                      AC problem के हिसाब से सही service suggest करेंगे।
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildGeneralWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 text-white font-black shadow-xl hover:scale-[1.03] transition"
                    >
                      💬 WhatsApp Now
                    </a>

                    <a
                      href={getMapsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/10 px-6 py-4 text-white font-black hover:bg-white/15 transition"
                    >
                      📍 Location
                    </a>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  CONTACT STRIP
              ===================================================== */}

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <InfoBox
                  icon="📞"
                  title="Call Us"
                  value={PHONE_DISPLAY}
                  href={`tel:+${PHONE}`}
                />

                <InfoBox
                  icon="💬"
                  title="WhatsApp"
                  value="Book Service"
                  href={buildGeneralWhatsAppLink()}
                />

                <InfoBox
                  icon="📍"
                  title="Location"
                  value="View on Google Maps"
                  href={getMapsUrl()}
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href={buildGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Prime Cool Service"
        className="fixed right-5 bottom-5 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-70 transition" />

        <span className="relative flex items-center gap-3 rounded-full bg-green-500 text-white px-5 py-4 shadow-2xl font-black hover:scale-105 transition">
          <span className="text-xl">💬</span>

          <span className="hidden sm:block">WhatsApp</span>
        </span>
      </a>
    </div>
  );
}

// =====================================================
// STAT CARD
// =====================================================

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-4">
      <div className="text-xl sm:text-2xl font-black text-white">
        {value}
      </div>

      <div className="text-xs sm:text-sm text-slate-400 mt-1">
        {label}
      </div>
    </div>
  );
}

// =====================================================
// SERVICE CARD
// =====================================================

function ServiceCard({ service, category, index }) {
  const totalPrice =
    service.price !== null && service.price !== undefined
      ? service.price + (service.labour || 0)
      : null;

  const whatsappLink = buildWhatsAppLink(service, category);

  return (
    <article
      className="group relative overflow-hidden rounded-[1.5rem] bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
      style={{
        animationDelay: `${index * 45}ms`,
      }}
    >
      {/* Top Gradient */}
      <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`} />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
          >
            {category.icon}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-extrabold text-slate-900 leading-snug">
              {service.name}
            </h3>

            {service.labour && (
              <span className="inline-flex mt-2 rounded-full bg-amber-50 border border-amber-100 px-2.5 py-1 text-[10px] font-black text-amber-700">
                LABOUR ₹{formatPrice(service.labour)}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-slate-200" />

        {/* Price */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Service Price
            </p>

            {totalPrice !== null ? (
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  ₹{formatPrice(totalPrice)}
                </span>
              </div>
            ) : (
              <div className="mt-1">
                <span className="text-xl font-black text-slate-600">
                  On Request
                </span>
              </div>
            )}

            {service.labour && service.price !== null && (
              <p className="text-[11px] text-slate-400 mt-1">
                ₹{formatPrice(service.price)} + ₹
                {formatPrice(service.labour)} labour
              </p>
            )}

            {service.price === 0 && (
              <p className="text-[11px] text-slate-400 mt-1">
                Parts/repair charges may apply
              </p>
            )}
          </div>

          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
            →
          </div>
        </div>

        {/* Book */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 flex items-center justify-center gap-2 w-full rounded-xl py-3.5 bg-gradient-to-r ${category.gradient} text-white font-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all`}
        >
          <span>💬</span>
          Book on WhatsApp
        </a>
      </div>

      {/* Hover Glow */}
      <div
        className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r ${category.gradient} opacity-0 blur-3xl group-hover:opacity-15 transition-opacity pointer-events-none`}
      />
    </article>
  );
}

// =====================================================
// EMPTY STATE
// =====================================================

function EmptyState({ searchQuery }) {
  return (
    <div className="rounded-[2rem] bg-white border border-slate-200 p-10 sm:p-16 text-center shadow-sm">
      <div className="mx-auto w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-4xl">
        🔍
      </div>

      <h3 className="text-2xl font-black text-slate-800 mt-6">
        Service नहीं मिली
      </h3>

      <p className="text-slate-500 mt-2 max-w-md mx-auto">
        {searchQuery
          ? `"${searchQuery}" के लिए कोई service नहीं मिली।`
          : "इस category में अभी कोई service उपलब्ध नहीं है।"}
      </p>
    </div>
  );
}

// =====================================================
// INFO BOX
// =====================================================

function InfoBox({ icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-xl transition">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="text-sm font-black text-slate-800 mt-1 truncate">
          {value}
        </p>
      </div>
    </a>
  );
}