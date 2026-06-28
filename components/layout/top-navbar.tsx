"use client"

import { useState, useEffect } from "react"
import { Bell, Activity, User } from "lucide-react"
import { ThemeSwitcher } from "@/components/layout/theme-switcher"

const QUOTES = [
  "THE WORLD IS WATCHING; OBSERVE INTERCONNECTEDNESS IN REAL-TIME.",
  "DATA STREAM STABLE // GLOBAL NODE ACCESS GRANTED.",
  "SURVEILLANCE GRID NOMINAL // ALL FEEDS OPERATIONAL.",
  "MONITORING 190+ NATIONS // ZERO LATENCY ACHIEVED.",
  "LIVE TELEMETRY ACTIVE // QUANTUM BANDWIDTH OPTIMAL.",
  "GLOBAL OBSERVATION NETWORK // SECURE CHANNEL ESTABLISHED.",
]

export function TopNavbar() {
  const [time, setTime] = useState("")
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [bandwidth] = useState(94)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "UTC",
        }) + " UTC"
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="h-[70px] flex-shrink-0 border-b border-border/50 bg-card/80 backdrop-blur-xl flex items-center px-6">
      {/* Left Zone: Logo + Time + Quote */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo/logo.png"
            alt="CyberWatch Logo"
            className="h-8 w-8 rounded-md object-contain"
          />
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-border/50 flex-shrink-0" />

        {/* Atomic Chronograph */}
        <div className="flex-shrink-0">
          <span className="font-mono text-sm font-bold text-primary dark:text-glow-cyan tracking-[0.15em]">
            {time}
          </span>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-border/50 flex-shrink-0" />

        {/* Rolling Quote */}
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-mono text-muted-foreground/50 italic truncate tracking-wide transition-opacity duration-500">
            <span className="text-muted-foreground/30">[</span>
            {" "}{QUOTES[quoteIndex]}{" "}
            <span className="text-muted-foreground/30">]</span>
          </p>
        </div>
      </div>

      {/* Right Zone: Metrics & Profile */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Bandwidth Meter */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/30">
          <Activity className="h-3 w-3 text-green-500 dark:text-[#39FF14]" />
          <span className="text-[10px] font-mono text-green-600 dark:text-[#39FF14] dark:text-glow-green">
            {bandwidth}% BW
          </span>
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 transition-colors group">
          <Bell className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#39FF14] dark:bg-[#39FF14] bg-green-500 animate-pulse-live" />
        </button>

        {/* Dark Mode Toggle */}
        <ThemeSwitcher />

        {/* User Avatar */}
        <button className="h-9 w-9 rounded-full border-2 border-primary/40 bg-muted/50 flex items-center justify-center hover:border-primary/80 transition-all">
          <User className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  )
}
