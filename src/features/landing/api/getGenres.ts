import { useQuery } from "react-query"
import { axios } from "../../../lib/axios"
import { ExtractFnReturnType, QueryConfig } from "../../../lib/react-query"

export const getGenres = (type: string): Promise<any[]> => {
  return axios.get(`/genre/${type}/list`)
}

type QueryFnType = typeof getGenres

type UseGenresOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useGenres = ({ config }: UseGenresOptions = {}, type: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["genres", type],
    queryFn: () => getGenres(type),
  })
}
