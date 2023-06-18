import { useQuery } from "react-query"
import { axios } from "../../../lib/axios"
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query"

export const getWatchables = (
  type: string,
  genreId: string
): Promise<any[]> => {
  return axios.get(`/discover/${type}?with_genres=${genreId}`)
}

type QueryFnType = typeof getWatchables

type UseWatchableOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useWatchables = ({ type, genreId, config }: any) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryFn: () => getWatchables(type, genreId),
  })
}
