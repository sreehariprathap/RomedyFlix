import Carousal from "../../../components/Carousal/Carousal"
import { Spinner } from "../../../components/Spinner/Spinner"
import { useTrending } from "../api/getTrending"
import Trending from "../components/Trending"

const LandingLayout = () => {
  const trendingQuery: any = useTrending()

  if (trendingQuery.isLoading) {
    return (
      <div className="w-full h-[30rem] flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    )
  } else if (trendingQuery.data != undefined) {
    return (
      <>
        <div>
          <Trending trendingData={trendingQuery.data.results} />
        </div>
        <div>
          <div className="flex flex-col mb-10 px-5">
            <div className="bg-transparent group h-[20em] flex gap-4 items-start duration-150 ease-linear group-hover:h-[33rem]">
              <Carousal
                title={"Drama"}
                genreId={"18"}
                cardType={"SimpleCard"}
                styles={""}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LandingLayout
