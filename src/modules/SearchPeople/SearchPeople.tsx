import { Input } from '@/shared/Input/Input';
import { getPeople } from '@/utils/api/axios/requests/people';
import { useQuery } from '@siberiacancode/reactuse';
import { useState } from 'react';
import { SearchPeopleItem } from './components/SearchPeopleItem';
import styles from './SearchPeople.module.scss';

export const SearchPeople = () => {
  const [searchValue, setSearchValue] = useState('dar');
  const { data, isLoading } = useQuery(() => getPeople({ config: { params: { search: searchValue } } }));


  if (isLoading) return <div className='status'>Loading...</div>


  return (
    <div className={styles.searchPeopleWrapper}>
      <Input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Поиск'
        label='Поиск по имени'
      />
      {data?.data.results.map((people, index) => <SearchPeopleItem people={people} key={index} />)}
    </div>
  );
};
