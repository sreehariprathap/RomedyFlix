import { useQuery } from "react-query"
import { axios } from "../../../lib/axios"
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query"

export const getDramaMovies = (): Promise<any[]> => {
  return axios.get(`/discover/movie?with_genres=18`)
}

type QueryFnType = typeof getDramaMovies

type UseDramaMoviesOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useDramaMovies = ({ config }: UseDramaMoviesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryFn: () => getDramaMovies(),
  })
}
