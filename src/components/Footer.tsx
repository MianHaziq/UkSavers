import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/#about-us", label: "How It Works" },
      { href: "/#why-us", label: "Why Choose Us" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Categories",
    links: [
      { href: "/products", label: "Snacks & Sweets" },
      { href: "/products", label: "Drinks & Beverages" },
      { href: "/products", label: "Laundry & Household" },
      { href: "/products", label: "Health & Beauty" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-[1180px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="UK Savers"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <span className="font-display text-lg font-extrabold text-white">
                UK <span className="text-accent">Savers</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A UK-based wholesale and distribution business supplying
              independent retailers and traders across the UK with everyday
              brands at real value.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href="mailto:info@uksaversltd.com"
                  className="hover:text-accent"
                >
                  info@uksaversltd.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href="tel:+442030001234" className="hover:text-accent">
                  +44 (0)20 3000 1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Unit 1, Trade Park, London, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} UK Savers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
