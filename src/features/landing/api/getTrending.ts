import { useQuery } from 'react-query';
import { axios } from '../../../lib/axios';
import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

export const getTrending = (): Promise<any[]> => {
  return axios.get(`/trending/all/week`);
};

type QueryFnType = typeof getTrending;

type UseTrendingOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTrending = ({ config }: UseTrendingOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['trending'],
    queryFn: () => getTrending(),
  });
};
