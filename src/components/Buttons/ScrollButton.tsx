import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { ScrollButtonProps } from "../../config/Types"

const ScrollButton: React.FC<ScrollButtonProps> = ({ action, isPrevious, isLarge }) => {
  return (
    <>
      <button
        className={`absolute ${
          isPrevious
            ? "right-10 top-50 mr-[-2.5rem] bg-gradient-to-l from-black to-transparent"
            : " left-0 top-50 bg-gradient-to-r from-black to-transparent"
        } z-20 w-10  ${isLarge ? 'h-[495px]' : 'h-[15rem]' }  flex justify-center items-center hover:backdrop-blur-sm hover:bg-dark duration-200 ease-linear`}
        onClick={action}
      >
        {isPrevious ? (
          <ChevronRightIcon className="w-8 h-8" />
        ) : (
          <ChevronLeftIcon className="w-8 h-8" />
        )}
      </button>
    </>
  )
}

export default ScrollButton
