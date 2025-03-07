import { Input } from '@/shared/Input/Input';
import { getPeople } from '@/utils/api/axios/requests/people';
import { useDebounceValue, useQuery } from '@siberiacancode/reactuse';
import { useState } from 'react';
import { SearchPeopleItem } from './components/SearchPeopleItem';

import styles from './SearchPeople.module.scss';

export const SearchPeople = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounceValue(searchValue, 500);

  const { data, isLoading } = useQuery(
    () =>
      getPeople({
        config: {
          params: {
            search: debouncedValue
          }
        }
      }),
    {
      keys: ['searchValue', debouncedValue]
    }
  );

  return (
    <div className={styles.searchPeopleWrapper}>
      <Input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Поиск'
        label='Поиск по имени'
      />
      {isLoading && <div className='status'>Loading...</div>}
      {data &&
        data.data.results.map((people, index) => <SearchPeopleItem people={people} key={index} />)}
    </div>
  );
};
