import type { FavoritePeople } from '@/App';

export const isPeopleInList = (favorite: FavoritePeople[], people: PeopleInfo) => {
  return favorite.some((item: FavoritePeople) => item.name === people.name);
};
