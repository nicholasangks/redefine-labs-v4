import Link from "next/link";

import { Heading } from "./typography";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Selected work", href: "/works" },
];

export function AppFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-transparent text-foreground md:mt-24">
      <div className="px-4 md:px-8 2xl:px-12">
        <div className="grid gap-12 py-10 md:grid-cols-[minmax(0,1.6fr)_minmax(10rem,0.5fr)_minmax(14rem,0.7fr)] md:py-12">
          <div className="gap-4 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/brand-assets/logo.png"
                alt="Redefine Labs"
                className="h-10 w-10 object-contain"
              />
            </Link>
            <Heading as="h2" size="section" className="mt-4">
              <span className="block">Digital</span>
              <span className="block">Redefined.</span>
            </Heading>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-[10px] uppercase 2xl:text-[11px]">
              Explore
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[10px] uppercase 2xl:text-[11px]">
              Contact
            </p>
            <a
              href="mailto:hello@redefinelabs.com"
              className="break-all"
            >
              hello@redefinelabs.com
            </a>
            <a
              href="https://wa.me/60123490816"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block w-fit"
            >
              WhatsApp: +60 12-349 0816
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Redefine Labs Solutions (JM1001714-A) All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
