import { useQuery } from "react-query"
import { axios } from "../../../lib/axios"
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query"

export const getComedyMovies = (): Promise<any[]> => {
  return axios.get(`/discover/movie?with_genres=35`)
}

type QueryFnType = typeof getComedyMovies

type UseComedyMoviesOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useComedyMovies = ({ config }: UseComedyMoviesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryFn: () => getComedyMovies(),
  })
}
