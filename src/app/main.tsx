import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '../router';
import '@/assets/styles/globals.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
