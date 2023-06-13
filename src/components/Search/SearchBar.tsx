import { useState } from "react"
import { motion } from "framer-motion"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleExpand = () => {
    setIsExpanded(true)
  }

  return (
    <div className="relative flex items-center">
      <motion.div
        className={`flex flex-col justify-between items-center px-3 py-2 rounded-md b`}
        initial={{ width: 70 }}
        animate={{ width: isExpanded ? "100%" : 50 }}
        transition={{ duration: 0.3 }}
        onClick={handleToggleExpand}
      >
        {isExpanded ? (
          <input
            type="text"
            className="w-full border-b-2  px-2 py-1 pr-10 focus:outline-none"
            placeholder="Search"
          />
        ) : (
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mx-14" />
        )}
      </motion.div>
      {isExpanded && (
        <XMarkIcon
          className="absolute right-5 w-5 h-5 text-gray-500"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  )
}

export default SearchBar
