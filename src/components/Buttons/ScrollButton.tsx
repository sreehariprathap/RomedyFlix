import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

const ScrollButton: React.FC<any> = ({ action, isPrevious }) => {
  return (
    <>
      <button
        className={`absolute ${
          isPrevious ? "right-10 top-50 mr-[-3rem] bg-gradient-to-l from-black to-transparent" : " left-0 top-50 bg-gradient-to-r from-black to-transparent"
        } z-20   w-10 h-[450px]  flex justify-center items-center hover:backdrop-blur-sm hover:bg-black duration-200 ease-linear`}
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
