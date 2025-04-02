"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeContext from "./context/ThemeContext";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeContext>
            <Navbar />
            {children}
          </ThemeContext>
        </ThemeProvider>
      </body>
    </html>
  )
}