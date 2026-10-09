import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://primecoolservice.com";
const SITE_NAME = "Prime Cool Service";
const PHONE = "+91-8527378513";
const PHONE_2 = "+91-7992206530";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Prime Cool Service | AC, Fridge, Washing Machine Repair & Installation",
    template: "%s | Prime Cool Service",
  },
  description:
    "Prime Cool Service — All brand AC, Fridge, Washing Machine, RO, Geyser, Microwave & Kitchen Chimney Service, Installation & Repairing. Experienced technicians, genuine spare parts, doorstep service. हर सर्विस गारंटी के साथ. Call 8527378513.",

  keywords: [
    "AC service",
    "AC repair",
    "AC installation",
    "AC gas charging",
    "Fridge repair",
    "Refrigerator service",
    "Washing machine repair",
    "RO service",
    "Water purifier repair",
    "Geyser repair",
    "Microwave repair",
    "Kitchen chimney service",
    "AC service near me",
    "AC repair near me",
    "Split AC service",
    "Window AC service",
    "LG AC service",
    "Samsung AC service",
    "Voltas AC service",
    "Daikin AC service",
    "Prime Cool Service",
    "AC technician",
    "Home appliance repair",
    "Same day AC service",
    "AC service with guarantee",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "hi-IN": SITE_URL,
    },
  },

  category: "Home Services",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Prime Cool Service | AC, Fridge & Appliance Repair Experts",
    description:
      "All brand AC, Fridge, Washing Machine, RO, Geyser, Microwave & Chimney Service with guarantee. Book now on WhatsApp — 8527378513.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Cool Service — AC Repair & Installation Experts",
        type: "image/jpeg",
      },
    ],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prime Cool Service | AC, Fridge & Appliance Repair Experts",
    description:
      "All brand AC, Fridge, Washing Machine, RO, Geyser, Microwave & Chimney Service with guarantee. Call 8527378513.",
    images: ["/twitter-image.jpg"],
    creator: "@primecoolservice",
    site: "@primecoolservice",
  },

  verification: {
    google: "your-google-verification-code",
  },

  other: {
    "contact:phone_number": PHONE,
    "contact:email": "info@primecoolservice.com",
    "business:contact_data:street_address": "Your Shop Address",
    "business:contact_data:locality": "Your City",
    "business:contact_data:region": "Your State",
    "business:contact_data:postal_code": "000000",
    "business:contact_data:country_name": "India",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": SITE_URL,
  name: SITE_NAME,
  alternateName: "Prime Cool AC Service",
  description:
    "AC, Fridge, Washing Machine, RO, Geyser, Microwave & Kitchen Chimney service, installation and repairing. All brands. Doorstep service with guarantee.",
  url: SITE_URL,
  telephone: PHONE,
  email: "info@primecoolservice.com",
  priceRange: "₹₹",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Shop Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "000000",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.209,
  },
  areaServed: {
    "@type": "City",
    name: "Your City",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/primecoolservice",
    "https://www.instagram.com/primecoolservice",
    "https://www.youtube.com/@primecoolservice",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Appliance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AC Service & Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Fridge Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Washing Machine Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "RO Water Purifier Service" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Geyser Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Microwave Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Kitchen Chimney Service" },
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Prime Cool" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=yes" />
      </head>

      <body className="flex min-h-full flex-col text-gray-900">
        <Navbar />

        {/* ✅ no padding, no bg, just flex */}
        <main className="flex flex-1 flex-col">{children}</main>

        <Footer />

        <WhatsAppFloat />
      </body>
    </html>
  );
}

// ============ FLOATING WHATSAPP BUTTON ============
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918527378513?text=Hi%20Prime%20Cool%20Service%2C%20mujhe%20appliance%20service%20chahiye."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/50 transition-transform duration-300 group-hover:scale-110">
        <svg
          className="h-7 w-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </span>

      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Chat with us
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </span>
    </a>
  );
}