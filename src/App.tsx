// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './appRoutes';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
