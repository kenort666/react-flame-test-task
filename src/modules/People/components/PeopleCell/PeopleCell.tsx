import { Button } from '@/components';
import { useState } from 'react';
import './PeopleCell.module.scss';

interface PeopleCellProps {
  people: PeopleInfo;
}

export const PeopleCell = ({ people }: PeopleCellProps) => {
  const [value, setValue] = useState<string>();

  const addPeopleToFavorite = (people: PeopleInfo) => {
    localStorage.setItem(people.name, JSON.stringify(people));
    setValue(people.name);
  };

  const deletePeopleFromFavorite = (people: PeopleInfo) => {
    localStorage.removeItem(people.name);
    setValue('');
    console.log(value);
  };

  return (
    <>
      <td>{people.name}</td>
      <td>{people.height}</td>
      <td>{people.mass}</td>
      <td>{people.hair_color}</td>
      <td>{localStorage.getItem(people.name) ? <Button onClick={() => deletePeopleFromFavorite(people)} variant='delete'>Удалить</Button> : <Button onClick={() => addPeopleToFavorite(people)} variant='add'>Добавить</Button>}</td>
    </>
  );
};
