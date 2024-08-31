"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { CgClose, CgMenuRightAlt } from "react-icons/cg"

const sections = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "Events",
    id: "events",
  },
  {
    title: "Services",
    id: "services",
  },
  {
    title: "Blog",
    id: "blog",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Gallery",
    id: "gallery",
  },
  {
    title: "Jobs",
    id: "jobs",
  },
  {
    title: "Product",
    id: "product",
  },
]

export const Navbar: FC = () => {
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState(-1)
  const [activeMenu, setActiveMenu] = useState("home")
  const [currentHash, setCurrentHash] = useState("")

  const checkRoute = (link: string) => {
    return `${link}` === currentHash
  }

  const currRoute = usePathname()

  useEffect(() => {
    setPhoneMenuOpen(false)
  }, [currRoute])

  const scrollToHash = (id: string) => {
    window.scrollTo({
      behavior: "smooth",
      top:
        (document.getElementById(id)?.getBoundingClientRect()?.top || 0) -
        document.body.getBoundingClientRect().top -
        60,
    })

    setActiveMenu(id)
  }

  useEffect(() => {
    // const element = document.getElementById("services")
    // if (element) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== activeMenu) {
            setActiveMenu(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-400px",
      }
    )
    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu("home")
          }
        })
      },
      {
        rootMargin: "0px",
      }
    )

    const homeSelector = document.getElementById("androidEngineersWritten")
    if (homeSelector) {
      observer.observe(homeSelector)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        id="header"
        className="w-full block fixed z-50 animated sm:px-8 bg-secondary backdrop-filter backdrop-blur-md shadow-md shadow-black/30"
      >
        <nav>
          <div className="flex justify-between items-center animated py-2 animate-fadeInDown">
            <Link
              href="/"
              className="flex ml-2 lg:ml-4 justify-center items-end font-semibold md:font-bold text-base lg:text-xl w-5/6 space-x-4"
            >
              <Image
                src="/logo.png"
                height={50}
                width={50}
                alt="Android Engineers logo"
              />
              <span className="w-full text-white">
                Android <span className="text-highlight">Engineers</span>
              </span>
            </Link>
            <CgMenuRightAlt
              className={`${
                phoneMenuOpen ? "invisible" : "visible"
              } md:hidden mr-4 cursor-pointer`}
              size={32}
              color="white"
              onClick={() => setPhoneMenuOpen(true)}
            />
            <ul className="hidden md:flex items-center justify-center lg:mr-8">
              {sections.map((item, i) => (
                <li
                  key={i}
                  className={`opacity-95 relative cursor-pointer py-4 text-lg ${
                    activeMenu === item.id ? "text-primary" : "text-white"
                  } font-medium mx-4 hover:text-primary transition-all duration-200`}
                >
                  <div
                    onClick={() => {
                      scrollToHash(item.id)
                    }}
                  >
                    {item.title}
                  </div>
                  {/* <div className="invisible group-hover:flex h-0 group-hover:h-auto overflow-y-hidden group-hover:overflow-y-visible  group-hover:visible opacity-0 transition-all duration-300 group-hover:opacity-100 top-full flex-col absolute right-1/2 rounded-lg translate-x-1/2 bg-white text-gray-800 shadow-lg w-80">
                    <ul className="py-4 px-4">
                      {item.children?.map((childItem, j) => (
                        <DropdownMenu
                          key={j}
                          item={childItem}
                          urlPrefix={item.url || ""}
                        />
                      ))}
                    </ul>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <AnimatePresence>
          {phoneMenuOpen && (
            <motion.div
              className="md:hidden absolute top-0 left-0 w-screen h-screen bg-secondary py-2 px-4 flex flex-col items-end"
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 0.95,
              }}
              exit={{
                x: "100%",
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <CgClose
                size="32"
                color="white"
                onClick={() => {
                  setPhoneMenuOpen(false)
                  setAccordionOpen(-1)
                }}
              />
              <ul className="flex flex-col py-8 px-1">
                {[
                  {
                    title: "Home",
                    id: "home",
                  },
                  {
                    title: "Events",
                    id: "events",
                  },
                  {
                    title: "Services",
                    id: "services",
                  },
                  {
                    title: "Blog",
                    id: "blog",
                  },
                  {
                    title: "Projects",
                    id: "projects",
                  },
                  {
                    title: "Gallery",
                    id: "gallery",
                  },
                  {
                    title: "Jobs",
                    id: "jobs",
                  },
                  {
                    title: "Product",
                    id: "product",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`relative cursor-pointer text-2xl font-bold px-4 py-4 animated  text-right hover:text-primary/35 ${
                      checkRoute(item.id) ? "text-primary" : "text-gray-200"
                    }`}
                  >
                    {/* {item.exists && !item.disableRedirectOnMobile ? ( */}
                    <div
                      className="nav-link-item-mobile"
                      onClick={() => {
                        setPhoneMenuOpen(false)
                        setAccordionOpen(-1)

                        scrollToHash(item.id)
                      }}
                    >
                      {item.title}
                    </div>
                    {/* ) : (
                      <div
                        className={
                          accordionOpen === i ? "" : "nav-link-item-mobile"
                        }
                      >
                        <span
                          className="w-full"
                          onClick={() =>
                            item.children &&
                            setAccordionOpen((prev) => (prev === i ? -1 : i))
                          }
                        >
                          {item.title}
                        </span>
                        <ul
                          className={`mt-2 ${
                            item.children && i === accordionOpen
                              ? "max-h-96 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0"
                          } animated`}
                        >
                          {item.children?.map((child, j) => (
                            <li
                              key={j}
                              className={`relative text-lg font-medium py-2 animated text-gray-700 text-right hover:text-primary `}
                            >
                              <Link
                                href={child.link || item.url + child.url}
                                passHref
                              >
                                <a
                                  onClick={() => {
                                    setPhoneMenuOpen(false)
                                    setAccordionOpen(-1)
                                  }}
                                >
                                  {child.title} -
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
