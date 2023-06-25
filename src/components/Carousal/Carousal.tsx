import React from "react"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import ProgrammeCard from "../Cards/ProgrammeCard"
import ScrollButton from "../Buttons/ScrollButton"

const Carousal: React.FC<any> = ({ title, programmes, type, styles }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.1, // Percentage of element visibility to trigger animation
  })

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 320,
        behavior: "smooth",
      })
    }
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 320,
        behavior: "smooth",
      })
    }
  }

  const renderCard = (
    type: any,
    programme: any,
    index: any,
    inViewRef: any,
    inView: any
  ) => {
    switch (type) {
      case "products":
        return (
          <ProgrammeCard
            programme={programme}
            index={index}
            inViewRef={inViewRef}
            inView={inView}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className={`${styles} flex items-center `}>
        <ScrollButton isPrevious={false} action={handleScrollLeft} />
        <div
          ref={scrollContainerRef}
          className="py-8 flex flex-row gap-5 mr-10 items-end w-[100vw] overflow-x-auto scrollbar-hide pl-5 pr-16"
        >
          {programmes?.map((programme: any, index: any) =>
            renderCard("products", programme, index, inViewRef, inView)
          )}
        </div>
        <ScrollButton isPrevious={true} action={handleScrollRight} />
      </div>
    </div>
  )
}

export default Carousal
