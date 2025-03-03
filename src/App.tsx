import type { FavoritePeople } from './pages';
import { usePeople } from '@/modules/Table/hooks/usePeople';
import { useLocalStorage } from '@siberiacancode/reactuse';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header/Header';

export const App = () => {
  const { people, loading } = usePeople();

  const { value, set } = useLocalStorage<FavoritePeople[]>('favorites', []);

  const [favorite, setFavorite] = useState<FavoritePeople[]>(value ?? []);

  if (loading) return <h1>Loading...</h1>;

  const addFavorite = (newFavorite: FavoritePeople) => {
    setFavorite([...favorite, newFavorite]);

    set([...favorite, newFavorite]);
  };

  const removeFavorite = (name: string) => {
    setFavorite(favorite.filter((item) => item.name !== name));

    set(favorite.filter((item) => item.name !== name));
  };

  return (
    <>
      <Header />

      <div className='stars' />
      <div className='stars2' />
      <div className='stars3' />

      <main className='container'>
        <Outlet context={{ people, favorite, addFavorite, removeFavorite }} />
      </main>
    </>
  );
};

export default App;
