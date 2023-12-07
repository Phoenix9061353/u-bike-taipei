import { useQuery } from '@tanstack/react-query';
import { getData } from './getData';

export function useData() {
  const {
    isLoading,
    data: sites,
    error,
  } = useQuery({
    queryKey: ['sites'],
    queryFn: getData,
  });

  return { isLoading, error, sites };
}
