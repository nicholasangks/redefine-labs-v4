import Link from "next/link";

import { HoverCircleButton } from "./hover-circle-button";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
];

export function AppHeader() {
  return (
    <header className="fixed top-6 left-0 z-50 w-full px-4 md:px-8 2xl:px-12">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-medium text-black">
            <img
              src="/images/brand-assets/logo.png"
              alt="Redefine Labs"
              className="w-8"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden rounded-full bg-white/45 px-4 backdrop-blur-sm sm:block"
          >
            <ul className="flex h-9 items-center gap-7 font-medium text-[.95rem] text-muted">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <HoverCircleButton
          href="mailto:hello@redefinelabs.com"
          className="px-4"
        >
          Start a project
        </HoverCircleButton>
      </div>
    </header>
  );
}
