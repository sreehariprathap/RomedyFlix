import { motion } from "framer-motion"
import { useState } from "react"
import RoundActionButton from "../Buttons/RoundActionButton"
import { getImageSrcWithAPIKey } from "../../features/landing/api/getImage"

const ProgrammeCard: React.FC<any> = ({ programme }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  console.log(programme)

  const expandingCardVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      className="card hover:z-10"
      initial={{ opacity: 1, scale: 1, originX: 0.5, originY: 0.5 }}
      whileHover={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={toggleExpansion}
      onMouseLeave={() => setIsExpanded(false)}
      variants={expandingCardVariants}
    >
      <div className="w-[13rem] h-[25rem] flex items-end flex-col">
        <img src={getImageSrcWithAPIKey(programme.poster_path)} alt="" />
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-2 px-2 text-white bg-dark-secondary text-sm w-full"
          >
            <h2 className="pb-1 line-clamp-1">{programme.original_title || programme.title}</h2>
            <div className="action-bar p-1 flex gap-3 pt-2">
              <RoundActionButton
                icon={"play"}
                styles={"bg-slate-100 hover:bg-slate-200 text-dark"}
                hoverText={"Play"}
              />
              <RoundActionButton
                icon={"down"}
                styles={"bg-slate-100 hover:bg-slate-200 text-dark"}
                hoverText={"Episode and info"}
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ProgrammeCard
