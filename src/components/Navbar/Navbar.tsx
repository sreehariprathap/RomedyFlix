import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../Search/SearchBar"

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
        isNavbarTop ? "bg-white" : "bg-light-secondary backdrop-blur-md"
      }  py-3 px-5 sticky top-0 flex justify-between items-center h-[5rem]`}
    >
      <div className="flex gap-14 items-center">
        <img
          src="src/assets/logos/Romedyflix.svg"
          alt="logo"
          className="w-56"
        />
        <ul className="flex gap-5 font-regular">
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
      <div className="flex justify-center items-center">
        <SearchBar />
      </div>
    </motion.nav>
  )
}

export default Navbar
