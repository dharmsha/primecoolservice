import Link from "next/link";

const PHONE = "918527378513";

function WhatsAppLink() {
  const message = encodeURIComponent(
    "Hello Prime Cool Service! I want to know more about your AC services."
  );

  return "https://wa.me/" + PHONE + "?text=" + message;
}

const SERVICES = [
  "AC Installation",
  "AC Repair",
  "AC Servicing",
  "Gas Charging",
  "AC Maintenance",
  "Compressor Repair",
];

const FEATURES = [
  {
    title: "Professional Service",
    text: "Reliable AC installation, repair and maintenance support.",
  },
  {
    title: "Quick Response",
    text: "We understand your requirement and provide timely service support.",
  },
  {
    title: "Quality Work",
    text: "Our focus is on proper service and long-term AC performance.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                About Prime Cool Service
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                Your Trusted
                <span className="block text-cyan-600">
                  AC Service Partner
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Prime Cool Service provides reliable AC installation, repair,
                servicing and maintenance solutions for homes, offices and
                businesses.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-700"
                >
                  Book a Service
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Simple Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl">
                  ❄️
                </div>

                <h2 className="mt-8 text-3xl font-black">
                  Prime Cool Service
                </h2>

                <p className="mt-3 leading-7 text-cyan-50">
                  Complete AC care from installation to regular maintenance
                  and repair.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-black">6+</p>
                    <p className="mt-1 text-sm text-cyan-100">
                      Services
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-black">100%</p>
                    <p className="mt-1 text-sm text-cyan-100">
                      Customer Focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Simple, Reliable & Professional
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Prime Cool Service ka aim AC service ko customers ke liye
              simple aur convenient banana hai. AC installation se lekar
              repair, gas charging aur maintenance tak, hum aapki requirement
              ke according service support provide karte hain.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Why Prime Cool Service?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {FEATURES.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-sm font-black text-cyan-600">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Complete AC Solutions
              </h2>
            </div>

            <Link
              href="/services"
              className="text-sm font-bold text-cyan-600 hover:text-cyan-700"
            >
              View All Services →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service}
                href="/services"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 hover:shadow-sm"
              >
                <span>{service}</span>
                <span className="text-cyan-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-3xl font-black sm:text-4xl">
              Need AC Service?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-cyan-50 sm:text-base">
              Contact Prime Cool Service today and get the right AC service
              for your home, office or business.
            </p>

            <a
              href={WhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}