import Link from "next/link";

const PHONE = "918527378513";
const PHONE_DISPLAY = "8527378513 / 7992206530";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    short: "ig",
    url: "https://www.instagram.com/",
    color:
      "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400",
  },
  {
    name: "Facebook",
    short: "f",
    url: "https://www.facebook.com/",
    color: "hover:bg-blue-600",
  },
  {
    name: "YouTube",
    short: "▶",
    url: "https://www.youtube.com/",
    color: "hover:bg-red-600",
  },
  {
    name: "LinkedIn",
    short: "in",
    url: "https://www.linkedin.com/",
    color: "hover:bg-sky-700",
  },
  {
    name: "X",
    short: "𝕏",
    url: "https://x.com/",
    color: "hover:bg-black",
  },
];

const SERVICES = [
  "AC Installation",
  "AC Repair",
  "Gas Charging",
  "AC Maintenance",
  "Compressor Repair",
  "AC Parts & Accessories",
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

function WhatsAppLink() {
  const message = encodeURIComponent(
    "Hello Prime Cool Service! I want to enquire about your AC services."
  );
  return `https://wa.me/${PHONE}?text=${message}`;
}

function SocialIcon({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${item.name} page`}
      title={item.name}
      className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-transparent hover:shadow-lg ${item.color}`}
    >
      <span className="text-base font-extrabold transition-transform duration-300 group-hover:scale-110">
        {item.short}
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white">
      {/* Background Animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="footer-orb footer-orb-one absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="footer-orb footer-orb-two absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:45px_45px]" />
      </div>

      {/* Top Gradient */}
      <div className="relative h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA SECTION */}
        <div className="relative -mt-1 border-b border-white/10 py-12 sm:py-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  Your AC Care Partner
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Beat the Heat.
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Stay Cool with Us.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  AC installation, repair, servicing aur maintenance ke liye
                  Prime Cool Service se contact karein. Apni requirement
                  batayein aur WhatsApp par booking karein.
                </p>
              </div>

              <a
                href={WhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 font-extrabold text-white shadow-xl shadow-green-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/20"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                  💬
                </span>

                <span>
                  <span className="block text-base">Book a Service</span>
                  <span className="mt-0.5 block text-xs font-medium text-white/75">
                    Chat with us on WhatsApp
                  </span>
                </span>

                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {/* BRAND */}
          <div className="footer-reveal">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                ❄️
              </div>

              <div>
                <h3 className="text-xl font-black tracking-tight">
                  PRIME COOL
                </h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Service & Repair
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Aapke AC ki servicing, repairing aur installation ke liye ek
              convenient solution. Apni service select karein aur humse
              directly contact karein.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                Follow Our Journey
              </p>

              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <SocialIcon key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-reveal">
            <h3 className="text-base font-extrabold text-white">Quick Links</h3>
            <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-reveal">
            <h3 className="text-base font-extrabold text-white">
              Our Services
            </h3>
            <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-reveal">
            <h3 className="text-base font-extrabold text-white">
              Get In Touch
            </h3>
            <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <div className="mt-5 space-y-5">
              <a href={`tel:+${PHONE}`} className="group flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10">
                  📞
                </span>

                <span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Call Us
                  </span>
                  <span className="mt-1 block text-sm font-bold text-slate-200 transition-colors group-hover:text-cyan-300">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={WhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg transition-all duration-300 group-hover:border-green-400/30 group-hover:bg-green-500/10">
                  💬
                </span>

                <span>
                  <span className="block text-xs font-semibold text-slate-500">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-bold text-slate-200 transition-colors group-hover:text-green-300">
                    Chat With Us
                  </span>
                </span>
              </a>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg transition-all duration-300 group-hover:border-red-400/30 group-hover:bg-red-500/10">
                  📍
                </span>

                <span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Find Us
                  </span>
                  <span className="mt-1 block text-sm font-bold text-slate-200 transition-colors group-hover:text-cyan-300">
                    Google Maps
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <h4 className="font-bold text-white">Need AC Service Today?</h4>
              <p className="mt-1 text-sm text-slate-400">
                Get in touch with Prime Cool Service. Developed By Dharm Kumar
              </p>
            </div>

            <a
              href={WhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20"
            >
              Contact Us
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © 2025{" "}
            <span className="font-bold text-slate-300">
              Prime Cool Service
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 sm:gap-6 sm:text-sm">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-cyan-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}