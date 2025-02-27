import { getPeople } from '@/utils/api/axios/requests/people';
import { useEffect, useState } from 'react';

export const usePeople = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState<People>();

  useEffect(() => {
    async function getPeoples() {
      setLoading(true);
      const response = await getPeople();

      setPeople(response.data);

      setLoading(false);
    }
    getPeoples();
  }, []);

  return { people, loading };
};
