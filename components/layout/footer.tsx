import Link from "next/link"
import { Globe } from "lucide-react"
import { Container } from "./container"
import { SITE_NAME } from "@/constants"

const footerLinks = {
  explore: [
    { label: "World Map", href: "/map" },
    { label: "Countries", href: "/countries" },
    { label: "Categories", href: "/categories" },
    { label: "Trending", href: "/trending" },
  ],
  categories: [
    { label: "Beach Cameras", href: "/categories/beach" },
    { label: "Traffic Cameras", href: "/categories/traffic" },
    { label: "Airport Cameras", href: "/categories/airport" },
    { label: "Wildlife Cameras", href: "/categories/wildlife" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Globe className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore thousands of public webcams from around the world. Discover
              live views of beaches, cities, mountains, and more.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
