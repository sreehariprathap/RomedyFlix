import { Spinner } from "../../../components/Spinner/Spinner"
import { API_URL } from "../../../config"
import { useTrending } from "../api/getTrending"

const LandingLayout = () => {
  const trendingQuery: any = useTrending()
  console.log(
    trendingQuery.data != undefined ? trendingQuery.data.results : "null"
  )
  if (trendingQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    )
  } else if (trendingQuery.data != undefined) {
    return (
      <div>
        <h1>hello</h1>
        {trendingQuery.data.results.map((movie: any) => (
          <img
            src={`${API_URL}${movie.backdrop_path || movie.poster_path}`}
            alt=""
          />
        ))}
      </div>
    )
  }
}

export default LandingLayout
