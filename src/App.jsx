import { RouterProvider } from 'react-router-dom';
import router from './router';
import './core/i18n';
export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;

function App() {
  return (
    <>
      <RouterProvider baseName={PUBLIC_URL}  router={router} />
    </>
  )
}

export default App
