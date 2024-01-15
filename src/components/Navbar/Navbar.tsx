import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../Search/SearchBar"
import ExpandingMenu from "./ExpandingMenu"

const navLinks = [
  { url: "/", label: "Home", id: 1 },
  { url: "/shows", label: "TV Shows", id: 2 },
  { url: "/movies", label: "Movies", id: 3 },
  { url: "/new", label: "New & Popular", id: 4 },
  { url: "/watchlist", label: "Watchlist", id: 5 },
]

const Navbar = () => {
  const [isNavbarTop, setIsNavbarTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const isTop = scrollTop === 0

      setIsNavbarTop(isTop)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${
        isNavbarTop ? "bg-nav-tint" : "bg-dark "
      }  py-3 px-5 fixed w-full top-0 flex justify-between items-center lg:h-[5rem] z-10 flex-col lg:flex-row`}
    >
      <div className="flex gap-14 items-center w-full justify-between">
        <div className="flex items-center gap-10">
          <img
            src="/Romedyflix.svg"
            alt="logo"
            className="w-56"
          />
          <ul className=" gap-5 text-white font-regular hidden lg:flex">
            {navLinks.map((navLink) => (
              <Link to={navLink.url} key={navLink.id}>
                <li
                  className={
                    navLink.url === location.pathname ? "font-medium" : ""
                  }
                >
                  {navLink.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <ExpandingMenu />
      </div>
      <div className="flex justify-end items-center w-full lg:w-3/12">
        <SearchBar />
      </div>
    </motion.nav>
  )
}

export default Navbar
