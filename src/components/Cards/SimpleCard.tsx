import { useState } from "react"
import { motion } from "framer-motion"
import RoundActionButton from "../Buttons/RoundActionButton"
import { getImageSrcWithAPIKey } from "../../features/landing/api/getImage"
import { MovieGenre } from "../../config/Constants"
import { ProgrammeCardProps } from "../../config/Types"

const SimpleCard: React.FC<ProgrammeCardProps> = ({ programme, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }
  
  const expandingCardVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      key={index}
      className="card hover:z-10 hover:shadow-2xl hover:shadow-gray-800 duration-300 ease-linear "
      initial={{ opacity: 1, scale: 1, originX: 0.5, originY: 0.5 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={toggleExpansion}
      onMouseLeave={() => setIsExpanded(false)}
      variants={expandingCardVariants}
    >
      <div className="w-[18rem] h-[9rem] flex items-end flex-col">
        <img src={getImageSrcWithAPIKey(programme.backdrop_path)} alt="" />
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-white  text-sm w-full absolute top-[-0.8rem]"
          >
            <div className="flex justify-between items-center bg-nav-tint pb-1 py-4 px-2 gap-3 ">
              <h2 className=" line-clamp-1 font-bold text-white text-xl ">
                {programme.title || programme.original_title}
              </h2>
              <div className="border bg-transparent flex justify-center items-center rounded-md w-[6rem]">
                <p className="text-[0.8rem]"> U/A 13+</p>
              </div>
            </div>
            <div className="flex w-full justify-center h-[7rem] items-center">
              <RoundActionButton
                icon={"play"}
                styles={"bg-slate-100 hover:bg-slate-200 text-dark w-14 h-14"}
              />
            </div>
            <div className="text-white py-4 pb-6 px-2 text-sm font-medium bg-black-tint flex justify-between items-center">
              {MovieGenre[programme.genre_ids[0]]}
              {" | "}
              {MovieGenre[programme.genre_ids[1]]}
              <div>
                <RoundActionButton
                  icon={"info"}
                  styles={
                    "bg-transparent text-white hover:shadow-lg text-dark w-2 h-2"
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default SimpleCard
