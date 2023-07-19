import { motion } from "framer-motion"
import { useState } from "react"
import RoundActionButton from "../Buttons/RoundActionButton"
import { getImageSrcWithAPIKey } from "../../features/landing/api/getImage"
import { Languages, MovieGenre } from "../../config/Constants"
import { ProgrammeCardProps } from "../../config/Types"
import ProgramDetailsModal from "../Modals/ProgramDetailsModal"

const ProgrammeCard: React.FC<ProgrammeCardProps> = ({ programme, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  const expandingCardVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <>
      <ProgramDetailsModal id="my_modal_5" programData={programme}>
        <motion.div
          key={index}
          className="card hover:z-10  h-full hover:shadow-2xl hover:shadow-gray-800 duration-300 ease-linear"
          initial={{ opacity: 1, scale: 1, originX: 0.5, originY: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={toggleExpansion}
          onMouseLeave={() => setIsExpanded(false)}
          variants={expandingCardVariants}
        >
          <div className="w-[13rem] h-[25rem] flex items-end flex-col ">
            <img src={getImageSrcWithAPIKey(programme.poster_path)} alt="" />
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-2 px-2 text-white bg-dark text-sm w-full"
              >
                <h2 className="pb-1 line-clamp-1 font-bold text-white text-xl">
                  {programme.title || programme.original_title}
                </h2>
                <div className="action-bar p-1 flex gap-3 pt-2 justify-between">
                  <div className="flex gap-3">
                    <RoundActionButton
                      icon={"play"}
                      styles={"bg-slate-100 hover:bg-slate-200 text-dark"}
                      hoverText={"Play"}
                    />
                    <RoundActionButton
                      icon={"info"}
                      styles={"bg-slate-100 hover:bg-slate-200 text-dark"}
                      hoverText={"Episode and info"}
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary text-white rounded-md p-1 text-sm font-medium">
                      {programme.vote_average}
                    </div>
                    <div className="border bg-transparent flex justify-center items-center rounded-md px-1">
                      <p className="text-[0.5rem]"> U/A 13+</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 pt-1 items-center">
                  <div className="text-white p-1 text-sm font-medium">
                    {
                      Languages[
                        programme.original_language as keyof typeof Languages
                      ]
                    }
                  </div>
                  <div>|</div>
                  <div className="text-white p-1 text-sm font-medium">
                    {MovieGenre[programme.genre_ids[0]]}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </ProgramDetailsModal>
    </>
  )
}

export default ProgrammeCard
