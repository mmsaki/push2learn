import * as React from 'react';
import { useStyletron } from 'baseui';
import NavBar from './components/NavBar';
import AppDataTable from './components/AppDataTable';

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
    </main>
  );
};

export default Index;
