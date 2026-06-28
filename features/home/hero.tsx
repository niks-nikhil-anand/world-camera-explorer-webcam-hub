"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Globe, Video } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search"
import { Container } from "@/components/layout"

export function Hero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] h-48 w-48 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center justify-center gap-8 py-24 md:py-32 lg:py-40 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Video className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">
                12,500+ live cameras worldwide
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Explore the World
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Through Live Cameras
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Discover thousands of public webcams from every corner of the globe.
              Watch beaches, cities, mountains, and wildlife in real time.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            className="w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchBar
              size="lg"
              value={searchQuery}
              onChange={setSearchQuery}
              onSubmit={(q) => router.push(`/search?q=${encodeURIComponent(q)}`)}
              placeholder="Search beaches, cities, mountains..."
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" onClick={() => router.push("/map")}>
              <Globe className="h-4 w-4" />
              Explore Map
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push("/categories")}
            >
              Browse Categories
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
