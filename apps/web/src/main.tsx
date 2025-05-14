import { createRoot } from 'react-dom/client';
import './style.css';
import { Button } from '@repo/ui';

const App = () => (
  <div>
    <Button />
  </div>
);

createRoot(document.getElementById('app')!).render(<App />);
