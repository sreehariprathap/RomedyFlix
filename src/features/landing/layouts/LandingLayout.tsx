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
      </>
    )
  }
}

export default LandingLayout
