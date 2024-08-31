import type { Metadata } from "next"
import "swiper/css"
import "../styles/globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { NextUIProvider } from "@nextui-org/react"
import { Rubik } from "next/font/google"

export const metadata: Metadata = {
  title: "Android Engineers",
  description: "Android Engineers",
}

const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubikFont.className}>
        <NextUIProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            theme="dark"
            position="bottom-center"
            autoClose={1000}
          />
        </NextUIProvider>
      </body>
    </html>
  )
}
