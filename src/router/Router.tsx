import { Favorite } from '@/pages';
import { People } from '@/pages/People/People';
import { ROUTES } from '@/utils/constants/routes';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import App from '../App';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.MAIN} element={<App />}>
      <Route index element={<People />} />
      <Route path={ROUTES.FAVORITES} element={<Favorite />} />
    </Route>
  )
);
