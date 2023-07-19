import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import ProgrammeCard from "../Cards/ProgrammeCard"
import ScrollButton from "../Buttons/ScrollButton"
import { useWatchables } from "../../features/landing/api/getWatchables"
import SimpleCard from "../Cards/SimpleCard"
import { CarousalProps, Programme } from "../../config/Types"

const Carousal: React.FC<CarousalProps> = ({
  title,
  cardType,
  styles,
  genreId
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const programList = useWatchables({ genreId })
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    cardType: string,
    programme: Programme,
    index: number,
    inViewRef: any,
    inView: any
  ) => {
    switch (cardType) {
      case "ProgrammeCard":
        return (
          <ProgrammeCard
            programme={programme}
            key={index}
            inViewRef={inViewRef}
            inView={inView}
          />
        )
      case "SimpleCard":
        return <SimpleCard programme={programme} key={index}/>
      default:
        return null
    }
  }

  return (
    <div
      className={`bg-transparent flex gap-4 items-start duration-150 ease-linear ${styles}`}
    >
      <div>
        <h2 className="text-3xl font-bold pl-5">{title}</h2>
        <div className={`${styles} flex items-center `}>
          <ScrollButton
            isPrevious={false}
            action={handleScrollLeft}
            isLarge={cardType === "SimpleCard" ? false : true}
          />
          <div
            ref={scrollContainerRef}
            className="pt-8 pb-20 flex flex-row gap-5 mr-10 items-end w-[100vw] overflow-x-auto scrollbar-hide pl-5 pr-16"
          >
            {programList?.data?.results?.map(
              (programme: Programme, index: number) =>
                renderCard(cardType, programme, index, inViewRef, inView)
            )}
          </div>
          <ScrollButton
            isPrevious={true}
            action={handleScrollRight}
            isLarge={cardType === "SimpleCard" ? false : true}
          />
        </div>
      </div>
    </div>
  )
}

export default Carousal
