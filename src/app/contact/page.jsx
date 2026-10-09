
import Link from "next/link";

const PHONE = "918527378513";
const PHONE_DISPLAY = "8527378513 / 7992206530";

function WhatsAppLink() {
  const message = encodeURIComponent(
    "Hello Prime Cool Service! I want to enquire about your AC service."
  );

  return "https://wa.me/" + PHONE + "?text=" + message;
}

const CONTACT_INFO = [
  {
    title: "Call Us",
    value: PHONE_DISPLAY,
    description: "Call us for service enquiries",
    href: "tel:+918527378513",
  },
  {
    title: "WhatsApp",
    value: "Chat With Us",
    description: "Get quick service assistance",
    href: WhatsAppLink(),
  },
  {
    title: "Service Area",
    value: "Patna & Nearby Areas",
    description: "Home, office & business AC service",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              Contact Prime Cool Service
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Get in Touch With
              <span className="block text-cyan-600">
                Prime Cool Service
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Need AC installation, repair, servicing or maintenance?
              Contact us and our team will help you with the right service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {CONTACT_INFO.map((item) => {
              const CardContent = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-sm font-black text-cyan-600">
                    {item.title === "Call Us"
                      ? "01"
                      : item.title === "WhatsApp"
                      ? "02"
                      : "03"}
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-semibold text-cyan-600">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.title === "WhatsApp" ? "_blank" : undefined
                    }
                    rel={
                      item.title === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                  >
                    {CardContent}
                  </a>
                );
              }

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + WhatsApp */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                Send Enquiry
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Tell Us What You Need
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                Fill in your details and service requirement. You can also
                directly contact us on WhatsApp for faster assistance.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Available Services
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "AC Installation",
                    "AC Repair",
                    "AC Servicing",
                    "Gas Charging",
                    "AC Maintenance",
                    "Compressor Repair",
                  ].map((service) => (
                    <div
                      key={service}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      <span className="mr-2 text-cyan-600">✓</span>
                      {service}
                    </div>
                  ))}
                </div>

                <a
                  href={WhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-700 sm:w-auto"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                Service Enquiry
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Enter your details and we will contact you.
              </p>

              <form
                action={WhatsAppLink()}
                method="get"
                target="_blank"
                className="mt-7 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter mobile number"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Select Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  >
                    <option value="">Select a service</option>
                    <option>AC Installation</option>
                    <option>AC Repair</option>
                    <option>AC Servicing</option>
                    <option>Gas Charging</option>
                    <option>AC Maintenance</option>
                    <option>Compressor Repair</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your AC problem..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-700"
                >
                  Send Enquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-3xl font-black sm:text-4xl">
              Need AC Service Today?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-cyan-50 sm:text-base">
              Get in touch with Prime Cool Service for reliable AC
              installation, repair and maintenance support.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+918527378513"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm sm:flex-row sm:px-8">
          <p className="text-slate-500">
            Need more information?
          </p>

          <div className="flex gap-5">
            <Link
              href="/about"
              className="font-semibold text-slate-600 transition hover:text-cyan-600"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="font-semibold text-slate-600 transition hover:text-cyan-600"
            >
              Services
            </Link>

            <Link
              href="/"
              className="font-semibold text-slate-600 transition hover:text-cyan-600"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
