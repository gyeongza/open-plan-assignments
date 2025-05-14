import { createRoot } from 'react-dom/client';
import { Button } from '@repo/ui';
import './globals.css';

const App = () => (
  <div>
    <Button />
  </div>
);

createRoot(document.getElementById('app')!).render(<App />);
