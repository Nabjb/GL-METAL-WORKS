import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "Structural Steel", href: "/#services" },
    { label: "Warehouses", href: "/#services" },
    { label: "Metal Staircases", href: "/#services" },
    { label: "Custom Fabrication", href: "/#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/images and videos/logo.png"
                    alt="GL Metal Works Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  GL Metal Works
                </span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                Over 30 years of excellence in metal construction and fabrication.
                Building solutions that last.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a
                    href="tel:+35799123456"
                    className="hover:text-white transition-colors"
                  >
                    +357 99 123 456
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@glmetalworks.com"
                    className="hover:text-white transition-colors"
                  >
                    info@glmetalworks.com
                  </a>
                </li>
                <li>Limassol, Cyprus</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} GL Metal Works Ltd. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Crafted with precision since 1990
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

