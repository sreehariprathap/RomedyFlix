import { useQuery } from "react-query"
import { axios } from "../../../lib/axios"
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query"

export const getWatchables = (genreId: string): Promise<any[]> => {
  return axios.get(`/discover/movie?with_genres=${genreId}`)
}

type QueryFnType = typeof getWatchables

type UseWatchableOptions = {
  genreId: string
  config?: QueryConfig<QueryFnType>
}

export const useWatchables = ({ genreId, config }: UseWatchableOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["movies", genreId],
    queryFn: () => getWatchables(genreId),
  })
}
