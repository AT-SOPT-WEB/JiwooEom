import { RouterProvider } from 'react-router-dom';
import { NicknameProvider } from './contexts/NicknameContext';
import router from './routes/router';

export default function App() {
  return (
    <NicknameProvider>
      <RouterProvider router={router} />
    </NicknameProvider>
);
}
