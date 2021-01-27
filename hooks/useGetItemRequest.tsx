import { useQuery } from 'react-query';

import { LINE_BASE_URL } from '../constants';
import { PokeData } from '../types';

export const useGetItemRequest = (pokeId: number): PokeData | null => {
  const method = 'GET';

  const parameters = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: method
  };

  const {
    status,
    data,
    isFetching,
    error
  }: {
    status: string;
    data: PokeData;
    isFetching: boolean;
    error: Error;
  } = useQuery('pokeData', async () => {
    return await fetch(`${LINE_BASE_URL}/${pokeId}`, parameters).then((res) =>
      res.json()
    );
  });

  if (status === 'loading' || isFetching) {
    return null;
    // return <div>loading...</div>; // react skeleton
  }

  if (status === 'error') {
    return null;
    // return <div>{error.message}</div>; // react skeleton
  }

  return data;
};
